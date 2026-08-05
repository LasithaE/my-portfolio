import {
  MAX_COMMENT_NAME_LENGTH,
  MAX_COMMENT_MESSAGE_LENGTH,
} from "@/lib/comments";
import {
  CONTENTS_URL,
  githubHeaders,
  fetchCommentsFileForWrite,
  getComments,
} from "@/lib/getComments";

const MAX_RETRIES = 3;

export async function GET() {
  const comments = await getComments();
  return Response.json({ comments });
}

export async function POST(request) {
  if (!process.env.GITHUB_TOKEN) {
    return Response.json(
      { error: "Comments are not configured yet." },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!message) {
    return Response.json({ error: "Comment can't be empty." }, { status: 400 });
  }
  if (message.length > MAX_COMMENT_MESSAGE_LENGTH) {
    return Response.json(
      { error: `Comment must be under ${MAX_COMMENT_MESSAGE_LENGTH} characters.` },
      { status: 400 }
    );
  }
  if (name.length > MAX_COMMENT_NAME_LENGTH) {
    return Response.json(
      { error: `Name must be under ${MAX_COMMENT_NAME_LENGTH} characters.` },
      { status: 400 }
    );
  }

  const newComment = {
    name: name || "Anonymous",
    message,
    timestamp: new Date().toISOString(),
  };

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    let current;
    try {
      current = await fetchCommentsFileForWrite();
    } catch {
      return Response.json(
        { error: "Couldn't reach the comment store. Try again." },
        { status: 502 }
      );
    }

    const updated = [...current.comments, newComment];
    const putRes = await fetch(CONTENTS_URL, {
      method: "PUT",
      headers: {
        ...githubHeaders(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Add comment from ${newComment.name}`,
        content: Buffer.from(JSON.stringify(updated, null, 2)).toString(
          "base64"
        ),
        sha: current.sha,
      }),
    });

    if (putRes.ok) {
      return Response.json({ comment: newComment }, { status: 201 });
    }

    if (putRes.status !== 409) {
      return Response.json(
        { error: "Couldn't save your comment. Try again." },
        { status: 502 }
      );
    }
    // 409 = sha mismatch (concurrent write) — retry with a fresh read.
  }

  return Response.json(
    { error: "Comment store is busy right now — try again in a moment." },
    { status: 503 }
  );
}
