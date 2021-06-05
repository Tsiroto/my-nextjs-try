import Head from 'next/head'
import styles from '../../styles/Locations.module.css'
import Link from 'next/link'
// import Image from 'next/image'
import { Router, useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:8000/locations');
  const data = await res.json();

  const paths = data.map(dojo => {
    return {
      params: { id: dojo.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:8000/locations/' + id);
  const data = await res.json();

  return {
    props: { dojo: data }
  }
}

const Loca = ( { dojo } ) => {
  const router = useRouter();

  return (
    <>
    <Head>
      <title>My Dojo | Dojo Locations</title>
      <meta name="keywords" content="dojos"/>
    </Head>
    <div>
      <h1 className={styles.title}>Dojo Locations</h1>
      <div className={styles.single_box}>
        <div className={styles.single}>
          <h3 className={styles.ninja_single_name}>{ dojo.name }</h3>
          <p><strong>Location</strong>: <Link href="/locations">{ dojo.location }</Link></p>
          <p><strong>Address</strong>: <Link href="/">{ dojo.address }</Link></p>
          <p><strong>Personel</strong>: <Link href="/">{ dojo.personel }</Link></p>
          <p><strong>Manager</strong>: <Link href="/people">{ dojo.manager }</Link></p>
          <p><strong>Operating since</strong>: { dojo.operatingSince }</p>
          <p><strong>Role</strong>: <Link href="/">{ dojo.role }</Link></p>
          <p><strong>Stock</strong>: <Link href="/">{ dojo.stock }</Link></p>
          <p><strong>Status</strong>: { dojo.status }</p>
          <hr/>
          <button onClick={() => router.back()}>Go back</button>
          <button>Sticky Note</button>
        </div>
      </div>
    </div>
    </>
  );
}
 
export default Loca;