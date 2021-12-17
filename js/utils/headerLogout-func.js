import { TOKEN_KEY, USER_KEY, clearKeyStorage } from "../settings/storage.js";
export default function headerLogoutFunction() {
  const container = document.querySelector(".logout");

  if (container) {
    container.addEventListener("click", () => {
      const confirmLogout = confirm("Are you sure?");
      if (confirmLogout) {
        clearKeyStorage([TOKEN_KEY, USER_KEY]);

        location.href = "./";
      }
    });
  }
}
