export default function focusFunction() {
  //Snippet from stackoverflow "Case study: Facebook login page"

  // Let the document know when the mouse is being used
  document.body.addEventListener("mousedown", () => {
    document.body.classList.add("using-mouse");
  });

  // Re-enable focus styling when Tab is pressed
  document.body.addEventListener("keyup", (event) => {
    if (event.key === "Tab") {
      document.body.classList.remove("using-mouse");
    }
  });
}
