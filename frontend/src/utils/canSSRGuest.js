import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies } from 'nookies';

// Função para páginas que só podem ser acessadas por visitantes!
export function canSSRGuest( fn ){
    return async ( context ) => {

        const cookies = parseCookies(context);
        // Se tentar acessar a pagina com o login já salvo redirecionamos
        if(cookies['@nextauth.token']){
            return {
                redirect: {
                    destination: '/home',
                    permanent: false
                }
            }
        }

        return await fn(context);
    }
}