export default function SkillSet() {
  return (
    <section id="skill-set" className="p-10 bg-gray-100">
      <h1 className="text-[#1E1E1E] text-4xl md:text-5xl font-bold mb-10">
        Skill Set
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 text-[#1E1E1E]">
            Development
          </h3>
          {[
            { name: "React / Next.js", percent: 95 },
            { name: "JavaScript / TypeScript", percent: 92 },
            { name: "HTML5 / CSS3", percent: 96 },
            { name: "Git & CI/CD Pipelines", percent: 90 },
            { name: "UI/UX Design", percent: 88 },
          ].map((skill) => (
            <div key={skill.name} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#1E1E1E]">{skill.name}</span>
                <span className="text-[#1E1E1E] font-semibold">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${skill.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 text-[#1E1E1E]">
            Project Management
          </h3>
          {[
            { name: "Agile / Scrum", percent: 94 },
            { name: "Team Leadership", percent: 90 },
            { name: "Resource Planning", percent: 88 },
            { name: "Risk Management", percent: 87 },
            { name: "Stakeholder Communication", percent: 92 },
          ].map((skill) => (
            <div key={skill.name} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#1E1E1E]">{skill.name}</span>
                <span className="text-[#1E1E1E] font-semibold">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${skill.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
