export default function footerComponent() {
  const container = document.querySelector("footer");
  container.innerHTML = `
    <div class="newsletter">
      <form class="newsletter__form">
        <input class="input" type="email" placeholder="Your email address" />
        <button class="button">submit</button>
      </form>
    </div>
    <div class="copyright">@ 2021 Home Decor. All right reserved</div>
  `;
}
