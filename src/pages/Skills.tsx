import {references, skills} from "@/lib/portfolioData";
import SectionHeader from "@/components/portfolio/SectionHeader";
import SkillCategory from "@/components/portfolio/SkillCategory";
import OptimizedImage from "@/components/portfolio/OptimizedImage";
import {motion} from "framer-motion";
import {
  Container,
  Cpu,
  Database,
  Globe,
  Monitor,
  Server,
  Smartphone,
  Wrench
} from "lucide-react";

const categoryConfig = [
  {key: "backend", title: "Backend", icon: Server},
  {key: "frontend", title: "Frontend", icon: Monitor},
  {key: "databases", title: "Databases", icon: Database},
  {key: "mobile", title: "Mobile", icon: Smartphone},
  {key: "devops", title: "DevOps & CI/CD", icon: Container},
  {key: "tools", title: "Tools & Planning", icon: Wrench},
  {key: "cms", title: "CMS", icon: Globe},
  {key: "platform", title: "Power Platform", icon: Cpu}
];

export default function Skills() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://media.base44.com/images/public/69c1254d053483a7cc2218ee/55659ed2a_generated_7a5b5c34.png"
            alt="Macro circuit board patterns representing technical precision and engineering mastery"
            className="w-full h-full"
            aspectRatio="auto"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Technical Arsenal"
            title="The Stack"
            description="A comprehensive toolkit forged through years of building production-grade systems, microservices architectures, and cross-platform applications."
          />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categoryConfig.map((cat, i) => (
            <SkillCategory
              key={cat.key}
              title={cat.title}
              items={skills[cat.key]}
              index={i}
              icon={cat.icon}
            />
          ))}
        </div>
      </section>

      {/* Professional Skills */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 border-t border-border">
        <SectionHeader label="Soft Skills" title="Beyond Code" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Hardware & Software Maintenance",
            "Collaborative Work",
            "Quick Adaptation Under Pressure",
            "Technical & Academic Expertise"
          ].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.1}}
              className="p-6 border border-border rounded-lg text-center hover:border-accent-orange/40 transition-colors"
            >
              <p className="text-sm font-grotesk font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader label="Languages" title="Communication" />
            <div className="flex gap-6">
              {["English", "French"].map(lang => (
                <div
                  key={lang}
                  className="px-8 py-4 border border-border rounded-lg"
                >
                  <span className="text-base font-grotesk font-semibold">
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader label="References" title="Trusted By" />
            <div className="space-y-6">
              {references.map(ref => (
                <div
                  key={ref.name}
                  className="p-6 border border-border rounded-lg"
                >
                  <h4 className="text-base font-grotesk font-semibold">
                    {ref.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{ref.role}</p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-sm text-accent-orange hover:underline mt-1 inline-block"
                  >
                    {ref.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
