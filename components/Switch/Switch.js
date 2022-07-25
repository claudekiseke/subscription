import styles from "./Switch.module.scss";

export default function Switch() {
    return (
        <label className={styles.switch}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.slider} />
        </label>
    )
}