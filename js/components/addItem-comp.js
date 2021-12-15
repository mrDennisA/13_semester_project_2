import addItemFunction from "../utils/addItem-func.js";

export default function addItemComponent(jsonCategory, jsonSubcategory) {
  const container = document.querySelector(".addItem__container .form__container");
  container.innerHTML = `
  <form>
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" name="title" />
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
        <textarea class="description" id="description-1" name="description" /></textarea>
      </div>
    </div>
    <div>
      <label for="price">Price</label>
      <input type="text" type="number" id="price" name="price" />
    </div>
    <div>
      <label for="cover">Upload Image Cover</label>
      <input type="file" id="cover"  name="cover" />
    </div>
    <div>
      <label for="media">Upload Image Collection</label>
      <input type="file" id="media"  name="media" />
    </div>
    <input class="button" type="submit" value="Add Product" />
  </form>
  `;

  selectOption(jsonCategory, ".addItem__container #category");
  selectOption(jsonSubcategory, ".addItem__container #subcategory");
  addItemFunction();
}

function selectOption(json, element) {
  const container = document.querySelector(element);
  json.forEach((item) => {
    container.innerHTML += `
      <option value="${item.id}">${item.name}</option>
    `;
  });
}
