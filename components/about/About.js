import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "@/components/util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title={"About"} dir="l" />
      <div className={styles.wrapper}>
        <div>
          <Reveal>
            <p className={styles.firstParagraph}>
              <span className={styles.span}>H</span>
              ello! I'm Jakub, I'm a full stack web & Android app developer
              hailing from the Windy City of Chicago, Illinois. I specialize
              primarily in web development, but I have worked on mobile apps for
              the company Shure.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.paragraph}>
              When I'm not in front of my computer I like to keep fit 💪, solve
              all kinds of twisty puzzles 🧩, and take silly photos 📷 when I'm
              out and about.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.paragraph}>
              I'm passively looking for new positions where I can combine my
              love for code with my love for solving puzzles. If you think
              you've got an opening tha I might like, let's connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.linkWrapper}>
              <div className={styles.linkDiv}>
                <span>My Links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
