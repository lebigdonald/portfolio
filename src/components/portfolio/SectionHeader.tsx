import {motion} from "framer-motion";

export default function SectionHeader({label, title, description}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: "-50px"}}
      transition={{duration: 0.6}}
      className="mb-16 lg:mb-24"
    >
      {label && (
        <span className="text-xs font-grotesk tracking-[0.3em] uppercase text-accent-orange mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold tracking-tight leading-none">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 w-16 h-[2px] bg-accent-orange" />
    </motion.div>
  );
}
