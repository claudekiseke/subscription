import styles from "./PricingCard.module.scss";

export default function PricingCard( {title}, {price}, {feature}, {buttonText} ) {
    <div className={styles.card}>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <p>{description}</p>
        <ul>
            <li>{feature}</li>
            <li>{feature}</li>
            <li>{feature}</li>
            <li>{feature}</li>
            <li>{feature}</li>
        </ul>
        <Link href="/">
            <a>{buttonText}</a>
        </Link>
    </div>
}