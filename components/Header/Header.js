import styles from "./Header.module.scss";

export default Header = () => {
    return (
        <nav>
            <ul class={styles.left}>
                <li><a href="#">Unstyled</a></li>
            </ul>
            <ul class={styles.right}>
                <li><a href="#">Some</a></li>
                <li><a href="#">Button</a></li>
                <li><a href="#">Links</a></li>
                <li><a href="#">CSS Tricks</a></li>
            </ul>
        </nav>
    )
}