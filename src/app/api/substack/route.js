
export async function GET() {
    return Response.json({
      message: "Hello from Substack API route!",
      posts: [
        { title: "Post 1", link: "https://lasithae.substack.com/p/zinga-improvement-on-retention-and" },
        { title: "Post 2", link: "https://lasithae.substack.com/p/execution-questions-analyzing-disparities" },
      ],
    });
  }
  