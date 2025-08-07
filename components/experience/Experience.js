import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={"Experience"} dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "J.D. Exterior",
    position: "Web Development",
    time: "2023 - Present",
    location: "Chicago, Illinois",
    description:
      "Created and managed all areas of the company’s website including brand identity and UI/UX design using Figma. Developed full-stack web application using Next.js, TypeScript. Implemented automated email system using Next.Email and Resend. Setup and deployed scalable image storage solution using Supabase, which managed all project photos",
    tech: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind",
      "Framer-Motion",
      "Supabase",
    ],
  },
  {
    title: "Shure",
    position: "Android Development",
    time: "2021 ~ 2023",
    location: "Niles, Illinois",
    description:
      "I was an intern for the Mobile Development team. During the internship, I designed and implemented user interfaces for Android applications. I also migrated part of an app's frontend from fragments and XML to Jetpack-Compose. ",
    tech: ["Java", "Kotlin", "Android Studio", "Jetpack-Compose", "UI/UX"],
  },
];
