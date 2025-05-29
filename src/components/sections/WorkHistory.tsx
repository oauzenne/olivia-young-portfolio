export default function WorkHistory() {
  const roles = [
    {
      title: "Lead Frontend Developer",
      company: "Primary Arms",
      date: "2025 – Present",
      description:
        "Lead the development team to build and optimize e-commerce experiences using HTML, CSS, JavaScript, and NetSuite integrations. Develop modern and responsive landing pages and interfaces.",
      tech: ["Figma", "Agile","HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frontend Developer",
      company: "Primary Arms",
      date: "2024 – 2025",
      description:
        "Designed and developed modern landing pages and interfaces for e-commerce campaigns and internal tooling.",
      tech: ["HTML", "CSS", "JavaScript", "Netsuite"],
    },
    {
      title: "UX/UI Developer",
      company: "Internet Ingenuity",
      date: "2021 – 2024",
      description:
        "Designed and built marketing websites and client portals for small business clients in an agency setting.",
      tech: ["WordPress", "JavaScript", "jQuery", "Tailwind"],
    },
    {
      title: "Junior Full Stack Software Engineer",
      company: "Baylor Genetics",
      date: "2018 – 2020",
      description:
        "Helped develop internal web apps for lab management and reporting.",
      tech: ["React", "C#", "MySQL", "Delphi"],
    },
    {
      title: "UX Designer & Web Developer",
      company: "The Auzenne Agency",
      date: "2016 – 2018",
      description:
        "Founded a boutique digital studio offering branding, design, and custom websites for entrepreneurs.",
      tech: ["Wix", "HTML/CSS"],
    },
  ];

  return (
    <section id="work-history" className="p-10 bg-black">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-10">
        Experience
      </h1>
      {roles.map((role, i) => (
        <div key={i} className="relative pl-8 mb-12">
          <span className="absolute -left-2 top-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full z-10"></span>
          <div className="absolute left-0 top-5 w-px h-full bg-gray-800"></div>
          <h3 className="text-xl font-semibold">{role.title}</h3>
          <p className="text-blue-500 font-medium">{role.company}</p>
          <p className="text-sm text-gray-400 mb-1">{role.date}</p>
          <p className="text-gray-300">{role.description}</p>
        </div>
      ))}
    </section>
  );
}
