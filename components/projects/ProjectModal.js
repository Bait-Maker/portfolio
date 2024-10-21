"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import styles from "./ProjectModal.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className={`${styles.wrapper} ${inter.className}`}
      onClick={() => setIsOpen(false)}
    >
      <button className={styles.exitButton}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.motionDiv}
      >
        <img
          className={styles.projectImg}
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className={styles.titleDiv}>
          <h4>{title}</h4>
          <div className={styles.techDiv}>{tech.join(" - ")}</div>

          <div className={styles.modalDiv}>{modalContent}</div>

          <div>
            <p className={styles.para}>
              Project Links<span className={styles.span}>.</span>
            </p>
            <div className={styles.linkDiv}>
              <Link
                target="_blank"
                rel="nofollow"
                className={styles.link}
                href={code}
              >
                <AiFillGithub /> Source code
              </Link>
              <Link
                target="_blank"
                rel="nofollow"
                className={styles.link}
                href={projectLink}
              >
                <AiOutlineExport /> Live Project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
