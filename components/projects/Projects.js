import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import projectImg from "@/assets/project-imgs/coming-soon.png";
import portfolioImg from "@/assets/project-imgs/portImg.jpg";
import JdImg from "@/assets/project-imgs/jd-coverImg.png";

import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={"Projects"} dir="r" />

      <div className={styles.projectDiv}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "My Portfolio ^_^",
    imgSrc: portfolioImg.src,
    code: "https://www.github.com",
    projectLink: "/",
    tech: ["React", "Next.js", "Vercel", "Framer Motion"],
    description:
      "My very own portfolio with all my most current projects. This page was built while I was learning how to build web pages.",
    modalContent: (
      <>
        <p>This is my first diployed project.</p>
        <p>
          Coded using Visual Studio Code, built with Next.js, and deployed with
          Varcel.
        </p>
        <p>
          {" "}
          All text is set with Inter Typeface. Template taken from hover.dev.
        </p>
      </>
    ),
  },
  {
    title: "J.D Exterior (Coming Soon)",
    imgSrc: JdImg.src,
    code: "https://www.github.com",
    projectLink: "https://www.jdexteriorcontractors.com/",
    tech: ["React", "Next.js", "Postgres", "Vercel"],
    description:
      "My father's contracting website. He works on siding, windows, doors, decks, gutters, roof, etc.",
    modalContent: (
      <>
        <p>
          My father started his company in the year 2000, since then he has
          become a reputable and well-known contractor.
        </p>
        <p>
          I took on the exciting challenge of creating a website to help him
          reach more clients and showcase his work.
        </p>
        <p>I work solely worked on this project.</p>
        <p>
          I carefully crafted each page, ensuring it was both visually appealing
          and easy to navigate. I also optimized the site for search engines, so
          potential clients could easily find him online.
        </p>
        <p>
          Launching the website was a proud moment, knowing it would help my
          father grow his business and connect with more people in need of his
          contracting services.
        </p>
        <p>
          {"(This project is still in development)"} Live Project link will take
          you to the site I made wix in highschool. {"^_^"}
        </p>
      </>
    ),
  },
  {
    title: "Media Converter (Coming Soon)",
    imgSrc: projectImg.src,
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["React", "Next.js", "Spring", "AWS Aurora"],
    description:
      "Anything to MP3 but with the capability of converting multiple media files at a time.",
    modalContent: (
      <>
        <p>
          Etiam id hendrerit nibh. Vestibulum egestas tortor egestas, aliquam
          ante ac, vulputate purus. Nulla erat turpis, rhoncus eu sem non,
          venenatis mattis leo. Suspendisse pellentesque tortor non urna
          sollicitudin varius a ac felis. Duis sed arcu condimentum,
          sollicitudin ex vulputate, efficitur justo. Sed tristique efficitur
          justo.
        </p>
        <p>
          Quisque bibendum nibh eros, sagittis rutrum quam pretium a. Maecenas
          pharetra erat quis dapibus dapibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "(Coming Soon)",
    imgSrc: projectImg.src,
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Lorem", "Ipsum", "Dolor"],
    description:
      "This last one is here as decoration until I deploy a fourth project. ^_^",
    modalContent: (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Sed efficitur viverra justo at tempus. Vivamus fringilla sem aliquam
          sapien ultrices pretium. Nulla vel pulvinar ante. Cras vestibulum
          malesuada metus in tempus.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
