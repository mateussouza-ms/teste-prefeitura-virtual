import axios from "axios";

export const api = axios.create({
  baseURL: "https://producao.marcelo.pv.app.br/api",
});
