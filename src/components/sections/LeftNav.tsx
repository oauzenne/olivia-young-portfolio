import {
  Code2,
  User,
  BriefcaseBusiness,
  Wrench,
  Brush,
  School,
  Phone,
} from "lucide-react";
import { navItems } from "../../app/data/index";

export default function LeftNav() {
  return (
    <section id="left-nav">
      <nav className="fixed top-0 left-0 h-full md:block z-20 w-15 md:w-30">
        <ul className="flex flex-col items-center gap-6 pt-10">
          {navItems.map((item) => (
            <li key={item.id} className="w-[50%]">
              {item.id === "hero" && (
                <a href="#hero">
                  <Code2 className="w-full h-full p-1 md:p-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:text-[#1E1E1E] rounded-lg cursor-pointer" />
                </a>
              )}
              {item.id === "about-me" && (
                <a href="#about-me">
                  <User
                    className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out"
                  />
                </a>
              )}
              {item.id === "skill-set" && (
                <a href="#skill-set">
                  <Wrench className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
                </a>
              )}
              {item.id === "work-history" && (
                <a href="#work-history">
                  <BriefcaseBusiness className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
                </a>
              )}
              {item.id === "unique-value" && (
                <a href="#unique-value">
                  <Brush className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
                </a>
              )}
              {item.id === "education" && (
                <a href="#education">
                  <School className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
                </a>
              )}
              {item.id === "contact" && (
                <a href="#contact">
                  <Phone className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
