export default function headerFunction() {
  const bodyContainer = document.querySelector("body");
  const modalContainer = document.querySelector(".modal__container");
  const navContainer = document.querySelector(".nav__container");

  const barOpen = document.querySelector(".header__container .button");
  barOpen.addEventListener("click", () => {
    modalContainer.classList.toggle("active");
    navContainer.classList.toggle("active");
    bodyContainer.classList.toggle("overflow");
  });

  const barClose = document.querySelector(".nav__container .button");
  barClose.addEventListener("click", () => {
    modalContainer.classList.toggle("active");
    navContainer.classList.toggle("active");
    bodyContainer.classList.toggle("overflow");
  });

  const body = document.querySelector("body");
  let timer;
  const runTimer = () => {
    timer = setTimeout(() => {
      body.classList.remove("preload");
    }, 100);
  };

  window.addEventListener("resize", () => {
    body.classList.add("preload");
    clearTimeout(timer);
    runTimer();

    if (window.innerWidth >= 768) {
      modalContainer.classList.remove("active");
      navContainer.classList.remove("active");
      bodyContainer.classList.remove("overflow");
    }
  });
}
