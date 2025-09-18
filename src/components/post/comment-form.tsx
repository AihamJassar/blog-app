"use client";

import { useState } from "react";
import { Comment } from "@/types/post";

interface CommentFormProps {
  postId: string;
  onAdd: (comment: Comment) => void;
}

export const CommentForm = ({ onAdd }: CommentFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !body) return;

    setSubmitting(true);

    const newComment: Comment = {
      id: Math.floor(Math.random() * 1000000),
      name,
      email,
      body,
      newlyAdded: true,
    };

    onAdd(newComment);

    setName("");
    setEmail("");
    setBody("");
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <h3 className="text-xl font-semibold">Add a Comment</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
      />
      <textarea
        placeholder="Your Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        rows={4}
      ></textarea>
      <button
        type="submit"
        disabled={submitting}
        className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
