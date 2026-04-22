import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {ArrowDown, Download, MapPin} from "lucide-react";
import {profile} from "../lib/portfolioData";
import StatusPill from "../components/portfolio/StatusPill";
import OptimizedImage from "../components/portfolio/OptimizedImage";

const HeroName = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8, ease: [0.25, 0.1, 0.25, 1]}}
    >
      <h1 className="text-[12vw] lg:text-[10vw] xl:text-[8vw] font-grotesk font-bold leading-[0.85] tracking-tight">
        <span className="block">DONALD</span>
        <span className="block text-accent-orange">NGUIMFACK</span>
      </h1>
    </motion.div>
  );
};

const HeroMeta = () => (
  <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.5, duration: 0.6}}
    className="mt-8 lg:mt-12 space-y-4"
  >
    <p className="text-lg lg:text-xl text-muted-foreground font-inter max-w-xl leading-relaxed">
      {profile.title}
    </p>
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <MapPin className="w-4 h-4 text-accent-orange" />
      <span className="font-grotesk">{profile.location}</span>
      <span className="mx-2 text-border">|</span>
      <span className="font-grotesk">Open to Remote</span>
    </div>
  </motion.div>
);

export default function Home() {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://media.base44.com/images/public/69c1254d053483a7cc2218ee/093469ab6_generated_5f02c4bb.png"
            alt="Minimalist workspace with architectural elements representing software engineering precision"
            className="w-full h-full"
            aspectRatio="auto"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <motion.div
          style={{opacity: heroOpacity, y: heroY}}
          className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32"
        >
          <StatusPill />
          <div className="mt-8 lg:mt-12">
            <HeroName />
            <HeroMeta />
          </div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.8, duration: 0.5}}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="https://cdn2.cvdesignr.com/u/cv/pdf/688370681b165_499426a622a35a80f26c997bc22058bd4e86d0b7_14b90.pdf?_gl=1*33nxy*_gcl_au*MTUyMDQ1OTQxNC4xNzc2NzMzOTk5LjI1OTY4NDcxLjE3NzY3MzQ2OTcuMTc3NjczNDcwOA.."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-grotesk font-medium hover:opacity-90 transition-opacity min-h-[48px]"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1.5}}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-grotesk tracking-[0.3em] uppercase text-muted-foreground">
            Scroll
          </span>
          <motion.div
            animate={{y: [0, 8, 0]}}
            transition={{repeat: Infinity, duration: 1.5}}
          >
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-grotesk tracking-[0.3em] uppercase text-accent-orange">
              About
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-grotesk font-bold">
              The Engineer
            </h2>
            <div className="mt-4 w-12 h-[2px] bg-accent-orange" />
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed font-inter">
              {profile.summary}
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              <div>
                <span className="text-4xl font-grotesk font-bold text-accent-orange">
                  7+
                </span>
                <p className="mt-2 text-sm text-muted-foreground font-grotesk">
                  Years in Tech
                </p>
              </div>
              <div>
                <span className="text-4xl font-grotesk font-bold text-accent-orange">
                  20+
                </span>
                <p className="mt-2 text-sm text-muted-foreground font-grotesk">
                  Projects Delivered
                </p>
              </div>
              <div>
                <span className="text-4xl font-grotesk font-bold text-accent-orange">
                  4+
                </span>
                <p className="mt-2 text-sm text-muted-foreground font-grotesk">
                  Countries Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <OptimizedImage
          src="/images/home_2.png"
          alt="Hands engineering solutions on a keyboard, representing the craft of software development"
          className="w-full rounded-lg"
          aspectRatio="3/2"
          grayscale
        />
      </div>

      {/* Quick Skills */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-grotesk tracking-[0.3em] uppercase text-accent-orange">
              Expertise
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-grotesk font-bold">
              Core Stack
            </h2>
            <div className="mt-4 w-12 h-[2px] bg-accent-orange" />
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Java / Spring Boot",
                "PHP / Laravel",
                "React / Next.js",
                "Docker / CI/CD",
                "Angular / Vue",
                "React Native / PWA",
                "MySQL / PostgreSQL / MongoDB"
              ].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: i * 0.05}}
                  className="p-4 border border-border rounded-lg text-center hover:border-accent-orange/40 transition-colors"
                >
                  <span className="text-sm font-grotesk font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
