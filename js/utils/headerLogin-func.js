import { loadUser } from "../settings/storage.js";

export default function loginNavbarFunction() {
  const userLinkContainer = document.querySelector(".user.link");
  const userNavbar = document.querySelector(".loginNav__container .nav");

  if (loadUser()) {
    userLinkContainer.addEventListener("click", () => {
      userNavbar.classList.toggle("active");
    });
  }
}
