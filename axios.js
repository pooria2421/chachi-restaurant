import axios from "axios";

export const baseURLImage = "https:///admin.restoeram.ir";
export const baseURL = "https:///admin.restoeram.ir/api";

const strapi = axios.create({
  baseURL: baseURL,
  // You can add additional default headers or customize other Axios settings here
});

export default strapi;
