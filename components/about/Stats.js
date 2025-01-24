import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiOutlineJavaScript } from "react-icons/ai";
import styles from "./Stats.module.css";
import { color } from "framer-motion";
import { LogoOrigmai } from "./logo-origami/LogoOrigami";

export const Stats = () => {
  return (
    <div className={styles.wrapper}>
      <Reveal>
        <div>
          <h4 className={styles.h4}>
            <AiFillCode className={styles.icon} />
            <span className={styles.span}>My Skills</span>
          </h4>
          <div className={styles.container}>
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>GitHub</Chip>
            <Chip>Postgres</Chip>
            <Chip>Supabase</Chip>
            <Chip>Kotlin</Chip>
            <Chip>Java</Chip>
            <Chip>Jetpack-Compose</Chip>
            <Chip>Android Studio</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <LogoOrigmai />
      </Reveal>
    </div>
  );
};
