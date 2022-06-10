import { createContext, useState } from "react";
import { api } from "../services/api.js";
import Router from "next/router";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    register: "",
  });

  async function signIn({ email, password }) {
    try {
      /* const response = await api.post('verRota', {
                      email,
                      password
                  });*/

      console.log("logado com user: " + email + " " + password);

      // Verificar se vai ter token // Passar para próximas requisições o nosso token
      //api.defaults.headers['Authorization'] = `Bearer ${token}`;
      toast.success("Logado com sucesso!");

      //Redirecionar para a página Home
      //await Router.push("/home");
    } catch (err) {
      toast.error("Error ao acessar!");
    }
  }

  async function signUp({ email, name, password, registration }) {
    try {
      console.log(email, password, name, registration);

      const response = await api.post("users/signup", {
        email,
        name,
        password,
        registration,
      });

      toast.success("Conta criada com sucesso!");
      await Router.push("/");
    } catch (err) {
      toast.error("Erro ao cadastrar!");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
