import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Briefcase, Code2, Home, Mail} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

const navItems = [
  {path: "/", icon: Home, label: "Home"},
  {path: "/work", icon: Briefcase, label: "Work"},
  {path: "/skills", icon: Code2, label: "Skills"},
  {path: "/contact", icon: Mail, label: "Contact"}
];

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop - Right sidebar */}
      <nav
        className="hidden lg:flex fixed right-0 top-0 h-screen z-50 flex-col items-center justify-center"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        aria-label="Main navigation"
      >
        <motion.div
          className="flex flex-col gap-1 rounded-l-xl overflow-hidden backdrop-blur-xl"
          animate={{width: expanded ? 200 : 56}}
          transition={{duration: 0.3, ease: [0.25, 0.1, 0.25, 1]}}
          style={{background: "rgba(26,26,26,0.9)"}}
        >
          {navItems.map(({path, icon: Icon, label}) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-4 py-4 transition-colors min-h-[48px] min-w-[48px]
                  ${isActive ? "text-white bg-white/10" : "text-white/60 hover:text-white hover:bg-white/5"}`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <AnimatePresence>
                  {expanded && (
                    <motion.span
                      initial={{opacity: 0, x: -10}}
                      animate={{opacity: 1, x: 0}}
                      exit={{opacity: 0, x: -10}}
                      className="text-sm font-grotesk font-medium whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute left-0 w-[3px] h-8 bg-accent-orange rounded-r"
                  />
                )}
              </Link>
            );
          })}
        </motion.div>
      </nav>

      {/* Mobile - Bottom bar */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t border-white/10"
        style={{background: "rgba(26,26,26,0.95)"}}
        aria-label="Main navigation"
      >
        <div className="flex justify-around items-center py-2 px-4">
          {navItems.map(({path, icon: Icon, label}) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center gap-1 p-2 min-w-[48px] min-h-[48px] justify-center transition-colors
                  ${isActive ? "text-white" : "text-white/50"}`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-grotesk">{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className="absolute top-0 w-8 h-[2px] bg-accent-orange rounded-b"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu button - hidden since we use bottom nav */}
    </>
  );
}
