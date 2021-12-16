export const BASE_URL = "https://home-decor-backend-api.herokuapp.com/";
export const BANNER_URL = BASE_URL + "banners/";
export const CATEGORY_URL = BASE_URL + "categories/";
export const SUBCATEGORY_URL = BASE_URL + "subcategories/";
export const PRODUCT_URL = BASE_URL + "products/";

export async function GET_JSON(url) {
  return (await fetch(url)).json();
}
export function GET_FILTER(data, filter) {
  return data.find((item) => item.name.toLowerCase() === filter.toLowerCase());
}
