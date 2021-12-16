import editItemFunction from "../utils/editItem-func.js";
import deleteFunction from "../utils/delete-func.js";

export default function addItemComponent(jsonProduct, jsonCategory, jsonSubcategory) {
  const container = document.querySelector(".form__container");
  container.innerHTML = `
  <form class="addItem-form" data-id="${jsonProduct.id}">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" name="title" value="${jsonProduct.title}"/>
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
      <label for="featured">Featured</label>
      <div>
        <input class="test" type="checkbox" id="featured" name="featured" ${jsonProduct.featured === true ? "checked" : ""} />
      </div>
    </div>
    <div>
      <label for="description">Description</label>
      <textarea class="description" id="description-1" name="description" />${jsonProduct.text.description[0].paragraph}</textarea>
    </div>
    <div>
      <label for="price">Price</label>
      <input type="text" type="number" id="price" name="price" value="${jsonProduct.price}"/>
    </div>
    <div>
      <img class="image" src="${jsonProduct.cover.url}">
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
    if (item.id === jsonProduct.category.id) {
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
    if (item.id === jsonProduct.subcategory.id) {
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
  deleteFunction(jsonProduct.id);
}
