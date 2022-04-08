import { createContext, useState } from "react";
import { api } from '../services/api.js';
import Router from "next/router";
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [user, setUser] = useState({});

    async function signIn({ email, password }){

        try{
           /* const response = await api.post('verRota', {
                email,
                password
            });*/

            // Verificar se vai ter token // Passar para próximas requisições o nosso token
            //api.defaults.headers['Authorization'] = `Bearer ${token}`;
            toast.success("Logado com sucesso!");

            //Redirecionar para a página Home
            //await Router.push('/Home');

        }catch(err){
            toast.error("Error ao acessar!");
        }

    }

    async function signUp({ name, email, password }){

        try{
           /*const response = await api.post('verRota', {
                name,
                email,
                password
            });*/

            toast.success("Conta criada com sucesso!");
            //await Router.push('/');

        }catch (err){
            toast.error("Erro ao cadastrar!");

        }
    }



    return (
      <AuthContext.Provider value={{
          user,
          signIn,
          signUp
      }}
      >
          {children}
      </AuthContext.Provider>
  )
}
