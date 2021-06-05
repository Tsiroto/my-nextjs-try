import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Office = () => {
  return (
    <>
    <Head>
      <title>Dashboard | Office Database</title>
      <meta name="keywords" content="dojos"/>
    </Head>
    <div className="office">
      <h1>Office DataBase</h1>
      <div className="styles.box">
        <Link className="styles.box" href="/people">
          <a className={styles.btn}>People</a>
        </Link>
        <Link className="styles.box" href="/locations">
          <a className={styles.btn}>Locations</a>
        </Link>
      </div>
    </div>
    </>
  );
}
 
export default Office;