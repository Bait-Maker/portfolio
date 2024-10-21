import { motion } from "framer-motion";
import Link from "next/link";

import styles from "./SideBarLink.module.css";

const MotionLink = motion(Link);

export const SideBarLink = ({
  setSelected,
  selected,
  children,
  href,
  value,
}) => {
  const style =
    selected === value ? `${styles.selected}` : `${styles.hovering}`;
  return (
    <MotionLink
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      href={href}
      onClick={() => {
        setSelected(value);
      }}
      className={`${styles.motionLink} ${style}`}
    >
      {children}
    </MotionLink>
  );
};
