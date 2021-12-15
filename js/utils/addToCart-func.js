import { CART_KEY, saveItem, loadItem } from "../settings/storage.js";
import headerCartComponent from "../components/headerCart-comp.js";

export default function addToCartFunction(data) {
  const key = CART_KEY;
  const container = document.querySelector(".details__container");

  container.addEventListener("submit", (e) => {
    e.preventDefault();

    const currentItemList = loadItem(key);
    const findItem = currentItemList.find((item) => item.id === data.id);
    const findIndex = currentItemList.indexOf(findItem);

    // Add Item to local Storage
    if (!findItem) {
      // Add Item Quantity
      data.qty = 1;
      currentItemList.push(data);
      saveItem(key, currentItemList);
    }

    // Update Item to local Storage
    if (findItem) {
      const updateItemList = currentItemList.filter((item) => item.id !== data.id);

      // Add Item Quantity
      data.qty = findItem.qty + 1;
      updateItemList.splice(findIndex, 0, data);
      saveItem(key, updateItemList);
    }

    headerCartComponent();
  });
}

function findI(currentItemList, data) {}
