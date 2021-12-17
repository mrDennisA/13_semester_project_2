import { GET_JSON, PRODUCT_URL } from "./settings/api.js";

import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import { massageComponent } from "./components/message-comp.js";

import breadcrumbsComponent from "./components/breadcrumbs-comp.js";
import detailsComponent from "./components/details-comp.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = PRODUCT_URL + id;

if (!id) {
  location.href = "./";
}

focusFunction();

const container = document.querySelector("main");
container.innerHTML = `
  <div class="container">${loaderComponent()}</div>
`;

(async function () {
  try {
    const json = await GET_JSON(url);

    document.title = `Home Decor | ${json.title}`;
    headerComponent(json);

    container.innerHTML = `
      <div class="container">
        <div class="breadcrumbs__container"></div>
        <section class="details__container"></section>
      </div>
    `;

    breadcrumbsComponent(json);
    detailsComponent(json);
  } catch (error) {
    console.log("error", error);
    massageComponent("error", `${error}`, "main .container");
  }
})();

footerComponent();
