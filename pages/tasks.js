import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Tasks = () => {
  return (
    <>
    <Head>
      <title>Dashboard | Task Manager</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h2 className={styles.title}>Task Manager</h2>
      <div className={styles.taskbar}>
        <input type="text" className={styles.search_task} placeholder="Search" />
        <div className={styles.taskbar_buttons}>
          <Link className="styles.box" href="#">
            <a className={styles.tskbtn}>Add a Task</a>
          </Link>
          <Link className="styles.box" href="#">
            <a className={styles.tskbtn}>Add a Project</a>
          </Link>
        </div>
      </div>
      <div className={styles.task_box}>
        <div>
          <h3>Task Title</h3>
          <p>This is a big task. Look at this list:</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    </>
  );
}
 
export default Tasks