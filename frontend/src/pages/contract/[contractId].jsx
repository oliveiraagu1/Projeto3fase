import Link from 'next/link';

import { useRouter } from 'next/router'; 

export default function ContractId(){

    const router = useRouter();

    console.log(router.query.contractId)


    return(
        <div>
            

            <Link href={'/contract'}>
                <a>Voltar</a>
            </Link>
        </div>
    )
}