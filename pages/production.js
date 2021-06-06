import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Production = () => {
  return (
    <>
    <Head>
      <title>Dashboard | Production</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Production</h1>
      <ul>
        <li><strong>Factory locations</strong></li>
        <li><strong>Tasks</strong></li>
        <li><strong>People</strong></li>
        <li><strong>Reports</strong></li>
      </ul>
    </div>
    </>
  );
}
 
export default Production