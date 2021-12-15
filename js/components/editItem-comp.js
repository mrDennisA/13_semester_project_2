import editItemFunction from "../utils/editItem-func.js";
import deleteFunction from "../utils/delete-func.js";

export default function addItemComponent(json, jsonCategory, jsonSubcategory) {
  const container = document.querySelector(".editItem__container");
  container.innerHTML = `
  <h2>Edit</h2>
  <div class="message__container"></div>
  <form class="addItem-form" data-id="${json.id}">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" name="title" value="${json.title}"/>
    </div>
    <div>
      <label for="category">Category</label>
      <select id="category" name="category" />
        <option value="none">None</option>
      </select>
    </div>
    <div>
      <label for="subcategory">Subcategory</label>
      <select id="subcategory" name="subcategory" />
        <option value="none">None</option>
      </select>
    </div>
    <div>
      <div>
        <label for="description-1">Description</label>
        <textarea class="description" id="description-1" name="description" />${json.text.description[0].paragraph}</textarea>
      </div>
    </div>
    <div>
      <label for="price">Price</label>
      <input type="text" type="number" id="price" name="price" value="${json.price}"/>
    </div>
    <div>
      <img class="image" src="${json.cover.url}">
    </div>
    <div>
      <label for="cover">Update Image</label>
      <input type="file" id="cover"  name="cover" />
    </div>
    <input class="button" type="submit" value="Update Item" />
    <input class="button" id="delete" type="button" value="Delete Item" />
  </form>
  `;

  const categoryContainer = document.querySelector(".addItem-form #category");
  jsonCategory.forEach((item) => {
    if (item.id === json.category.id) {
      categoryContainer.innerHTML += `
      <option value="${item.id}" selected>${item.name}</option>
    `;
    } else {
      categoryContainer.innerHTML += `
      <option value="${item.id}">${item.name}</option>
    `;
    }
  });

  const subcategoryContainer = document.querySelector(".addItem-form #subcategory");

  jsonSubcategory.forEach((item) => {
    if (item.id === json.subcategory.id) {
      subcategoryContainer.innerHTML += `
      <option value="${item.id}" selected>${item.name}</option>
    `;
    } else {
      subcategoryContainer.innerHTML += `
      <option value="${item.id}">${item.name}</option>
    `;
    }
  });

  editItemFunction();
  deleteFunction(json.id);
}
