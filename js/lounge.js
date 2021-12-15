import { CATEGORY_URL, GET_JSON, GET_FILTER } from "./settings/api.js";

import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import massageComponent from "./components/message-comp.js";

import cardComponent from "./components/card-comp.js";

document.title = "Home Decor | Lounge";

focusFunction();
headerComponent();

const container = document.querySelector("main");
container.innerHTML = `
  <div class="container">${loaderComponent()}</div>
`;

(async function () {
  try {
    const json = await GET_JSON(CATEGORY_URL);
    const data = GET_FILTER(json, "lounge");

    container.innerHTML = `
      <div class="container">
        <div class="breadcrumbs__container"></div>
        <section class="card__container"></section>
      </div>
    `;

    cardComponent(data.products);
  } catch (error) {
    console.log("Error message", error);
    massageComponent("error", `${error}`, "main .container");
  }
})();

footerComponent();
