"use client";

import { Repeat, Target, Search } from "lucide-react";

const cards = [
  {
    icon: <Repeat className="h-8 w-8 text-white" />,
    title: "Technical Leadership",
    description:
      "I roll up my sleeves and dive into code, all while steering the big-picture strategy. It’s that hands-on-meets-high-level combo that helps me turn complex challenges into smart, business-savvy solutions.",
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "User-Centered Design",
    description:
      "Every project I build starts with the user. With a blend of frontend expertise and project management know - how, I make sure we deliver not just what stakeholders ask for - but what users genuinely need.",
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Continuous Optimization",
    description:
      "“Good enough” isn’t in my vocabulary. I’m all about testing, learning, and - tuning until the experience feels exceptional - for users and performance alike.",
  },
];

export default function UniqueValue() {
  return (
    <section id="unique-value" className="p-10 bg-white">
      <h1 className="text-black text-4xl md:text-5xl font-bold mb-10">
        My Approach
      </h1>
      <div className="mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col rounded-2xl shadow-md bg-white p-6 transition hover:shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl" />
            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
