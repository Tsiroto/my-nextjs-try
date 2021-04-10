import Head from 'next/head'
import styles from '../../styles/Locations.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch('http://localhost:8000/locations');

  const data = await res.json();

  return {
    props: { dojos: data }
  }

}

const Locations = ({ dojos }) => {
  return (
    <>
    <Head>
      <title>My Dojo | Locations</title>
      <meta name="keywords" content="dojos"/>
    </Head>
    <div className="office">
    <h1 className={styles.title}>Locations</h1>
    <div className={styles.box}>
      {dojos.map(dojo => (
        <div className={styles.box_item} key={dojo.id}>
          <div className={styles.single}>
            <h3 className={styles.dojo_name}>{dojo.name}</h3>
            <p><strong>Status</strong>: {dojo.status}</p>
            <p className={styles.dojo_info}><strong>Stock</strong>: <Link href="/production">{dojo.stock}</Link></p>
            <p className={styles.dojo_info}><strong>Personel</strong>: <Link href="/production">{dojo.personel}</Link></p>
            <p className={styles.dojo_info}><strong>Manager</strong>: <Link href="/production">{dojo.manager}</Link></p>
            <p className={styles.dojo_info}><strong>Role</strong>: <Link href="/production">{dojo.role}</Link></p>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
  );
}
 
export default Locations;