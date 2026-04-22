import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";

export default function ProjectCard({project, index}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5, delay: index * 0.1}}
      className="group relative border border-border rounded-lg p-6 lg:p-8 bg-card hover:bg-secondary/50 transition-all duration-500 hover:border-foreground/20"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg lg:text-xl font-grotesk font-semibold group-hover:text-accent-orange transition-colors">
            {project.name}
          </h3>
          <span
            className={`inline-block mt-1 text-[10px] font-grotesk tracking-widest uppercase px-2 py-0.5 rounded-full
            ${project.status === "In Progress" ? "bg-accent/10 text-accent-orange" : "bg-secondary text-muted-foreground"}`}
          >
            {project.status}
          </span>
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-[11px] font-grotesk px-2 py-1 rounded bg-secondary text-foreground/70"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
