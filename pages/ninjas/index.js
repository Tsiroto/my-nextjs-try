import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('http://localhost:8000/personel');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }

}


const Ninjas = ({ ninjas }) => {
  return (
    <>
    <Head>
      <title>My Dojo | Ninja Roster</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>My faithful ninjas</h1>
      <p className={styles.subtitle}>Step into my dojo if you want to find your mojo</p>
      <div className={styles.box}>
        {ninjas.map(ninja => (
          <div className={styles.box_item}>
            <Link href={ '/ninjas/' + ninja.id } key={ ninja.id }>
              <div>
                <h3 className={styles.ninja_name}>{ ninja.name } { ninja.surname }</h3>
                <p className={styles.ninja_info}><strong>Title</strong>: { ninja.title }</p>
                <p className={styles.ninja_info}><strong>Location</strong>: { ninja.location }</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
 
export default Ninjas;