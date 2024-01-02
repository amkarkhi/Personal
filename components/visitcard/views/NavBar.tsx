import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Link href={"https://github.com/amkarkhi"} target='_blank'>
        Github
      </Link>
      <Link href={"mailto:amkarkhi@gmail.com"} target='_blank'>
        E-Mail
      </Link>
      <Link href={"https://telegram.me/amkarkhi"} target='_blank'>
        Telegram
      </Link>
      <Link href={"https://www.instagram.com/amkarkhi/"} target='_blank'>
        Instagram
      </Link>
    </nav>
  );
};

export default NavBar;
