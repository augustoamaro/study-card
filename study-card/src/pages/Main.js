import Card from '../components/Card';

import styles from "../styles/pages/main.module.scss"

const Main = () => {
    const todayYear = new Date().getFullYear();
    const age = todayYear - 1992;

    return (
        <div className={styles["container"]}>
            <div className={styles["name"]}>
                <h1>Leônidas Augusto Amaro</h1>
                <p>Software Engineer</p>
            </div>

            <div className={styles["social-icons"]}>
                <h5>Icon github</h5>
                <h5>Icon linkedin</h5>
                <h5>Icon instagram</h5>
            </div>

            <div className={styles["about"]}>
                <h2>About me</h2>
                <p>Hi! I'm Leônidas, a {age} yo software engineer. This project is about JavaScript concepts using cards and made with React.</p>
            </div>

            <div className={styles["card-container"]}>
                <Card />
            </div>
        </div>
    )
}

export default Main;