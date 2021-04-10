import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>What is all this about?</h1>
      <p>I have no idea but this is a dummy text to fill the emptiness of my soul and of this page.</p>
      <p>This is a second attempt to fill more whitespace for this page.<br/>I am just playing around with <strong>next.js</strong> and a <strong>local json server</strong>. This is my time to shine. I am the new sun of the universe but I won't go red giant, I promise. And this is a javascript promise, it will happen, it's just a matter of time.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See the Ninjas</a>
      </Link>
    </div>
    </>
  )
}
