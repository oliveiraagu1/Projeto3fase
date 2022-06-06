import styles from "./styles.module.scss"


export default function SubDrawer(){
    return(
        <section className={styles.openedDrawer}>
            <div className={styles.title} >GROW</div>
            <div className={styles.buttons}  >
                <button>HOME</button>
            
                <button>MEU PERFIL</button>
            
                <button>MEU HISTÓRICO</button>
            
                <button>ADICIONAR CONTRATO</button>
            </div>

        </section>
    )
}