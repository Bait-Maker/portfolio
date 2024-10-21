import styles from "./Chip.module.css";

export const Chip = ({ children }) => {
  return <span className={styles.chip}>{children}</span>;
};
