import Image from "next/image";
import logoImg from "@/../public/ShORtiNa.svg";

export default function Navbar() {
  return (
    <nav className="py-8 pl-8 shadow-lg">
      <Image alt="shortina-logo" src={logoImg}></Image>
    </nav>
  );
}
