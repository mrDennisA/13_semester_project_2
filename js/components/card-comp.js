import { loadUser } from "../settings/storage.js";
import { HEART_ICON } from "./icon-comp.js";

export default function cardComponent(data) {
  const container = document.querySelector(`.card__container`);
  container.classList.toggle("grid");
  container.innerHTML = "";

  data.forEach((item) => {
    const link = `./details.html?id=${item.id}`;

    let edit = "";
    if (loadUser()) {
      edit = `
        <div class="card-edit">
          <a href="./edit-item.html?id=${item.id}">Edit item</a>
        </div>
      `;
    }

    container.innerHTML += `
      <div class="card">
        <div class="add-to-favorites">
          <button class="button" data-id="">
            ${HEART_ICON}
          </button>
        </div>
        <a class="link image" href="${link}">
          <img class="image" src="${item.cover.formats.small.url}"  alt="product img" >
          <img class="image mouse-over" src="${item.media[0].formats.small.url}" alt="product img" >
        </a>
        <div class="card-detail">
          <a class="link" href="${link}">
            <h4 class="title">${item.title}</h4>
          </a>
          <div class="price">$${item.price}</div>
        </div>
        ${edit}
      </div>
    `;
  });
}
