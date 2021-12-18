import { CART_KEY, saveItem, loadItem } from "../settings/storage.js";
import headerCartComponent from "../components/headerCart-comp.js";

export default function addToCartFunction(data) {
  const key = CART_KEY;
  const form = document.querySelector(".details__component");
  const submitButton = document.querySelector(".details__component button");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitButton.disabled = true;
    submitButton.innerHTML = "Adding...";

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

    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = "Add to Cart";
      headerCartComponent();
    }, 1000);
  });
}
