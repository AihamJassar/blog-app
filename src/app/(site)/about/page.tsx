// src/app/(site)/about/page.tsx
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-indigo-400 mb-4 animate-pulse">
          About MyBlog
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Sharing insights, tutorials, and experiences about web development,
          programming, and technology.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          At <span className="text-indigo-400 font-semibold">MyBlog</span>, our
          mission is to provide developers with high-quality tutorials,
          practical guides, and the latest updates in web development and
          technology.
        </p>
        <p className="text-gray-300 text-lg">
          Whether you are a beginner or an experienced developer, {"you'll"}{" "}
          find content that helps you grow your skills and stay ahead in the
          industry.
        </p>
      </div>

      {/* Author / Team Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-8">
          About the Author
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative group">
            <Image
              src="/author.png"
              alt="Author"
              width={144}
              height={144}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-indigo-400 shadow-lg transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
          <div className="text-gray-300 text-lg space-y-4">
            <p>
              Hi! {"I'm"} the creator of{" "}
              <span className="text-indigo-400 font-semibold">MyBlog</span>.{" "}
              {"I'm"}
              passionate about web development, sharing knowledge, and helping
              other developers grow their skills.
            </p>
            <p>
              I love exploring new technologies, building projects, and writing
              tutorials that are practical and easy to follow.
            </p>
          </div>
        </div>
      </div>

      {/* Social Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-6">
          Connect with Me
        </h2>
        <div className="flex justify-center gap-8">
          {[
            { icon: <Github size={28} />, link: "https://github.com" },
            { icon: <Twitter size={28} />, link: "https://twitter.com" },
            { icon: <Linkedin size={28} />, link: "https://linkedin.com" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transform hover:-translate-y-1 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
