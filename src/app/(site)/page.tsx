"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "@/lib/fetcher";
import { Post } from "@/types/post";
import { PostCard } from "@/components/post/post-card";
import { PostCardSkeleton } from "@/components/post/post-card-skeleton";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchPosts(1, 6); // أحدث 6 مقالات
      setPosts(fetchedPosts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <div className="space-y-12">
      {/* Banner */}
      <section className="relative h-96 rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://picsum.photos/seed/banner/1600/500"
          alt="Banner"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to MyBlog
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
            Discover the latest articles, insights, and tutorials on web
            development.
          </p>
        </div>
      </section>

      {/* أحدث المقالات */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <PostCardSkeleton key={i} />
              ))
            : posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>
    </div>
  );
}
