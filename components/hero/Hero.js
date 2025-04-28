"use client";

import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Reveal>
            <h1 className={styles.h1}>
              Hi, I&apos;m Jakub<span className={styles.h1Span}>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.h2}>
              I&apos;m a{" "}
              <span className={styles.h2Span}>Full Stack Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.paragraph}>
              Welcome! I&apos;m a full stack developer dedicated to building
              innovative web applications with dynamic and user-friendly
              freatures.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <OutlineButton
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView();
            }}
            className={styles.contactButton}
          >
            Contact Me
          </OutlineButton>
        </Reveal>
        <DotGrid />
      </div>
    </section>
  );
};
