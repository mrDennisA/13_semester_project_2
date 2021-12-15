import { GET_JSON, PRODUCT_URL, CATEGORY_URL, SUBCATEGORY_URL } from "./settings/api.js";
import { loadToken } from "./settings/storage.js";

import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import massageComponent from "./components/message-comp.js";

import editItemComponent from "./components/editItem-comp.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = PRODUCT_URL + id;

if (!loadToken() || !id) {
  location.href = "/";
}

focusFunction();
headerComponent();

const container = document.querySelector("main");
container.innerHTML = `
  <div class="container">${loaderComponent()}</div>
`;

(async function () {
  try {
    const json = await GET_JSON(url);
    const jsonCategory = await (await fetch(CATEGORY_URL)).json();
    const jsonSubcategory = await (await fetch(SUBCATEGORY_URL)).json();

    document.title = `Home Decor | Edit ${json.title}`;

    container.innerHTML = `
      <div class="container">
        <div class="breadcrumbs"></div>
        <section class="editItem__container"></section>
      </div>
    `;

    editItemComponent(json, jsonCategory, jsonSubcategory);
  } catch (error) {
    console.log("Error message", error);
    massageComponent("error", `${error}`, "main .container");
  }
})();

footerComponent();
