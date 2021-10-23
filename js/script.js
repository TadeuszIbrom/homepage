
{
    const chengetheme = () => {


        const channgetabelcolors = () => {
            const tableHeaderElement = document.querySelectorAll(".js-table__header");
            const tableCellElement = document.querySelectorAll(".js-table__cell");
            const brandElement = document.querySelectorAll(".js-table__brand");
            const tableItemElement = document.querySelectorAll(".js-table-item");
            tableCellElement.forEach(tableCellElement => tableCellElement.classList.toggle("table__cell--mono"));
            tableHeaderElement.forEach(tableHeaderElement => tableHeaderElement.classList.toggle("table__header--mono"));
            brandElement.forEach(brandElement => brandElement.classList.toggle("table__brand--mono"));
            tableItemElement.forEach(tableItemElement => tableItemElement.classList.toggle("table__item--mono"));
        }
        const naviHoverChange = () => {
            const navigationHover = document.querySelectorAll(".js-navigation__link");
            navigationHover.forEach(navigationHover => navigationHover.classList.toggle("navigation__link--mono"));

        }
        const changeButtonName = () => {
            const body = document.querySelector(".js-body");
            const themeNameElement = document.querySelector(".js-themeName");
            if (body.classList.contains("darkTheme")) { themeNameElement.innerHTML = "kolorowa"; }
            else { themeNameElement.innerHTML = "monochromatyczna"; };
        };

        const changeMainElements = () => {
            const body = document.querySelector(".js-body");
            const mainContainer = document.querySelector(".js-mainContainer");
            const navBlock = document.querySelector(".js-navigation");
            navBlock.classList.toggle("darkTheme");
            body.classList.toggle("darkTheme");
            mainContainer.classList.toggle("darkTheme");
        }


        naviHoverChange()
        changeMainElements()
        changeButtonName()



    }

    {
        const buttonElement = document.querySelector(".js-button__lightDark");
        buttonElement.addEventListener("click", () => {
            chengetheme()
        });
    }


}