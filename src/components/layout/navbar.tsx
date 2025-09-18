"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { DarkToggle } from "./dark-toggle";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/about", label: "About" },
  ];

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
          {links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className={`hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors ${
                pathname === link.href
                  ? "text-indigo-500 dark:text-indigo-300 font-bold"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <DarkToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
