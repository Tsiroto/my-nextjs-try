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
      <p>This will be a drop down menu with 2 options, no need for a page</p>
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