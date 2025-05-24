"use client";

import Link from "next/link";

import styles from "./Header.module.css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <MyLinks />
      <OutlineButton onClick={() => window.open("/Jakub_Resume.pdf")}>
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => {
  return (
    <div className={styles.linkDiv}>
      <Link
        className={styles.link}
        href={"https://www.linkedin.com/in/jakub-dejworek-41214816a/"}
        target="_blank"
        rel="nofollow"
      >
        <SiLinkedin />
      </Link>

      <Link
        className={styles.link}
        href={"https://x.com/QualityToad"}
        target="_blank"
        rel="nofollow"
      >
        <BsTwitterX />
      </Link>

      <Link
        className={styles.link}
        href={"https://github.com/Bait-Maker"}
        target="_blank"
        rel="nofollow"
      >
        <SiGithub />
      </Link>
    </div>
  );
};
