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
    title: "Freelance",
    position: "Web Development",
    time: "2024 - Present",
    location: "Chicago",
    description:
      "Mostly working on personal and family projects while finishing up my schooling.",
    tech: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind",
      "Framer-Motion",
      "React Native",
    ],
  },
  {
    title: "Shure",
    position: "Mobile Development",
    time: "2021 ~ 2023",
    location: "Niles, Illinois",
    description:
      "I was an intern for the Mobile Development team. During the internship, I designed and implemented user interfaces for Android applications. I also migrated part of an app's frontend from fragments and XML to Jetpack-Compose. ",
    tech: ["Java", "Kotlin", "Android Studio", "Jetpack-Compose", "UI/UX"],
  },
];
