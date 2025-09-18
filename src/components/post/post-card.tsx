"use client";

import Link from "next/link";
import { Post } from "@/types/post";
import { motion } from "framer-motion";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const imageUrl = `https://picsum.photos/seed/${post.id}/600/400`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.06, rotateZ: 0.5 }}
      className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer group"
    >
      <img
        src={imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-indigo-900/80 transition-colors"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold mb-2 line-clamp-1">{post.title}</h2>
        <p className="text-sm line-clamp-2 mb-3">{post.body}</p>
        <Link
          href={`/posts/${post.id}`}
          className="inline-block px-4 py-2 bg-indigo-600 rounded-xl text-white font-medium hover:bg-indigo-500 transition"
        >
          Read more →
        </Link>
      </div>
    </motion.div>
  );
};
