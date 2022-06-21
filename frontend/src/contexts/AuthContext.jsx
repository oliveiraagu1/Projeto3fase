import { createContext, useState } from "react";
import { destroyCookie, setCookie } from "nookies";
import { api } from "../services/apiClient";
import { toast } from "react-toastify";
import Router from "next/router";

export const AuthContext = createContext({});

export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch {
    toast.error("Error ao deslogar!");
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    registration: "",
    roleId: "",
  });

  async function signIn({ email, password }) {
    try {
      const response = await api.post("user/session", {
        email,
        password,
      });

      const { id, name, registration, roleId, token } = response.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 300, // Expirar em 5 minutos
        path: "/", // Quais caminhos terão acesso ao cookie
      });

      setUser({
        id,
        name,
        email: response.data.email,
        registration,
        roleId,
      });

      //Passar para próximas requisições o nosso token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      toast.success("Logado com sucesso!");

      //Redirecionar para a página Home
      await Router.push("/home");
    } catch (err) {
      toast.error("Error ao acessar!");
    }
  }

  async function signUp({ email, name, password, registration, idRole }) {
    try {
      const response = await api.post("user/created", {
        name,
        email,
        password,
        registration,
        idRole
      });

      console.log(response.data);

      toast.success("Conta criada com sucesso!");
      await Router.push("/");
    } catch (err) {
      toast.error("Erro ao cadastrar o usuário");
      console.log(err);
    }
  }

  async function createContract({
    name,
    date,
    typeProperty,
    registration,
    propertyCode,
    typeAgreement,
  }) {
    try {
      const response = await api.post("contract/created", {
        name,
        date,
        typeProperty,
        registration,
        propertyCode,
        typeAgreement,
        userId: user.id,
      });
    } catch (err) {
      toast.error("Error ao cadastrar o contrato!");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signUp,
        createContract,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
