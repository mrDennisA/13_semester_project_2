import { CART_KEY, loadItem } from "../settings/storage.js";
import cartFunction from "../utils/cart-func.js";
import { massageComponent } from "./message-comp.js";

export default function cartComponent() {
  const key = CART_KEY;
  const currentItemList = loadItem(key);

  const container = document.querySelector(".cart__container");

  if (currentItemList.length) {
    let sumItemsTotal = 0;

    container.innerHTML = "";
    currentItemList.forEach((item) => {
      const link = `./details.html?id=${item.id}`;

      container.innerHTML += `
        <div class="cart__component">
          <div class="media__container">
            <a class="link" href="${link}">
              <img class="image" src="${item.cover.formats.small.url}"  alt="product img" >
              <img class="image mouse-over" src="${item.media[0].formats.small.url}" alt="product img" >
            </a>
          </div>
          <div class="title__container">
            <a class="link" href="${link}">
              <h4 class="name">${item.title}</h4>
            </a>
          </div>
          <div class="quantity__container">
            <div>
              <button class="button minus" data-id="${item.id}">-</button>
              <input class="input" type="number" value="${item.qty}" data-id="${item.id}">
              <button class="button plus" data-id="${item.id}">+</button>
            </div>
          </div>
          <div class="price__container">
            <div>$${item.price}</div>
          </div>
          <div class="total-price__container">
            <span>Total:</span>
            <span>$${priceTotal(item)}</span>
          </div>
          <div class="delete__container">
            <button class="button delete" data-id="${item.id}">X</button>
          </div>
        </div>
      `;

      sumItemsTotal += priceTotal(item);
    });

    // Sum Items Total
    container.innerHTML += `
      <div class="cart-total__container">
        <div class="line"></div>
        <div class="price" >Total: $${sumItemsTotal}</div>
      </div>
    `;

    cartFunction();
  } else {
    massageComponent("info", "You have no items in your shopping cart", ".cart__container");
  }
}

// Total Price of a Item
function priceTotal(item) {
  const total = item.price * item.qty;
  const roundTotal = Math.round(total * 100) / 100;
  return roundTotal;
}
