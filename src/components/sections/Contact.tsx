"use client";
import {
  Mail,
  MapPin,
  Briefcase,
  Computer,
  TvMinimalPlay,
  Newspaper,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "oauzenne@gmail.com",
      href: "mailto:oauzenne@gmail.com",
      display: "oauzenne@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "houston",
      href: null,
      display: "Houston, TX",
    },
  ];

  const socialLinks = [
    {
      icon: Briefcase,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oliviaauzenne/",
      color: "hover:text-blue-600",
    },
    {
      icon: Computer,
      label: "GitHub",
      href: "https://github.com/oauzenne",
      color: "hover:text-purple-900",
    },
    {
      icon: Newspaper,
      label: "Medium",
      href: "https://medium.com/@oauzenne",
      color: "hover:text-blue-400",
    },
    {
      icon: TvMinimalPlay,
      label: "YouTube",
      href: "https://www.youtube.com/@LivieTheDeveloper",
      color: "hover:text-red-600",
    },
  ];

  return (
    <section id="contact" className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="flex items-center pr-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-gray-600">{item.display}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={index} className="relative group">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-gray-600 transition-all duration-200 hover:scale-110 ${social.color}`}
                        aria-label={social.label}>
                        <IconComponent className="w-6 h-6" />
                      </a>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        {social.label}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="font-medium">
              Currently available for new projects
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
