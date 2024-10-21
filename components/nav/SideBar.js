"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SideBarLink } from "./SideBarLink";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.motionNav}
    >
      <span className={styles.spanWrapper}>
        J<span className={styles.span}>.</span>
      </span>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value={"about"}
        href={"#about"}
      >
        About
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value={"projects"}
        href={"#projects"}
      >
        Porjects
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value={"experience"}
        href={"#experience"}
      >
        Exp.
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value={"contact"}
        href={"#contact"}
      >
        Contact
      </SideBarLink>
    </motion.nav>
  );
};
