import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* <Image src="/logo192.png" width={70} height={70} alt="logo"/> */}
        <h3>Oceansouth</h3>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/office"><a>| Office DB</a></Link>
      <Link href="/sales"><a>| Sales</a></Link>
      <Link href="/marketing"><a>| Marketing</a></Link>
      <Link href="/markets"><a>| Markets</a></Link>
      <Link href="/production"><a>| Production</a></Link>
      <Link href="/warehouse"><a>| Warehouse OP</a></Link>
      <Link href="/comms"><a>| Communications</a></Link>
    </nav>
  );
}
 
export default Navbar;