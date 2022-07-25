import Switch from '../components/Switch/Switch'
import Card from '../components/Card/Card'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <h1>Display</h1>
        <div>
          <span>Flex</span>
        <Switch />
          <span>Grid</span>
        </div>
        <Card />
        <Card />
        <Card />
      </main>

        
    </div>
  )
}
