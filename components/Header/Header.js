import styles from "./Header.module.scss";

export default function Header() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.left}>
                <li><a href="#">Unstyled</a></li>
            </ul>
            <ul className={styles.right}>
                <li><a href="#">Some</a></li>
                <li><a href="#">Button</a></li>
                <li><a href="#">Links</a></li>
                <li><a href="#">CSS Tricks</a></li>
            </ul>
        </nav>
    );
}