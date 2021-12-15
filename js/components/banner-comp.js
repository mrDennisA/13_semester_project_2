import { ARROW_ICON } from "./icon-comp.js";

export default function bannerComponent(data) {
  const container = document.querySelector(".banner__container");

  data.forEach((item) => {
    container.innerHTML += `
    <img class="image" src="${item.image.url}">
    <div class="description">
      <div>
        <h2 class="title">${item.title}</h2>
        <p class="quote">
          ${item.quote}
        </p>
      </div>     
    </div>
    `;
  });
}
