import { ARROWSMALL_ICON } from "./icon-comp.js";

export default function breadcrumbsComponent(json) {
  const path = document.location.pathname
    .split("/")
    .pop()
    .replace(/\/?.html/g, "");
  let pathName = path.charAt(0).toUpperCase() + path.slice(1);

  if (path === "search-result") {
    pathName = "Search result";
  }

  if (path === "add-item") {
    pathName = "Add item";
  }

  if (path === "edit-item") {
    pathName = "Edit item";
  }

  const container = document.querySelector(".breadcrumbs__container");
  if (path === "details") {
    pathName = json.title;

    container.innerHTML = `
      <ul>
        <li><a href="./">Home</a></li>
        <li>${ARROWSMALL_ICON}</li>
        <li><a href="./${json.category.name.toLowerCase()}.html">${json.category.name}</a></li>
        <li>${ARROWSMALL_ICON}</li>
        <li class="crumbs">${pathName}</li>
      </ul>
    `;
  } else {
    container.innerHTML = `
      <ul>
        <li><a href="./">Home</a></li>
        <li>${ARROWSMALL_ICON}</li>
        <li class="crumbs">${pathName}</li>
      </ul>
    `;
  }
}
