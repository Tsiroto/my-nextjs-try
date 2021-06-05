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
      <p>Local development of the Oceansouth Dashboard</p>
      <p>This is a second attempt to fill more whitespace for this page.<br/>I am just playing around with <strong>next.js</strong> and a <strong>local json server</strong>. This is my time to shine. I am the new sun of the universe but I won't go red giant, I promise. And this is a javascript promise, it will happen, it's just a matter of time.<br/><br/><br/>
      If you are here for our experienced ninjas, go to their place:
      </p>
      <Link href="/people">
        <a className={styles.btn}>Find some People</a>
      </Link>
    </div>
    </>
  )
}
