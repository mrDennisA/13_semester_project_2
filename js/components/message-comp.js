export default function massageComponent(messageType, message, messageElement) {
  const element = document.querySelector(messageElement);
  element.innerHTML = `
    <div class="message ${messageType}">${message}</div>
  `;
}
