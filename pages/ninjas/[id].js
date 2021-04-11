import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:8000/personnel');
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:8000/personnel/' + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const NinjaTag = ( { ninja } ) => {
  const router = useRouter();
  
  return (
    <>
    <Head>
      <title>My Dojo | Ninja Tag</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.tag}>
      <h1 className={styles.title}>Ninja Tag</h1>
      <div className={styles.single_box}>
        <div>
          <Image className={styles.avatar} src={ninja.image} width={200} height={200} alt="logo"/>
        </div>
        <div className={styles.single}>
          <h3 className={styles.ninja_single_name}>{ ninja.name } { ninja.surname }</h3>
          <p><strong>Username</strong>: { ninja.username }</p>
          <p><strong>Email</strong>: <Link href="/">{ ninja.email }</Link></p>
          <p><strong>Number</strong>: <Link href="/">{ ninja.number }</Link></p>
          <p><strong>Date of Birth</strong>: <Link href="/">{ ninja.dob }</Link></p>
          <p><strong>Location</strong>: <Link href="/locations">{ ninja.location }</Link></p>
          <p><strong>Address</strong>: <Link href="/">{ ninja.address }</Link></p>
          <p><strong>Department</strong>: <Link href="/">{ ninja.department }</Link></p>
          <p><strong>Title</strong>: <Link href="/">{ ninja.title }</Link></p>
          <p><strong>Works with</strong>: <Link href="/">Team</Link></p>
          <p><strong>Reports to</strong>: <Link href="/ninjas">{ ninja.supervisor }</Link></p>
          <p><strong>Member since</strong>: { ninja.hiredOn }</p>
          <p><strong>E-Role</strong>: <Link href="/">{ ninja.role }</Link></p>
          <p><strong>Comments</strong>: <Link href="/">{ ninja.comments }</Link></p>
          <hr/>
        </div>
      </div>

      <div className={styles.links}>
        <Link href="/"><a className={styles.btn}>Email</a></Link>
        <Link href="/"><a className={styles.btn}>Chat</a></Link>
        <Link href="/"><a className={styles.btn}>Add to Contacts</a></Link>
        <Link href="/"><a className={styles.btn}>Sticky Note</a></Link>
      </div>
      <Link href="/ninjas"><a className={styles.back_btn} onClick={() => router.back()}>Go back</a></Link>

      <button>Edit Profile</button>
    </div>
    </>
  );
}
 
export default NinjaTag;