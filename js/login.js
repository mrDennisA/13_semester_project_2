import focusFunction from "./utils/focus-func.js";
import headerComponent from "./components/header-comp.js";
import footerComponent from "./components/footer-comp.js";

import loaderComponent from "./components/loader-comp.js";
import massageComponent from "./components/message-comp.js";

import breadcrumbsComponent from "./components/breadcrumbs-comp.js";
import loginFormComponent from "./components/loginForm-comp.js";

document.title = "Home Decor | Log In";

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
      <section class="login-section"></section>
    </div>
  `;

  breadcrumbsComponent();
  loginFormComponent();
} catch (error) {
  console.log("Error message", error);
  massageComponent("error", `${error}`, "main .container");
}

footerComponent();
