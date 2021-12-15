export function massageComponent(messageType, message, messageElement) {
  const element = document.querySelector(messageElement);
  element.innerHTML = `
    <div class="message ${messageType}">${message}</div>
  `;
}

export function conformationComponent(message) {
  const container = document.querySelector(".message__conformation");
  container.style.display = "block";

  container.innerHTML = `
    <div class="conformation">${message}</div>
  `;

  clearTimeout(timer);
  runTimer(container);
}

let timer;
function runTimer(container) {
  timer = setTimeout(() => {
    container.style.display = "none";
    container.innerHTML = "";
  }, 3000);
}
