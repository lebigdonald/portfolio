import {education, experiences} from "../lib/portfolioData";
import SectionHeader from "../components/portfolio/SectionHeader";
import ExperienceBlock from "../components/portfolio/ExperienceBlock";
import OptimizedImage from "../components/portfolio/OptimizedImage";
import {motion} from "framer-motion";

export default function Work() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://media.base44.com/images/public/69c1254d053483a7cc2218ee/d4bc4f177_generated_6babf7dc.png"
            alt="Brutalist architecture representing structural software design methodology"
            className="w-full h-full"
            aspectRatio="auto"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Professional Experience"
            title="The Work"
            description="A trajectory spanning 7+ years of building, leading, and shipping high-impact software systems across Africa and beyond."
          />
        </div>
      </section>

      {/* Experiences */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <ExperienceBlock key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 border-t border-border">
        <SectionHeader label="Education" title="Foundation" description="" />
        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.1}}
              className="lg:pl-12 relative"
            >
              <div className="hidden lg:block absolute left-0 top-2 w-3 h-3 -translate-x-[6px] rounded-full border-2 border-accent-orange bg-background" />
              <span className="text-xs font-grotesk tracking-[0.2em] uppercase text-accent-orange">
                {edu.period}
              </span>
              <h3 className="mt-2 text-xl lg:text-2xl font-grotesk font-bold">
                {edu.degree}
              </h3>
              <p className="text-base text-muted-foreground font-grotesk">
                {edu.school} — {edu.location}
              </p>
              <ul className="mt-4 space-y-2">
                {edu.details.map((d, j) => (
                  <li
                    key={j}
                    className="text-sm text-foreground/70 flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-orange mt-2 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
