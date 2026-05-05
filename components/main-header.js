import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.jpg";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="GymMap Nis logo" priority />
        <span>GymMap</span>
      </Link>

      <nav className={classes.nav}>
        <Link href="/">Teretane</Link>
        <Link href="/community">Zajednica</Link>
        <Link href="/about">O aplikaciji</Link>
      </nav>
    </header>
  );
}
