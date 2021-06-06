import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Dashboard | Home</title>
      <meta name="keywords" content="dashboard"/>
    </Head>
    <div>
      <h1 className={styles.title}>Welcome</h1>
      <p>Dashboard</p>
      <ul>
        <li><strong>Customizable preview per user</strong></li>
        <li><strong>The frontpage preview can be charts, reminders, tasks, contacts, communications (chat, emails) or just a background, clock, weather</strong></li>
      </ul>
      <ul>
        <li><strong>"Working" Pages so far</strong><br/>Home<br/>Office (People, Locations)<br/>Production<br/>Distribution</li>
      </ul>
      <Link href="/people">
        <a className={styles.btn}>Find someone</a>
      </Link>
    </div>
    </>
  )
}
