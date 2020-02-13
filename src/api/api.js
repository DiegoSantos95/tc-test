import axios from "axios";

const api = axios.create({
  baseURL: "https://private-anon-5919f46052-tradersclubapi.apiary-mock.com/api"
});

export default api;