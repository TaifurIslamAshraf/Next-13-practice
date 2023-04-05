import Link from "next/link";
import SearchBox from "./clients-components/searchBox";

import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="nav-logo">
        <h3>Taifur Dev</h3>
      </div>
      <div className="link">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <SearchBox />
    </nav>
  );
};

export default Header;
