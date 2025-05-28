"use client";

export default function Education() {
  const mainEducation = [
    {
      year: "2019",
      institution: "Flatiron School",
      description: "Intensive program covering React, JavaScript, Ruby on Rails, and modern web development practices.",
      credential: "Full Stack Web Development Bootcamp",
      status: "Graduated",
    },
    {
      year: "2023",
      institution: "Alison",
      credential: "Project Management Diploma",
      description: "Advanced project management methodologies, Agile frameworks, and team leadership strategies.",
      status: "Completed",
    },
  ];

  const earlierEducation = [
    {
      year: "2009 – 2012",
      institution: "University of Houston",
      credential: "Computer Science",
      description: "Left to pursue career opportunities in the tech industry.",
      status: "Pursued Career",
    },
    {
      year: "2009",
      institution: "High School",
      credential: "High School Diploma",
      status: "Graduated",
    },
  ];

  return (
    <section id="education" className="bg-slate-800 p-10">
      <div className="mb-10">
        <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-5xl font-bold mb-5">
          Education
        </h1>

        <p className="text-gray-400 text-lg max-w-xl">
          A few highlights from my journey of continuous growth and upskilling.
        </p>
      </div>

      <div className="space-y-10 mb-16">
        {mainEducation.map((item, index) => (
          <div
            key={index}
            className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.credential}
                </h3>
                <p className="text-gray-400 text-sm">{item.institution}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className="text-sm text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                  {item.year}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.status === "Graduated" || item.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-purple-500/20 text-purple-400"
                  }`}>
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8 opacity-60">
        <h4 className="text-lg text-gray-400 font-medium mb-4">
          Earlier Education
        </h4>
        {earlierEducation.map((item, index) => (
          <div
            key={index}
            className="bg-slate-700/40 backdrop-blur-sm rounded-2xl p-5 border border-slate-600/20 transition-all duration-300 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <div>
                <h3 className="text-lg font-medium text-white">
                  {item.credential}
                </h3>
                <p className="text-gray-400 text-sm">{item.institution}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className="text-sm text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                  {item.year}
                </span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
