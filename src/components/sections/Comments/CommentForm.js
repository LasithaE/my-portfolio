"use client";
import React, { useState } from "react";
import {
  MAX_COMMENT_NAME_LENGTH,
  MAX_COMMENT_MESSAGE_LENGTH,
} from "@/lib/comments";

export default function CommentForm({ initialComments }) {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setComments((prev) => [...prev, data.comment]);
      setName("");
      setMessage("");
      setStatus("idle");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 border bg-white border-gray-300 shadow-md rounded-md p-4"
      >
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          maxLength={MAX_COMMENT_NAME_LENGTH}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <textarea
          placeholder="Leave a note 👋"
          value={message}
          maxLength={MAX_COMMENT_MESSAGE_LENGTH}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm resize-none"
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {message.length}/{MAX_COMMENT_MESSAGE_LENGTH}
          </span>
          <button
            type="submit"
            disabled={status === "submitting" || !message.trim()}
            className="bg-gray-800 text-white text-sm rounded-full px-4 py-2 disabled:opacity-50 transition"
          >
            {status === "submitting" ? "Sending…" : "Sign the guestbook"}
          </button>
        </div>
        {status === "error" && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </form>

      {comments.length > 0 && (
        <ul className="flex flex-col gap-2">
          {comments
            .slice()
            .reverse()
            .map((c, i) => (
              <li
                key={`${c.timestamp}-${i}`}
                className="border bg-white border-gray-300 shadow-sm rounded-md px-4 py-2 text-sm"
              >
                <span className="font-semibold">{c.name}: </span>
                {c.message}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
