import { BASE_URL } from "../settings/api.js";
import { saveToken, saveUser } from "../settings/storage.js";
import { massageComponent } from "../components/message-comp.js";

export default function loginFunction() {
  const form = document.querySelector(".login-container");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const message = document.querySelector(".message-container");

  //  Submit Button Action
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
      return massageComponent("warning", "Invalid values", ".message-container");
    } else {
      // Log in user
      login(usernameValue, passwordValue);
    }
  });

  // Log in user function
  async function login(username, password) {
    const url = BASE_URL + "auth/local";
    const data = JSON.stringify({ identifier: username, password: password });

    const option = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const json = await (await fetch(url, option)).json();

      if (json.user) {
        saveToken(json.jwt);
        saveUser(json.user);
        location.href = "/";
      }

      if (json.error) {
        massageComponent("error", "Invalid Username or Password ", ".message-container");
      }
    } catch (error) {
      console.log(error);
      massageComponent("error", error, ".message-container");
    }
  }
}
