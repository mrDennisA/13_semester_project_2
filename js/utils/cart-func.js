import { CART_KEY, saveItem, loadItem } from "../settings/storage.js";
import cartComponent from "../components/cart-comp.js";
import headerCartComponent from "../components/headerCart-comp.js";

export default function cartItemFunction() {
  const key = CART_KEY;
  const currentItemList = loadItem(key);

  const minusButton = document.querySelectorAll(".cart__container .button.minus");
  minusButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const datasetID = parseInt(e.target.dataset.id);
      const findItem = currentItemList.find((item) => item.id === datasetID);
      const findIndex = currentItemList.indexOf(findItem);
      const updateItemList = currentItemList.filter((item) => item.id !== datasetID);

      if (findItem.qty > 1) {
        findItem.qty = findItem.qty - 1;
      } else {
        findItem.qty = 1;
      }

      updateItemList.splice(findIndex, 0, findItem);
      saveItem(key, updateItemList);

      // Update cart and cart nav
      updateFunction();
    });
  });

  const plusButton = document.querySelectorAll(".cart__container .button.plus");
  plusButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const datasetID = parseInt(e.target.dataset.id);
      const findItem = currentItemList.find((item) => item.id === datasetID);
      const findIndex = currentItemList.indexOf(findItem);
      const updateItemList = currentItemList.filter((item) => item.id !== datasetID);

      findItem.qty = findItem.qty + 1;
      updateItemList.splice(findIndex, 0, findItem);
      saveItem(key, updateItemList);

      // Update cart and cart nav
      updateFunction();
    });
  });

  const quantityInput = document.querySelectorAll(".cart__container input");
  quantityInput.forEach((input) => {
    // Clear input value when focused
    input.addEventListener("focus", (e) => {
      e.target.value = "";
    });

    input.addEventListener("blur", (e) => {
      const datasetID = parseInt(e.target.dataset.id);
      const findItem = currentItemList.find((item) => item.id === datasetID);
      const findIndex = currentItemList.indexOf(findItem);
      const updateItemList = currentItemList.filter((item) => item.id !== datasetID);

      const inputValue = Number(e.target.value);
      if (inputValue) {
        findItem.qty = inputValue;
        updateItemList.splice(findIndex, 0, findItem);
        saveItem(key, updateItemList);

        // Update cart and cart nav
        updateFunction();
      } else {
        e.target.value = findItem.qty;
      }
    });
  });

  const deleteButton = document.querySelectorAll(".cart__container .button.delete");
  deleteButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const datasetID = parseInt(e.target.dataset.id);
      const updateItemList = currentItemList.filter((item) => item.id !== datasetID);
      saveItem(key, updateItemList);

      // Update cart and cart nav
      updateFunction();
    });
  });
}

function updateFunction() {
  cartComponent();
  headerCartComponent();
}
