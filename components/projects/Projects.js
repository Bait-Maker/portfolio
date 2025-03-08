import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import projectImg from "@/assets/project-imgs/coming-soon.png";
import portfolioImg from "@/assets/project-imgs/portImg.jpg";
import JdImg from "@/assets/project-imgs/jd-coverImg.png";
import flooringGatorsImg from "@/assets/project-imgs/flooringgators_screencap.png"

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
    title: "J.D Exterior",
    imgSrc: JdImg.src,
    code: "https://github.com/Bait-Maker/jd-exterior",
    projectLink: "https://www.jdexterior.com/",
    tech: ["Next.js", "Resend", "Supabase", "Vercel"],
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
          reach more clients and showcase his work. Each page is visually appealing
          and easy to navigate. Also the site is optimized for search engines, so
          potential clients could easily find him online.
        </p>
        <p>
          I'm using Next.Email for custom email templates, Resend to receive emails
          from the contact form, and Supabase for data and image storage.
        </p>
        <p>
          Launching the website was a proud moment, knowing it would help my
          father grow his business and connect with more people in need of his
          contracting services.
        </p>
      </>
    ),
  },
  {
    title: "Flooring Gators",
    imgSrc: flooringGatorsImg.src,
    code: "https://github.com/AK26265/FlooringGators",
    projectLink: "https://www.flooringgators.com/",
    tech: ["Next.js", "Typescript", "Motion"],
    description:
      "Flooring Gators provides All-In-One flooring service. Offering everything you need in a flooring contractor, including moving furniture, deep cleaning during & ...",
    modalContent: (
      <>
        <p>
          Whether you're just looking to apply a maintenance coat,
          repair a portion of your floor, change the color of your flooring,
          or install brand new flooring - Solid Hardwood, Engineered Wood, Vinyl,
          Laminate. Let it be any wood style flooring need, Flooring Gators is always here to help.
        </p>
        <p>
          This is a super simple project I took on for my friend.
          I mostly cloned what was already there and added some visual improvments and responsivness,
          also played around with tiktok and instagram's post embeding.
        </p>

        <p>
          We are planning on revamping this website in the near future. The hamburger menu and navbar are
          display only for now.
        </p>
      </>
    ),
  },
  {
    title: "My Portfolio ^_^",
    imgSrc: portfolioImg.src,
    code: "https://github.com/Bait-Maker/portfolio",
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
