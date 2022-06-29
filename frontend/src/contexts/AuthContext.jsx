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
    token: "",
  });

  async function signIn({ email, password }) {
    try {
      const response = await api.post("user/session", {
        email,
        password,
      });

      const { userId, name, registration, roleId, token } = response.data;

      setUser({
        id: userId,
        name,
        email: response.data.email,
        registration,
        roleId,
        token,
      });

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 30000, // Expirar em 30 minutos
        path: "/", // Quais caminhos terão acesso ao cookie
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
      await api.post("user/created", {
        name,
        email,
        password,
        registration,
        idRole,
      });

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
      toast.success("Contrato criado com sucesso!");
      await Router.push("/home");

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
