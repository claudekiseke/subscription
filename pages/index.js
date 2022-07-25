import Switch from '../components/Switch/Switch'
import Card from '../components/Card/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Switch />
        <Card />
        <Card />
        <Card />
      </main>

        
    </div>
  )
}
