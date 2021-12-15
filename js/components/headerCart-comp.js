import { CART_KEY, loadItem } from "../settings/storage.js";
import { CART_ICON } from "./icon-comp.js";

export default function cartNavComponent() {
  const key = CART_KEY;
  const currentItemList = loadItem(key);

  // Sum Items in Shopping Cart
  let sumItem = 0;
  currentItemList.forEach((item) => {
    sumItem += item.qty;
  });

  const container = document.querySelector(".cartNav__container");
  container.innerHTML = `
    ${CART_ICON}
    <span class="number">${sumItem}</span>
    <span class="name">Cart</span>
  `;

  const numberContainer = document.querySelector(".cartNav__container .number");
  if (currentItemList.length > 0) {
    numberContainer.style.color = "hsl(24, 100%, 40%)";
  } else if (currentItemList.length > 9) {
    numberContainer.style.transform = "translateX(-4px)";
  } else {
    numberContainer.style.color = "hsl(16, 10%, 35%)";
    numberContainer.style.transform = "translateX(-2px)";
  }
}
