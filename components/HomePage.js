import { Header } from "./nav/Header";
import { SideBar } from "./nav/SideBar";
import styles from "./HomePage.module.css";
import { Hero } from "./hero/Hero";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";

export default function HomePage() {
  return (
    <div className={styles.contentWrapper}>
      <SideBar />
      <main>
        <Header />
        <div className={styles.contentContainer}>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
}
