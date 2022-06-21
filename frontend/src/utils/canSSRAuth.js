import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies, destroyCookie } from 'nookies';
import { AuthTokenError } from '../services/errors/AuthTokenError';

// Funcao para paginas apenas para quem está logado podem ter acesso.
export function canSSRAuth(fn){
    return async (context) => {
        const cookies = parseCookies(context);
        const token = cookies['@nextauth.token'];
        if(!token){
            return{
                redirect: {
                    destination: '/',
                    permanent: false
                }
            }
        }
        try{
            return await fn(context);
        }catch (err){
            if(err instanceof AuthTokenError){
                destroyCookie(context, '@nextauth.token');
                return {
                    redirect:{
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }
    }
}