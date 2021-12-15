import { PRODUCT_URL, GET_JSON } from "./settings/api.js";

import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import massageComponent from "./components/message-comp.js";

import cardComponent from "./components/card-comp.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const search = params.get("search");

if (!search) {
  location.href = "/";
}

document.title = "Home Decor | Search Result";

focusFunction();
headerComponent();

const container = document.querySelector("main");
container.innerHTML = `
  <div class="container">${loaderComponent()}</div>
`;

(async function () {
  try {
    const json = await GET_JSON(PRODUCT_URL);

    const filterResult = json.filter((data) => {
      if (data.category !== null || data.subcategory !== null) {
        return (
          data.title.toLowerCase().includes(search) || data.category.name.toLowerCase().includes(search) || data.subcategory.name.toLowerCase().includes(search)
        );
      }
    });

    container.innerHTML = `
      <div class="container">
        <div class="breadcrumbs__container"></div>
        <section class="card__container"></section>
      </div>
    `;

    if (filterResult.length) {
      cardComponent(filterResult);
    } else {
      massageComponent("info", "no match found", ".card__container");
    }
  } catch (error) {
    console.log("Error message", error);
    massageComponent("error", `${error}`, "main .container");
  }
})();

footerComponent();
