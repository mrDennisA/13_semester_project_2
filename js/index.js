import { BANNER_URL, CATEGORY_URL, PROMOTE_URL, GET_JSON, GET_FILTER } from "./settings/api.js";

import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import massageComponent from "./components/message-comp.js";

import bannerComponent from "./components/banner-comp.js";
import categoryComponent from "./components/category-comp.js";
import cardComponent from "./components/card-comp.js";

document.title = "Home Decor | Home";

focusFunction();
headerComponent();

const container = document.querySelector("main");
container.innerHTML = `
    <div class="container">${loaderComponent()}</div>
  `;

(async function () {
  try {
    const jsonBanner = await GET_JSON(BANNER_URL);
    const jsonCategory = await GET_JSON(CATEGORY_URL);
    const jsonPremote = await GET_JSON(PROMOTE_URL);
    const premoteData = GET_FILTER(jsonPremote, "featured");

    container.innerHTML = `
    <div class="container">
      <section class="banner__container"></section>
      <section class="category__container"></section>
      <div>
        <h3>Fetured</h3>
        <div class="line"></div>
        <section class="card__container"></section>
      </div>
    </div>
    `;

    bannerComponent(jsonBanner);
    categoryComponent(jsonCategory);
    cardComponent(premoteData.products);
  } catch (error) {
    console.log("Error message", error);
    massageComponent("error", `${error}`, "main .container");
  }
})();

footerComponent();
