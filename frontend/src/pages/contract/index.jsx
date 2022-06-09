import Head from 'next/head';
import styles from './styles.module.scss';
import { LogoMenor } from '../../components/Logo';
import ContractItem from '../../components/ui/ContractItem'

export default function Contract(){

    return(

        <div className={styles.container}>
            <Head>
                <title>Grow - Tela contrato</title>
            </Head>
                
                <div className={styles.image}>
                    <LogoMenor/>
                </div>
                <div>
                    <h1>Meu histórico</h1>
                </div>

                <div className={styles.grid}>
                    <ContractItem data={{id: 1}}/>
                    <ContractItem data={{id: 2}}/>
                    <ContractItem  data={{id: 3}}/>
                    <ContractItem  data={{id: 4}}/>
                    <ContractItem  data={{id: 5}}/>
                    <ContractItem  data={{id: 6}}/>
                    
                </div>
        </div>
    )
}