"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DarkToggle } from "./dark-toggle";

export const Navbar = () => {

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          MyBlog
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            About
          </Link>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <DarkToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
