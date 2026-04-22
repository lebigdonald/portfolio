import {motion} from "framer-motion";

export default function StatusPill() {
  return (
    <motion.div
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 1, duration: 0.6}}
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm"
    >
      <span className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs font-grotesk text-muted-foreground tracking-wider uppercase">
          System: Online
        </span>
      </span>
      <span className="w-px h-3 bg-border"></span>
      <span className="text-xs font-grotesk text-muted-foreground tracking-wider uppercase">
        Open to Innovation
      </span>
    </motion.div>
  );
}
