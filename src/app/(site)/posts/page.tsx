import { Metadata } from "next";
import PostsPageClient from "./PostsPageClient ";

export const metadata: Metadata = {
  title: "Latest Posts",
  description: "Browse the latest articles and insights from MyBlog.",
};

export default function PostsPage() {
  return <PostsPageClient />;
}
