import addToCartFunction from "../utils/addToCart-func.js";

export default function detailsComponent(data) {
  let description = "";
  data.text.description.forEach((item) => {
    return (description += `<p>${item.paragraph}</p>`);
  });

  const container = document.querySelector(".details__container");
  container.innerHTML = `
    <form class="details__component" data-id="${data.id}">
      <div class="media">
        <img class="image" src="${data.cover.url}">
      </div>
      <div class="title">
        <h2 class="title__name">${data.title}</h2>
      </div>
      <div class="price">
        <div class="price__number">€ ${data.price}</div>
      </div>
      <div class="add-to-cart">
        <button class="button">Add to Cart</button>
      </div>
      <div class="description">
        <div class="description__text">${description}</div>
      </div>

    </form>
  `;

  addToCartFunction(data);
}
