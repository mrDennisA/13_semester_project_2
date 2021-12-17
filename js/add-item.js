import { GET_JSON, CATEGORY_URL, SUBCATEGORY_URL } from "./settings/api.js";
import { loadToken } from "./settings/storage.js";

import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import { massageComponent } from "./components/message-comp.js";

import breadcrumbsComponent from "./components/breadcrumbs-comp.js";
import addItemComponent from "./components/addItem-comp.js";

if (!loadToken()) {
  location.href = "./";
}

document.title = "Home Decor | Add Item";

focusFunction();
headerComponent();

const container = document.querySelector("main");
container.innerHTML = `
  <div class="container">${loaderComponent()}</div>
`;

(async function () {
  try {
    const jsonCategory = await GET_JSON(CATEGORY_URL);
    const jsonSubcategory = await GET_JSON(SUBCATEGORY_URL);

    container.innerHTML = `
  <div class="container">
    <div class="breadcrumbs__container"></div>
    <section class="addItem__container">
      <h2>Add Item</h2>
      <div class="message__container"></div>
      <div class="form__container"></div>
    </section>
  </div>
`;
    breadcrumbsComponent();
    addItemComponent(jsonCategory, jsonSubcategory);
  } catch (error) {
    console.log("Error message", error);
    massageComponent("error", `${error}`, "main .container");
  }
})();

footerComponent();
