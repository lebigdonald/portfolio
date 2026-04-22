import {motion} from "framer-motion";

export default function SkillCategory({title, items, index, icon: Icon}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.4, delay: index * 0.08}}
      className="group p-6 lg:p-8 border border-border rounded-lg hover:border-foreground/20 transition-all duration-500 bg-card"
    >
      <div className="flex items-center gap-3 mb-5">
        {Icon && <Icon className="w-5 h-5 text-accent-orange" />}
        <h3 className="text-sm font-grotesk font-semibold tracking-[0.15em] uppercase">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span
            key={item}
            className="text-sm font-inter px-3 py-1.5 rounded-md bg-secondary text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
