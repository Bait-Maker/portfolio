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
      "JavaScript",
      "React",
      "Next.js",
      "Vercel",
      "CSS",
      "Tailwind",
      "Framer-Motion",
      "Github",
    ],
  },
  {
    title: "Shure",
    position: "Mobile Development",
    time: "2021 - 2023",
    location: "Niles, Illinois",
    description:
      "I was an intern for the Mobile Development team. I helped develop the front-end of a moblie app. Also, I migrated an app's frontend from fragments to Jetpack-Compose",
    tech: ["Java", "Kotlin", "Android Studio", "Jetpack-Compose", "GitHub"],
  },
];
