function createLielement(currency){
    const LiElement = document.createElement("li");
    const dateElement = document.createElement("p");
    const valueElement = document.createElement("span");

    //timestamp is in seconds and must be in ms
    //to show correct date (multiply by 1000)
    const MILISECONDS = 1000;
    const date = new Date(currency.timestamp * MILISECONDS);

    dateElement.textContent = date.toLocaleDateString('en-US');
    valueElement.textContent = currency.ask;

    LiElement.appendChild(dateElement);
    LiElement.appendChild(valueElement);

    return LiElement
};

export function renderCurrenciesList(
    currenciesList,
    listElement,
    titleElement
) {
    //Fist clean listElement
    listElement.innerHTML = '';

    const { code, codein } = currenciesList[0];

    titleElement.textContent = `Prices of ${code} in ${codein} 
        from the last 30 days`;

    const liElements = currenciesList.map((currency) => createLielement(currency));

    listElement.append(...liElements);
}