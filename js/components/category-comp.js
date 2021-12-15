import { ARROW_ICON } from "./icon-comp.js";

export default function categoryComponent(data) {
  const container = document.querySelector(".category__container");

  data.forEach((item) => {
    container.innerHTML += `
      <a class="section" href="./${item.name.toLowerCase()}.html">
        <div class="media">
          <img class="image" src="${item.image.url}" alt="">
        </div>
        <div class="link">
          <div class="button">
            <h3 class="text">${item.name} Decor</h3>
            ${ARROW_ICON}
          </div>
        </div>
      </a>
    `;
  });
}
