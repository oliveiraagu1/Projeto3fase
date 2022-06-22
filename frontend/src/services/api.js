import axios from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";
import { singOut } from "../contexts/AuthContext";

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookies["@nextauth.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 400) {
        // Qualquer erro 401 (não autorizado) deslogar o usuário
        if (typeof window !== undefined) {
          // Chamar a função para deslogar o usuário
          singOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
}
