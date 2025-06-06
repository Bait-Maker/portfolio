"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import Reveal from "../util/Reveal";
import styles from "./Project.module.css";

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.imgContainer}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? 90 + "%" : 85 + "%",
              rotate: hovered ? 2 + "deg" : 0 + "deg",
            }}
            className={styles.img}
          />
        </div>
        <div className={styles.wrapper}>
          <Reveal width={{ width: "100%" }}>
            <div className={styles.titleDiv}>
              <h4>{title}</h4>
              <div className={styles.seperateDiv} />

              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub className={styles.icon} />
              </Link>

              <Link href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport className={styles.icon} />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.techDiv}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.para}>
              {description}{" "}
              <span className={styles.span} onClick={() => setIsOpen(true)}>
                Learn more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
