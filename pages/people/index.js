import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch('http://localhost:8000/personnel');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }

}

const People = ({ ninjas }) => {
  return (
    <>
    <Head>
      <title>My Dojo | Ninja Roster</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Personnel</h1>
      {/* <p className={styles.subtitle}>Search for a person</p> */}
      <input type="text" className={styles.search_pers} placeholder="Search for a person" />
      <div className={styles.box}>
        {ninjas.map(ninja => (
          <div className={styles.box_item}>
            <Link href={ '/people/' + ninja.id } key={ ninja.id }>
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
 
export default People;