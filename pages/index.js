import Switch from '../components/Switch/Switch'
import PricingCard from '../components/PricingCard/PricingCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Switch />
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </main>

        
    </div>
  )
}
