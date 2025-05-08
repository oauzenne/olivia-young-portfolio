import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="h-[100vh] w-[100%] flex flex-row">
      <div className="w-[40%] flex flex-col justify-center">
        <h3 className="text-4xl font-bold pb-4">Hello World,</h3>
        <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          I'm Olivia
        </h1>
        <h2 className="text-3xl text-gray-50">Lead Frontend Developer</h2>
        <p className="text-gray-400 text-sm mt-2 mb-2 font-light">
          Bridging design, code, and strategy
        </p>
        <a href="mailto:oauzenne@gmail.com">
          <button className="cursor-pointer mt-6 px-12 py-4 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white text-m font-semibold rounded-full shadow-md hover:from-[#9333EA] hover:to-[#3B82F6] hover:shadow-lg transition-all duration-300">
            Let's Connect
          </button>
        </a>
      </div>
      <div className="w-[60%] h-screen relative">
        <Image
          src="/olivia-hero-image.png"
          alt="Olivia Young Photo"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
