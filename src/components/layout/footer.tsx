"use client";

import { DarkToggle } from "./dark-toggle";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8 px-4 mt-12 rounded-t-3xl shadow-inner">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">MyBlog</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Sharing knowledge and insights about web development.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-indigo-500 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-gray-600 dark:hover:text-white transition"
          >
            <Github size={20} />
          </a>
        </div>

        <div>
          <DarkToggle />
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};
