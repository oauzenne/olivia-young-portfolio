"use client";
import Image from "next/image";

export default function Shop() {
  return (
    <section id="shop" className="p-10 bg-slate-50">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-4">
          My Products & Services
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          Resources and sessions to help you level up your coding journey.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {[
          {
            title: "Developer Coaching",
            price: "$50.00 USD",
            image: "/liv-the-dev.png",
            link: "https://buy.stripe.com/eVabLa1Sf7KB60o8wx",
          },
          {
            title: "The Ultimate CSS Cheat Sheet",
            price: "$4.99 USD",
            image: "/ultimate-css.png",
            link: "https://buy.stripe.com/14A8wPeG216C7Dd30z4ow02",
          },
          {
            title: "The Ultimate Beginner’s HTML Cheat Sheet",
            price: "$4.99 USD",
            image: "/ultimate-html.png",
            link: "https://buy.stripe.com/bJe7sLeG28z42iT44D4ow03",
          },
          {
            title: "From Clueless to Coding: Beginner’s Guide",
            price: "$12.99 USD",
            image: "/from-clueless-to-coding.png",
            link: "https://buy.stripe.com/14AaEX41og1wcXxfNl4ow04",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[350px] bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition duration-300 overflow-hidden group">
            <div className="w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}