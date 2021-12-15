import { loadUser } from "../settings/storage.js";
import { USER_ICON } from "./icon-comp.js";

import headerLoginFunction from "../utils/headerLogin-func.js";
import headerLogoutFunction from "../utils/headerLogout-func.js";

export default function loginNavComponent() {
  const container = document.querySelector(".loginNav__container");

  if (loadUser()) {
    container.innerHTML = `
      <button class="user link">
        ${USER_ICON}
        <span class="name">${loadUser().username}</span>
      </button>
      <div class="nav">
        <div>
          <a class="link" href="./add-item.html">
            <span class="name">Add Product</span>
          </a>
        </div>
        <div class="logout">
          <button class="link">
            <span class="name">Log out</span>
          </button>
        </div>
      </div>
    `;

    headerLogoutFunction();
  } else {
    container.innerHTML = `
    <a class="link" href="./login.html">
      ${USER_ICON}
      <span class="name">Login</span>
    </a>
  `;
  }

  headerLoginFunction();
}
