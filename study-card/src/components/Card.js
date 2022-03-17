import styles from '../styles/components/card.module.scss';

const Card = () => {
    return (
        <div className={styles["card"]}>
            <h4>Valores e Variáveis</h4>

            <h2>Introdução a tipos primitivos</h2>
            <h2>var, let e const</h2>
            <h2>Operador unário</h2>
        </div>
    )
}

export default Card;