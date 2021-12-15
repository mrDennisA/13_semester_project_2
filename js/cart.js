import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import { massageComponent } from "./components/message-comp.js";

import breadcrumbsComponent from "./components/breadcrumbs-comp.js";
import cartComponent from "./components/cart-comp.js";

document.title = "Home Decor | Cart";

focusFunction();
headerComponent();

const container = document.querySelector("main");
container.innerHTML = `
  <div class="container">${loaderComponent()}</div>
`;

try {
  container.innerHTML = `
  <div class="container">
    <div class="breadcrumbs__container"></div>
    <section class="cart__container"></section>
  </div>
`;

  breadcrumbsComponent();
  cartComponent();
} catch (error) {
  console.log("Error message", error);
  massageComponent("error", `${error}`, "main .container");
}

footerComponent();
