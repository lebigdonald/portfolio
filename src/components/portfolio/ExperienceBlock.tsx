import {motion} from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ExperienceBlock({experience, index}) {
  return (
    <motion.section
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, margin: "-50px"}}
      transition={{duration: 0.5, delay: index * 0.1}}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border" />

      <div className="lg:pl-12 relative">
        {/* Timeline dot */}
        <div className="hidden lg:block absolute left-0 top-2 w-3 h-3 -translate-x-[6px] rounded-full border-2 border-accent-orange bg-background" />

        <div className="mb-4">
          <span className="text-xs font-grotesk tracking-[0.2em] uppercase text-accent-orange">
            {experience.period}
          </span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-grotesk font-bold mb-1">
          {experience.role}
        </h3>
        <p className="text-base text-muted-foreground font-grotesk mb-2">
          {experience.company} <span className="text-foreground/30">—</span>{" "}
          {experience.location}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {experience.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
