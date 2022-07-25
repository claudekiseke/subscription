import Link from "next/link";
import styles from "./Card.module.scss";

export default function Card() {
    return (
    <div className={styles.card}>
        <h2>Basic</h2>
        <h3>£15</h3>
        <p>Free plan for all users.</p>
        <ul>
            <li>Store up to 20 songs</li>
            <li>Store up to 20 songs</li>
            <li>Store up to 20 songs</li>
            <li>Store up to 20 songs</li>
            <li>Store up to 20 songs</li>
        </ul>
        {/* <Link href="/">
            <a>Get Started Free</a>
        </Link> */}
    </div>
    );
}