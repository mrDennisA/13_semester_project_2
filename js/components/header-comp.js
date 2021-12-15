import { LOGO_ICON, BAROPEN_ICON, BARCLOSED_ICON } from "./icon-comp.js";
import headerFunction from "../utils/header-func.js";

import headerLoginComponent from "./headerLogin-comp.js";
import headerCartComponent from "./headerCart-comp.js";
import headerSearchComponent from "./headerSearch-comp.js";

export default function headerComponent() {
  const pathname = window.location.pathname.split("/").pop();

  const container = document.querySelector("header");
  container.innerHTML = `
    <div class="container">
      <div class="header__container">
        <button class="button">${BAROPEN_ICON}</button>
        <div class="title">
          <a class="link" href="./index.html">
            <h1 class="name">Home Decor</h1>
            ${LOGO_ICON}
          </a>
        </div>
        <div class="user__container">
          <div class="loginNav__container"></div>
          <a class="cartNav__container link" href="./cart.html"></a>
        </div>
      </div>
      <div class="search__container"></div>
    </div>

    <div class="modal__container"></div>

    <nav class="nav__container">
      <button class="button">${BARCLOSED_ICON}</button>
      <div class="navlink">
        <a class="link ${pathname === "" || pathname === "index.html" ? "active" : ""}" href="./">Home</a>
        <a class="link ${pathname === "kitchen.html" ? "active" : ""}" href="./kitchen.html">Kitchen</a>
        <a class="link ${pathname === "lounge.html" ? "active" : ""}" href="./lounge.html">Lounge</a>
        <a class="link ${pathname === "bedroom.html" ? "active" : ""}" href="./bedroom.html">Bedroom</a>
      </div>
    </nav>
  `;

  headerFunction();
  headerLoginComponent();
  headerCartComponent();
  headerSearchComponent();
}
