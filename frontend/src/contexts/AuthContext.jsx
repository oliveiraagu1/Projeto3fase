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
    registration: "",
    roleId: ""
  });

  async function signIn({ email, password }) {
    try {

      const response = await api.post("user/session", {
        email,
        password
      });

      const { id, name, registration, roleId, token} = response.data;
 
      setUser({
        id,
        name,
        email: response.data.email,
        registration,
        roleId
      })

      // Verificar se vai ter token // Passar para próximas requisições o nosso token
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      toast.success("Logado com sucesso!");

      // //Redirecionar para a página Home
      await Router.push("/home");
    } catch (err) {
      toast.error("Error ao acessar!");
    }
  }

  async function signUp({ email, name, password, registration }) {
    try {
      const response = await api.post("users/signup", {
        email,
        name,
        password,
        registration,
      });

      toast.success("Conta criada com sucesso!");
      await Router.push("/");
    } catch (err) {
      toast.error("Erro ao cadastrar o usuário");
    }
  }

  async function createContract({ name, date, typeProperty, registration, propertyCode, typeAgreement
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
