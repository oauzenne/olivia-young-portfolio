"use client";
import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const getIconClasses = (itemId: string) => {
    const baseClasses =
      "w-8 h-8 text-white cursor-pointer w-[100%] transition-all duration-200 ease-in-out";

    if (activeSection === itemId) {
      return `${baseClasses} drop-shadow-[0_0_12px_white] scale-110`;
    }

    return `${baseClasses} hover:drop-shadow-[0_0_6px_white]`;
  };

  const getHeroClasses = () => {
    const baseClasses =
      "w-full h-full p-1 md:p-3 text-white rounded-lg cursor-pointer transition-all duration-200 ease-in-out";

    if (activeSection === "hero") {
      return `${baseClasses} bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-[0_0_12px_rgba(147,51,234,0.8)] scale-110`;
    }

    return `${baseClasses} bg-gradient-to-r from-blue-500/70 to-purple-600/70 hover:from-blue-500 hover:to-purple-600 hover:text-[#1E1E1E]`;
  };

  return (
    <section id="left-nav">
      <nav className="fixed top-0 left-0 h-full md:block z-20 w-15 md:w-30">
        <ul className="flex flex-col items-center gap-6 pt-10">
          {navItems.map((item) => (
            <li key={item.id} className="w-[50%]">
              {item.id === "hero" && (
                <a href="#hero">
                  <Code2 className={getHeroClasses()} />
                </a>
              )}
              {item.id === "about-me" && (
                <a href="#about-me">
                  <User className={getIconClasses("about-me")} />
                </a>
              )}
              {item.id === "skill-set" && (
                <a href="#skill-set">
                  <Wrench className={getIconClasses("skill-set")} />
                </a>
              )}
              {item.id === "work-history" && (
                <a href="#work-history">
                  <BriefcaseBusiness
                    className={getIconClasses("work-history")}
                  />
                </a>
              )}
              {item.id === "unique-value" && (
                <a href="#unique-value">
                  <Brush className={getIconClasses("unique-value")} />
                </a>
              )}
              {item.id === "education" && (
                <a href="#education">
                  <School className={getIconClasses("education")} />
                </a>
              )}
              {item.id === "contact" && (
                <a href="#contact">
                  <Phone className={getIconClasses("contact")} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
