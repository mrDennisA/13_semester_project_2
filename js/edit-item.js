import { GET_JSON, PRODUCT_URL, CATEGORY_URL, SUBCATEGORY_URL } from "./settings/api.js";
import { loadToken } from "./settings/storage.js";

import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import { massageComponent } from "./components/message-comp.js";

import breadcrumbsComponent from "./components/breadcrumbs-comp.js";
import editItemComponent from "./components/editItem-comp.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!loadToken() || !id) {
  location.href = "./";
}

focusFunction();
headerComponent();

const container = document.querySelector("main");
container.innerHTML = `
  <div class="container">${loaderComponent()}</div>
`;

(async function () {
  try {
    const jsonProduct = await GET_JSON(PRODUCT_URL + id);
    const jsonCategory = await GET_JSON(CATEGORY_URL);
    const jsonSubcategory = await GET_JSON(SUBCATEGORY_URL);

    document.title = `Home Decor | Edit ${jsonProduct.title}`;

    container.innerHTML = `
      <div class="container">
        <div class="breadcrumbs__container"></div>
        <section class="editItem__container">
          <h2>Edit Item</h2>
          <div class="message__container"></div>
          <div class="form__container"></div>
        </section>
      </div>
    `;

    breadcrumbsComponent();
    editItemComponent(jsonProduct, jsonCategory, jsonSubcategory);
  } catch (error) {
    console.log("Error message", error);
    massageComponent("error", `${error}`, "main .container");
  }
})();

footerComponent();
