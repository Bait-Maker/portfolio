import styles from "./outlineButton.module.css";

export const OutlineButton = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      <span className={styles.textContainer}>
        <span className={styles.text}>{children}</span>
      </span>
    </button>
  );
};
