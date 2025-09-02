"use client";

import { PostCard } from "@/components/post/post-card";
import { PostCardSkeleton } from "@/components/post/post-card-skeleton";
import { Post } from "@/types/post";
import useSWRInfinite from "swr/infinite";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function PostsPage() {
  const { data, size, setSize, isValidating } = useSWRInfinite<Post[]>(
    (index) => `https://jsonplaceholder.typicode.com/posts?_page=${index + 1}&_limit=9`,
    fetcher
  );

  const posts = data ? data.flat() : [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
        {isValidating && Array.from({ length: 3 }).map((_, i) => <PostCardSkeleton key={i} />)}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => setSize(size + 1)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
