import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import styles from "./ExperienceItem.module.css";

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleDiv}>
        <Reveal>
          <span className={styles.titleSpan}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.infoDiv}>
        <Reveal>
          <span className={styles.infoSpan}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.para}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.chipDiv}>
          {tech.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
