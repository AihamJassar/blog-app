import { Post, Comment } from "@/types/post";

export async function fetchPosts(page = 1, limit = 9): Promise<Post[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function fetchPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export async function fetchComments(id: string): Promise<Comment[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}
