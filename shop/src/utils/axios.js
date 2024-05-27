import axios from "axios";

const REQUEST_PRODUCTS_DATA_URL_SECOND = "https://codingapple1.github.io/shop/data2.json";
const REQUEST_PRODUCTS_DATA_URL_THIRD = "https://codingapple1.github.io/shop/data3.json";

export default function getProductsData(countClick) {
  let productsData;

  if (countClick === 1) {
    productsData = axios.get(REQUEST_PRODUCTS_DATA_URL_SECOND)
    .then((data) => data.data)
    .catch(() => console.log("페이지를 받아오지 못함"));
  } else if (countClick === 2) {
    productsData = axios.get(REQUEST_PRODUCTS_DATA_URL_THIRD)
    .then((data) => data.data)
    .catch(() => console.log("페이지를 받아오지 못함"));
  }

  return productsData;
}
