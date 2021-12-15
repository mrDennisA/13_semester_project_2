import loginFunction from "../utils/login-func.js";

export default function loginFormComponent() {
  const container = document.querySelector(".login-section");
  container.innerHTML = `
    <h2>Login</h2>
    <div class="message-container"></div>
    <form class="login-container">
      <div class=""username-container>
        <label for="username">Username/Email</label>
        <input class="focus" id="username" />
      </div>
      <div class="password-container">
        <label for="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button>Login</button>
    </form>
  `;

  loginFunction();
}
