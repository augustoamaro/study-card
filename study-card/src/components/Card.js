import styles from '../styles/components/card.module.scss';

const Card = ({ title, description }) => {
    return (
        <div className={styles["card"]}>

            <h4>{title}</h4>

            <p>{description}</p>

        </div>
    )
}

export default Card;