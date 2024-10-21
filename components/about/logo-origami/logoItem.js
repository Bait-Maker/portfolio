import styles from "./logoItem.module.css";

export const LogoItem = ({ children, className, background }) => {
  return (
    <div className={`${styles.container} ${className}`} style={{ background }}>
      {children}
    </div>
  );
};
