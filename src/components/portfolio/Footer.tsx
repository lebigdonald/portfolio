import {Link} from "react-router-dom";
import {ArrowUpRight, Github, Linkedin, Mail} from "lucide-react";
import {profile} from "@/lib/portfolioData";
import OptimizedImage from "./OptimizedImage";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <OptimizedImage
        src="https://media.base44.com/images/public/69c1254d053483a7cc2218ee/157e83ce7_generated_04121358.png"
        alt="Vast minimalist landscape representing infinite possibilities"
        className="absolute inset-0 opacity-20"
        aspectRatio="auto"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-5xl font-grotesk font-bold mb-6">
              Let's build
              <br />
              <span className="text-accent-orange">something great.</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-md leading-relaxed mb-8">
              Open to remote and international opportunities. Ready to architect
              scalable solutions for your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-grotesk font-medium hover:opacity-90 transition-opacity min-h-[48px]"
            >
              Start a Conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent-orange transition-colors"
              >
                <Mail className="w-5 h-5" /> {profile.email}
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent-orange transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent-orange transition-colors"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/40 font-grotesk">
                © {new Date().getFullYear()} Donald Nguimfack. Architected with
                precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
