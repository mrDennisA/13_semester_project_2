import { ARROWSMALL_ICON } from "./icon-comp.js";

export default function breadcrumbsComponent() {
  const { pathname } = document.location;

  console.log(pathname);

  let page = "";
  if (pathname === "/noroff/FEU2/design_2_ma/kitchen.html") {
    page = "Kitchen";
  }
  if (pathname === "/noroff/FEU2/design_2_ma/lounge.html") {
    page = "Lounge";
  }
  if (pathname === "/noroff/FEU2/design_2_ma/bedroom.html") {
    page = "Bedroom";
  }

  const container = document.querySelector(".breadcrumbs");
  container.innerHTML = `
    <ul>
      <li><a href="./">Home</a></li>
      <li>${ARROWSMALL_ICON}</li>
      <li class="crumbs">${page}</li>
    </ul>
  
  `;
}
