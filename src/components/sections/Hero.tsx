import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col md:flex-row bg-slate-700 relative overflow-hidden justify-center md:justify-start">
      <div className="flex-1 flex flex-col justify-center pt-10 md:pt-0 md:pl-10 z-10 items-center md:items-start">
        <h3 className="text-2xl sm:text-4xl font-bold pb-4 text-gray-200">Hello World,</h3>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          I'm Olivia
        </h1>
        <h2 className="text-base md:text-3xl text-gray-50">Lead Frontend Developer</h2>
        <p className="text-gray-400 text-xs mt-2 mb-2 font-light">
          Bridging design, code, and strategy
        </p>
        <a href="mailto:oauzenne@gmail.com">
          <button className="cursor-pointer mt-6 px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-m font-semibold rounded-full shadow-md hover:from-purple-600 hover:to-blue-500 hover:shadow-lg transition-all duration-300">
            Let's Connect
          </button>
        </a>
      </div>

      <div className="h-full flex-shrink-0 relative flex justify-end">
        <Image
          src="/olivia-hero-image.png"
          alt="Olivia Young Photo"
          width={500}
          height={900}
          className="h-auto md:h-screen w-auto object-contain object-right"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-700/90 to-transparent pointer-events-none"></div>
    </section>
  );
}
