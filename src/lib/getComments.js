const OWNER = "LasithaE";
const REPO = "my-portfolio";
const PATH = "data/comments.json";
export const CONTENTS_URL = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`;

export function githubHeaders() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

function decode(data) {
  const decoded = Buffer.from(data.content, "base64").toString("utf-8");
  return { comments: JSON.parse(decoded), sha: data.sha };
}

// Used before every write: must see the true current SHA, never a cached one,
// or the conflict-retry loop just spins against the same stale value.
export async function fetchCommentsFileForWrite() {
  const res = await fetch(CONTENTS_URL, {
    headers: githubHeaders(),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`GitHub GET failed: ${res.status}`);
  }
  return decode(await res.json());
}

// Used for display only — short-lived cache so the homepage can stay
// statically revalidated (ISR) instead of forcing fully dynamic rendering.
export async function getComments() {
  try {
    const res = await fetch(CONTENTS_URL, {
      headers: githubHeaders(),
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error(`GitHub GET failed: ${res.status}`);
    }
    const { comments } = decode(await res.json());
    return comments;
  } catch {
    // Feels-broken vs feels-empty: an unreachable guestbook should look quiet, not error out.
    return [];
  }
}
