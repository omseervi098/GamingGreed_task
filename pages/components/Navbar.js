import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Group\ 7463@2x.png";
import menuIcon from "../../public/menu.png";
function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="menu">
        <Image
          src={menuIcon}
          alt="menu icon"
          width={30}
          height={30}
          >
        </Image>
        </div>
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
