import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="logo">
      <div className="logo">
        <Image src="/logo192.png" width={80} height={80} alt="logo"/>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/ninjas"><a>| Ninjas</a></Link>
      <Link href="/office"><a>| Office DB</a></Link>
      <Link href="/markets"><a>| Markets</a></Link>
      <Link href="/production"><a>| Production</a></Link>
      <Link href="/ninjas"><a>| Comms</a></Link>
      <Link href="/ninjas"><a>| Ninjas</a></Link>
    </nav>
  );
}
 
export default Navbar;