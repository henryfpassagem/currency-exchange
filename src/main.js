// 1 - get the button and input html tags
// 2 - Add the event of click in the button
// 3 - Request the API
// 4 - Render the data
// 5 - Add error validation

import Swal from "sweetalert2";
import { renderCurrenciesList } from "./helpers";

import "./style.css";

const buttonElement = document.querySelector(".btn-search");
const inputElement = document.querySelector(".input-currency");
const listElement = document.querySelector(".currencies-list");
const titleElement = document.querySelector(".currencies-title");

buttonElement.addEventListener('click', (event) => {
    //Prevent submiting the form and reloading the page
    event.preventDefault();
    
    const API_URL = "https://economia.awesomeapi.com.br/"
    const API_ENDPOINT = `json/daily/${inputElement.value}/30`

    fetch(`${API_URL}${API_ENDPOINT}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("error fetching data");
        })
        .then((currenciesList) => {
            renderCurrenciesList(
                currenciesList,
                listElement,
                titleElement
            );
        })
        .catch((error) => Swal.fire({
            title: "Error",
            text: "Can't get the prices",
            icon: "error",
        }));
});