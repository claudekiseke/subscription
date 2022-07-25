import Link from "next/link";
import styles from "./PricingCard.module.scss";

export default function PricingCard( {title}, {price},  {buttonText} ) {
    <div className={styles.card}>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <p>Free plan for all users.</p>
        <ul>
            <li>Store up to 20 songs</li>
            <li>Store up to 20 songs</li>
            <li>Store up to 20 songs</li>
            <li>Store up to 20 songs</li>
            <li>Store up to 20 songs</li>
        </ul>
        <Link href="/">
            <a>{buttonText}</a>
        </Link>
    </div>
}