export default function AboutMe() {
  return (
    <section id="about-me" className="bg-[#F9FAFB] p-10">
      <h1 className="text-[#1E1E1E] text-4xl md:text-5xl font-bold mb-5">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <p className="text-black pb-5">
            Frontend Developer and Technical Project Manager with 8+ years of
            experience crafting beautiful, user-focused digital experiences. I
            bridge the gap between design, development, and strategy -
            translating business goals into technical solutions and supporting
            dev teams every step of the way. Whether I&apos;m coding alongside
            my team, mentoring new developers, or exploring emerging tech, I
            lead with intention and curiosity.
          </p>
          <p className="text-black">
            On weekends, you can catch me deep in philosophy books, journaling
            ideas for my third book, or exploring the overlap between
            creativity, code, and the cosmos.
          </p>
        </div>
        <div className="w-full md:w-[50%] mt-5 md:mt-0 rounded-lg md:ml-10 bg-[#1E1E1E] shadow-lg flex flex-col">
          <div className="flex flex-col md:flex-row w-[100%] px-5 md:px-10 pt-10 items-center ">
            <div className="text-white w-fit text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-center md:mr-2 rounded-lg p-2">
              8+
            </div>
            <div className="text-white w-fit md:ml-5 text-lg md:text-2xl md:pt-0 pt-2 font-bold text-center md:text-left">
              Years of Experience
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row w-[100%] px-5 md:px-10 pt-5 
            items-center">
            <div className="text-white w-fit text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-center md:mr-2 rounded-lg p-2">
              35+
            </div>
            <div className="text-white w-fit md:ml-5 text-lg md:text-2xl md:pt-0 pt-2 font-bold text-center md:text-left">
              Shipped Projects
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-[100%] px-5 md:px-10 pt-5 pb-10 items-center">
            <div className="text-white w-fit text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-center md:mr-2 rounded-lg p-2">
              4000+
            </div>
            <div className="text-white w-fit md:ml-5 text-lg md:text-2xl md:pt-0 pt-2 font-bold text-center md:text-left">
              YouTube Subs on Dev Channel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
