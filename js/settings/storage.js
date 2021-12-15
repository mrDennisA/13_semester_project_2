export const TOKEN_KEY = "token";
export const USER_KEY = "user";

export const CART_KEY = "home-decor-cart";

// Save Token to Local Storage
export function saveToken(token) {
  saveToStorage(TOKEN_KEY, token);
}

// Load Token from Local Storage
export function loadToken() {
  return loadFromStorage(TOKEN_KEY);
}

// Save Login User to Local Storage
export function saveUser(user) {
  saveToStorage(USER_KEY, user);
}

// Load User Information from Local Storage
export function loadUser() {
  const user = loadFromStorage(USER_KEY);

  if (user) {
    return user;
  }
  return null;
}

// Remove Item from Local Storage
export function clearKeyStorage(key) {
  key.forEach((key) => localStorage.removeItem(key));
}

//  Save Item to Local Storage
export function saveItem(key, value) {
  saveToStorage(key, value);
}

//  Load Item from Local Storage
export function loadItem(key) {
  const value = loadFromStorage(key);

  if (value === null) {
    return [];
  } else {
    return value;
  }
}

// Save Function to Local Storage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Load Function from Local Storage
function loadFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }
  return JSON.parse(value);
}
