import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Group\ 7463@2x.png";

function Navbar() {
  return (
    <nav className="navbar">
        
          <Image 
          src={Logo}
          alt="GreedGame"
          
          
          height="30px"
          width="190px"
          ></Image>
        
    </nav>
  );
}
export default Navbar;
