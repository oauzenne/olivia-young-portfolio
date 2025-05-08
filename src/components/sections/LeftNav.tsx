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
      <nav className="fixed top-0 left-0 h-full hidden md:block z-20 w-15 md:w-30">
        <ul className="flex flex-col items-center gap-6 pt-10">
          {navItems.map((item) => (
            <li key={item.id} className="w-[50%]">
              {item.id === "hero" && (
                <Code2 className="w-full h-full p-3 text-white bg-gradient-to-br from-[#4B0082] to-[#2E003E] hover:text-[#C8A2C8] rounded-lg cursor-pointer" />
              )}
              {item.id === "about-me" && (
                <User className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
              )}
              {item.id === "skill-set" && (
                <Wrench className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
              )}
              {item.id === "work-history" && (
                <BriefcaseBusiness className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
              )}
              {item.id === "unique-value" && (
                <Brush className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
              )}
              {item.id === "education" && (
                <School className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
              )}
              {item.id === "contact" && (
                <Phone className="w-8 h-8 text-white cursor-pointer w-[100%] hover:drop-shadow-[0_0_6px_white] transition-all duration-200 ease-in-out" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
