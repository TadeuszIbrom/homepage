let buttonElement = document.querySelector(".js-button__lightDark");
let body = document.querySelector(".js-body");
let navBlock = document.querySelector(".js-navigation");
let mainContainer = document.querySelector(".js-mainContainer");
let tableHeaderElement = document.querySelectorAll(".js-table__header");
let tableCellElement = document.querySelectorAll(".js-table__cell");
let brandElement = document.querySelectorAll(".js-table__brand");
let themeNameElement = document.querySelector(".js-themeName");
let navigationHover = document.querySelectorAll(".js-navigation__link");
let tableItemElement = document.querySelectorAll(".js-table-item");
console.log(tableItemElement)

buttonElement.addEventListener("click", () => {
    body.classList.toggle("darkTheme");
    navBlock.classList.toggle("darkTheme");
    mainContainer.classList.toggle("darkTheme");
    tableCellElement.forEach(tableCellElement => tableCellElement.classList.toggle("table__cell--mono"));
    tableHeaderElement.forEach(tableHeaderElement => tableHeaderElement.classList.toggle("table__header--mono"));
    brandElement.forEach(brandElement => brandElement.classList.toggle("table__brand--mono"));
    navigationHover.forEach(navigationHover => navigationHover.classList.toggle("navigation__link--mono"));
    tableItemElement.forEach(tableItemElement => tableItemElement.classList.toggle("table__item--mono"));
    if (body.classList.contains("darkTheme")) { themeNameElement.innerHTML = "kolorowa"; }
    else { themeNameElement.innerHTML = "monochromatyczna"; };
}
);

