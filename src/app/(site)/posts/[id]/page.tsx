"use client";

import { useEffect, useState } from "react";
import { fetchPost, fetchComments } from "@/lib/fetcher";
import { CommentForm } from "@/components/post/comment-form";
import { Comment, Post } from "@/types/post";

interface PostDetailPageProps {
  params: { id: string };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const fetchedPost = await fetchPost(params.id);
      const fetchedComments = await fetchComments(params.id);
      setPost(fetchedPost);
      setComments(fetchedComments);
      setLoading(false);
    };
    loadData();
  }, [params.id]);

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  const imageUrl = `https://picsum.photos/seed/${post.id}/1200/500`;

  const handleAddComment = (comment: Comment) => {
    setComments((prev) => [comment, ...prev]);
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* صورة المقال */}
      <div className="relative h-80 rounded-3xl overflow-hidden mb-6 shadow-lg">
        <img
          src={imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white">
          {post.title}
        </h1>
      </div>

      {/* نص المقال */}
      <p className="text-gray-700 dark:text-gray-300 mb-10">{post.body}</p>

      {/* Comment Form */}
      <CommentForm postId={post.id.toString()} onAdd={handleAddComment} />

      {/* Comments */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Comments ({comments.length})
        </h2>

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 dark:bg-gray-700 p-4 rounded-2xl h-24 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment, idx) => (
              <div
                key={comment.id}
                className={`bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black p-4 rounded-2xl shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl opacity-0 translate-y-4 animate-slide-up
                  ${comment.newlyAdded ? "animate-bounce-fast" : ""}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-medium">{comment.name}</h3>
                <p className="text-sm text-gray-500">{comment.email}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
