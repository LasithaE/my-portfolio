import { getSubstackPosts } from "@/lib/getSubstackPosts";

export const revalidate = 3600;

export async function GET() {
  const posts = await getSubstackPosts();
  return Response.json({ posts });
}
