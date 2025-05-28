"use client";

export default function Education() {
  const mainEducation = [
    {
      year: "2019",
      institution: "Flatiron School",
      credential: "Full Stack Web Dev Bootcamp",
      description:
        "Intensive program covering React, JavaScript, Ruby on Rails, and modern web development practices.",
      status: "Graduated",
    },
    {
      year: "2023",
      institution: "Alison",
      credential: "Project Management Diploma",
      description:
        "Advanced project management methodologies, Agile frameworks, and team leadership strategies.",
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
      description: "",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {mainEducation.map((item, index) => (
          <div
            key={index}
            className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start gap-2 flex-wrap mb-1">
                  <h3 className="text-xl font-semibold text-white">
                    {item.credential}
                  </h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-sm text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item.status === "Graduated" ||
                        item.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-purple-500/20 text-purple-400"
                      }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{item.institution}</p>
                {item.description && (
                  <p className="text-gray-500 text-sm mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="opacity-60">
        <h4 className="text-lg text-gray-400 font-medium mb-4">
          Earlier Education
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {earlierEducation.map((item, index) => (
            <div
              key={index}
              className="bg-slate-700/40 backdrop-blur-sm rounded-2xl p-5 border border-slate-600/20 transition-all duration-300">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    {item.credential}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.institution}</p>
                  {item.description && (
                    <p className="text-gray-500 text-sm mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-4">
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
      </div>
    </section>
  );
}
