import Switch from '../components/Switch/Switch'
import Card from '../components/Card/Card'
import styles from '../styles/Home.module.scss'
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
          <span className="scribble">(You know you want to)</span>
        </div>
        <Card />
        <Card />
        <Card />
      </main>

        
    </div>
  )
}
