import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'

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
      <title>Ninja List | Ninja Roster</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>My faithful ninjas</h1>
      <p className={styles.subtitle}>Step into my dojo if you want to find your mojo</p>
      <div className={styles.box}>
        {ninjas.map(ninja => (
        <div className={styles.box_item} key={ninja.id}>
          <a className={styles.single}>
            <h3 className={styles.ninja_name}><a>{ninja.name} {ninja.surname}</a></h3>
            <p className={styles.ninja_info}><strong>Department</strong>: <a>{ninja.department}</a></p>
            <p className={styles.ninja_info}><strong>Title</strong>: <a>{ninja.title}</a></p>
            <p className={styles.ninja_info}><strong>Email</strong>: <a>{ninja.email}</a></p>
            <p className={styles.ninja_info}><strong>Location</strong>: <a>{ninja.location}</a></p>
          </a>
        </div>
        ))}
      </div>
    </div>
    </>
  );
}
 
export default Ninjas;