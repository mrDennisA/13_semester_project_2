import { SEARCH_ICON } from "./icon-comp.js";
import searchFunction from "../utils/search-func.js";

export default function searchComponent() {
  const container = document.querySelector(".search__container");
  container.innerHTML = `
    <form class="search__form">
      <input class="search__input" type="search" placeholder="Search" />
      <button class="search__button">${SEARCH_ICON}</button>
    </form>
  `;

  searchFunction();
}
