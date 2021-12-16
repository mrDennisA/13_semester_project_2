import { PRODUCT_URL } from "../settings/api.js";
import { loadToken } from "../settings/storage.js";
import { massageComponent } from "../components/message-comp.js";

export default function addItemFunction() {
  const message = document.querySelector(".addItem__container .message__container");

  const form = document.querySelector(".addItem__container form");
  const title = document.querySelector(".addItem__container #title");
  const category = document.querySelector(".addItem__container #category");
  const subcategory = document.querySelector(".addItem__container #subcategory");
  const featured = document.querySelector(".addItem__container #featured");
  const description = document.querySelectorAll(".addItem__container .description");
  const price = document.querySelector(".addItem__container #price");
  const cover = document.querySelector(".addItem__container #cover");
  const media = document.querySelector(".addItem__container #media");

  // Submit Form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.innerHTML = "";

    const formElements = Array.from(form.elements, (elements) => elements);
    validateDisabled(formElements, true);

    const titleValue = title.value.trim();
    const categoryValue = category.value;
    const subcategoryValue = subcategory.value;
    let featuredChecked;
    if (!featured) {
      featuredChecked = false;
    } else {
      featuredChecked = featured.checked;
    }
    const descriptionValue = Array.from(description, (item) => ({ paragraph: item.value.trim() }));
    const priceValue = parseFloat(price.value);
    const coverFile = Array.from(cover.files, (files) => files);
    const mediaFile = Array.from(media.files, (files) => files);

    // Validate Form
    if (
      titleValue.length === 0 ||
      categoryValue === "none" ||
      subcategoryValue === "none" ||
      isNaN(priceValue) ||
      priceValue === 0 ||
      cover.files.length === 0 ||
      media.files.length === 0
    ) {
      validateDisabled(formElements, false);
      return massageComponent("warning", "Fill out All in form", ".message__container");
    }

    // Append Form Data
    const data = {
      title: titleValue,
      category: { id: categoryValue },
      subcategory: { id: subcategoryValue },
      featured: featuredChecked,
      text: { description: descriptionValue },
      price: priceValue,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    coverFile.forEach((file) => {
      formData.append(`files.${cover.name}`, file, file.name);
    });
    mediaFile.forEach((file) => {
      formData.append(`files.${media.name}`, file, file.name);
    });

    serverRequest("POST", PRODUCT_URL, formData, form, formElements);
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
      form.reset();
    } else if (request.status !== 200) {
      massageComponent("error", `Error ${request.status}: ${request.statusText}`, ".message__container");
    }
    validateDisabled(formElements, false);
  };
}

function validateDisabled(elements, state) {
  elements.forEach((item) => (item.disabled = state));
}
