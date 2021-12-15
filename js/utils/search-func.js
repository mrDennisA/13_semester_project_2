export default function searchFunction() {
  const container = document.querySelector(".search__form");
  const input = document.querySelector(".search__input");

  container.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = input.value.trim().toLowerCase();
    if (inputValue) {
      location.href = `./search-result.html?search=${inputValue}`;
    }
  });
}
