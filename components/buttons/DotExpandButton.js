import { FiArrowRight } from "react-icons/fi";
import styles from "./DotExpandButton.module.css";

const DotExpandButton = ({ children }) => {
  return (
    <button className={styles.button}>
      <span className={styles.span}>
        <FiArrowRight className={styles.icon} />
      </span>
      <span>{children}</span>
    </button>
  );
};

export default DotExpandButton;
