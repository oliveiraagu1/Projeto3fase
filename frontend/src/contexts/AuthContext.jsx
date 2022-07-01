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

  const [graphic, setGraphic] = useState({});

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
        maxAge: 360000, // Expirar em 5 minutos
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
    }
  }

  async function handleGraphic() {
    try {
      const response = await api.get(`contract/${user.id}`);
      setGraphic(response.data);
    } catch (err) {}
  }

  async function createContract({
    name,
    contractDate,
    typeProperty,
    propertyCode,
    typeAgreement,
  }) {
    try {
      await api.post("contract/created", {
        name,
        contractDate,
        typeProperty,
        registration: user.registration,
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

  async function handleChangePassword({ oldPassword, newPassword }) {
    try {
      await api.put(`user/change/${user.id}`, {
        email: user.email,
        name: user.name,
        oldPassword,
        newPassword,
        registration: user.registration,
        idRole: user.roleId,
      });
      toast.success("Senha foi trocada com sucesso!");
    } catch (err) {
      toast.error("Error ao trocar de senha!");
    }
  }

  async function handleDeleteAccount() {
    try {
      await api.delete(`user/delete/8`);
      destroyCookie(undefined, "@nextauth.token");
      toast.success("Sua conta foi deletada... 😥 Até breve!");
      Router.push("/");
    } catch (err) {
      toast.error("Error ao deletar a conta!");
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
        handleDeleteAccount,
        handleGraphic,
        graphic,
        setGraphic,
        handleChangePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
