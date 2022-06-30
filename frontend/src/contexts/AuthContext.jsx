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
    }
  }

  async function handleGraphic(){

    try{
      const response = await api.get(`contract/${user.id}`);

      setGraphic(response.data);

      toast.success("Seus contratos foram carregados com sucesso! 😄")
      
    }catch (err){
      toast.error("Error ao carregar os contratos! 😥")
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
      await api.post("contract/created", {
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

  async function handleDeleteAccount(){

    try{
      await api.delete(`user/delete/8`)
      destroyCookie(undefined, "@nextauth.token");
      toast.success("Sua conta foi deletada... 😥 Até breve!"); 
      Router.push("/");
    }catch (err){
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
        setGraphic
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
