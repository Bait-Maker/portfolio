import { LogoRolodex } from "./LogoRolodex";
import { LogoItem } from "./logoItem";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGithub,
  SiAndroid,
} from "react-icons/si";
import styles from "./LogoOrigami.module.css";

export const LogoOrigmai = () => {
  return (
    <div className={styles.wrapper}>
      <LogoRolodex
        items={[
          <LogoItem
            key={1}
            background={"var(--logo-js)"}
            className={styles.logoItem}
          >
            <SiJavascript />
          </LogoItem>,

          <LogoItem
            key={2}
            background={"var(--logo-html)"}
            className={styles.logoItem}
          >
            <SiHtml5 />
          </LogoItem>,

          <LogoItem
            key={3}
            background={"var(--logo-css)"}
            className={styles.logoItem}
          >
            <SiCss3 />
          </LogoItem>,

          <LogoItem
            key={4}
            background={"var(--logo-react)"}
            className={styles.logoItem}
          >
            <SiReact />
          </LogoItem>,

          <LogoItem
            key={5}
            background={"var(--logo-github)"}
            className={styles.logoItem}
          >
            <SiGithub />
          </LogoItem>,

          <LogoItem
            key={5}
            background={"var(--logo-android)"}
            className={styles.logoItem}
          >
            <SiAndroid />
          </LogoItem>,
        ]}
      />
    </div>
  );
};
