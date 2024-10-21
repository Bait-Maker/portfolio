"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./LogoRolodex.module.css";

const DELAY_IN_MS = 2500;

const TRANSITION_DURATION_IN_SECS = 1.5;

export const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",

        transformStyle: "preserve-3d",
      }}
      className={styles.wrapper}
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",

            x: "-50%",

            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",

            zIndex: -index,

            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,

            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className={styles.motionDiv}
        >
          {items[index % items.length]}
        </motion.div>

        <motion.div
          style={{
            y: "-50%",

            x: "-50%",

            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",

            zIndex: index,

            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,

            ease: "easeInOut",
          }}
          className={styles.motionDiv}
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className={styles.hr}
      />
    </div>
  );
};
