import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatIcon from '@material-ui/icons/Chat';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
    width: 200,
    height: 200,
  },
  card: {
    maxWidth: '700px',
    margin: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


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
  const classes = useStyles();
  

  return (
    <Card className={classes.card}>
      <Head>
        <title>Dashboard | Person Tag</title>
        <meta name="keywords" content="people"/>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {ninja.name} {ninja.surname}
          </Typography>
          <Button color="inherit">Edit Profile</Button>
        </Toolbar>
      </AppBar>
    {/* <h1 className={styles.title}>{ninja.name} {ninja.surname}</h1> */}
      <CardHeader
        avatar={<Avatar aria-label={ninja.name} src={ninja.image} width={200} height={200} alt="Profile Pic" className={classes.avatar}></Avatar>}
        action={
          <List aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon title="Add to Contacts">
                <PersonAddIcon />
              </ListItemIcon>
              {/* <ListItemText primary="Add to Contacts" /> */}
            </ListItem>
            <ListItem button>
              <ListItemIcon title="Chat">
                <ChatIcon />
              </ListItemIcon>
              {/* <ListItemText primary="Chat" /> */}
            </ListItem>
            <ListItem button>
              <ListItemIcon title="Email">
                <MailOutlineIcon />
              </ListItemIcon>
              {/* <ListItemText primary="Chat" /> */}
            </ListItem>
            <ListItem button>
              <ListItemIcon title="Add Sticky Note">
                <NoteAddIcon />
              </ListItemIcon>
              {/* <ListItemText primary="Chat" /> */}
            </ListItem>
          </List>
        }
        title={ninja.quote}
        subheader={"Hired on: " + ninja.hiredOn}
      />
      <CardContent>
      {/* <div className={styles.tag}> */}
        {/* <h1 className={styles.title}>Ninja Tag</h1> */}
        {/* <div className={styles.single_box}> */}
          {/* <div>
            <Image className={styles.avatar} src={ninja.image} width={200} height={200} />
          </div> */}
          <div className={styles.single}>
            {/* <hr className={classes.separators}/> */}
            {/* <h3 className={styles.ninja_single_name}>{ ninja.name } { ninja.surname }</h3> */}
            <p><strong>Name</strong>: { ninja.name } { ninja.surname }</p>
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
            {/* <p><strong>Member since</strong>: { ninja.hiredOn }</p> */}
            <p><strong>E-Role</strong>: <Link href="/">{ ninja.role }</Link></p>
            {/* <p><strong>Comments</strong>: <Link href="/">{ ninja.comments }</Link></p> */}
            {/* <hr className={classes.separators}/> */}
          </div>

          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" title="Add to Contacts">
              <PersonAddIcon />
            </IconButton>
            <IconButton aria-label="chat" title="Chat">
              <ChatIcon />
            </IconButton>
            <IconButton aria-label="email" title="Email">
              <MailOutlineIcon />
            </IconButton>
            <IconButton aria-label="sticky note" title="Add Sticky Note">
              <NoteAddIcon />
            </IconButton>
          </CardActions> */}

        {/* </div> */}

        <Link href="/ninjas"><a className={styles.back_btn} onClick={() => router.back()}>Go back</a></Link>

        {/* <div className={styles.admin_links}>
          <Link href="/"><a className={styles.btn} title="Email">Email</a></Link>
          <Link href="/"><a className={styles.btn} title="Chat">Chat</a></Link>
          <Link href="/"><a className={styles.btn} title="Add to Contacts">Add to Contacts</a></Link>
          <Link href="/"><a className={styles.btn} title="Sticky Note">Sticky Note</a></Link>
        </div> */}
        <div className={styles.links}>
          <Link href="/"><a className={styles.admin_btn}>HR Management</a></Link>
          <Link href="/"><a className={styles.admin_btn}>Admin Management</a></Link>
        </div>


        {/* <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
      </CardContent>
    {/* </div> */}
    </Card>
  );
}
 
export default NinjaTag;