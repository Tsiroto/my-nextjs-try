import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Distribution = () => {
  return (
    <>
    <Head>
      <title>Dashboard | Distribution</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Distribution</h1>
      <p>Warehouse information and status.</p>
      <ul>
        <li><strong>Warehouse Locations</strong> | List and Map</li>
        <li><strong>Transportation</strong> | past/present/future supply missions and information</li>
        <li><strong>Management</strong> | Warehouse or transportation management</li>
        <li><strong>Distribution Tasks</strong> | Tasks about the specific locations etc, not assigned to a specific person</li>
        <li><strong>People</strong></li>
        <li><strong>Reports</strong></li>
      </ul>
    </div>
    </>
  );
}
 
export default Distribution