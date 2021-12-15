import { PRODUCT_URL } from "../settings/api.js";
import { loadToken } from "../settings/storage.js";

export default function deleteFunction(id) {
  const container = document.querySelector("#delete");
  container.addEventListener("click", async () => {
    const confirmation = confirm("Are you sure you want to delete this ?");

    if (confirmation) {
      const url = PRODUCT_URL + id;
      const option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loadToken()}`,
        },
      };

      try {
        await (await fetch(url, option)).json();
        location.href = "/";
      } catch (error) {
        console.log(error);
      }
    }
  });
}
