import { GET_JSON, PRODUCT_URL, CATEGORY_URL, SUBCATEGORY_URL } from "../settings/api.js";
import { loadToken } from "../settings/storage.js";
import { massageComponent } from "../components/message-comp.js";
import editItemComponent from "../components/editItem-comp.js";

export default function addItemFunction() {
  const message = document.querySelector(".message__container");

  const form = document.querySelector(".addItem-form");
  const title = document.querySelector(".addItem-form #title");
  const category = document.querySelector(".addItem-form #category");
  const subcategory = document.querySelector(".addItem-form #subcategory");
  const description = document.querySelectorAll(".addItem-form .description");
  const price = document.querySelector(".addItem-form #price");
  const cover = document.querySelector(".addItem-form #cover");

  // Submit Form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.innerHTML = "";

    const formElements = Array.from(form.elements, (elements) => elements);
    validateDisabled(formElements, true);

    const titleValue = title.value;
    const categoryValue = category.value;
    const subcategoryValue = subcategory.value;
    const descriptionValue = Array.from(description, (item) => ({ paragraph: item.value }));
    const priceValue = price.value;
    const coverFile = Array.from(cover.files, (files) => files);

    // Validate Form
    if (titleValue.length === 0 || priceValue === 0) {
      validateDisabled(formElements, false);
      return massageComponent("warning", "Fill out All in form", ".message__container");
    }

    // Append Form Data
    const data = {
      title: titleValue,
      category: { id: categoryValue },
      subcategory: { id: subcategoryValue },
      text: { description: descriptionValue },
      price: priceValue,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    coverFile.forEach((file) => {
      formData.append(`files.${cover.name}`, file, file.name);
    });

    serverRequest("PUT", PRODUCT_URL + form.dataset.id, formData, form, formElements);
  });
}

function serverRequest(method, url, data, form, formElements) {
  // Upload to Server
  const request = new XMLHttpRequest();
  request.open(method, url);
  request.setRequestHeader("Authorization", "Bearer " + loadToken());
  request.send(data);

  // Upload State
  request.onload = function () {
    if (request.status === 200) {
      massageComponent("success", "Product added", ".message__container");
      updateEditForm(form);
    } else if (request.status !== 200) {
      massageComponent("error", `Error ${request.status}: ${request.statusText}`, ".message__container");
    }
    validateDisabled(formElements, false);
  };
}

function validateDisabled(elements, state) {
  elements.forEach((item) => (item.disabled = state));
}

async function updateEditForm(form) {
  const json = await GET_JSON(PRODUCT_URL + form.dataset.id);
  const jsonCategory = await (await fetch(CATEGORY_URL)).json();
  const jsonSubcategory = await (await fetch(SUBCATEGORY_URL)).json();

  editItemComponent(json, jsonCategory, jsonSubcategory);
}
