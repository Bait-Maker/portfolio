import { Reveal } from "./Reveal";
import styles from "./SectionHeader.module.css";

export const SectionHeader = ({ title, dir = "r" }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.container} />
      <h2>
        <Reveal>
          <span className={styles.spanWrapper}>
            {title}
            <span className={styles.span}>.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
