"use client";
import React, { useEffect, useState } from "react";
import { Eye } from "@phosphor-icons/react";

const NAMESPACE = "lasithae-portfolio";
const KEY = "site-views";

function formatCount(n) {
  if (n < 1000) return `${n}`;
  if (n < 1_000_000) {
    const k = n / 1000;
    return `${Number.isInteger(k) ? k : k.toFixed(1)}K`;
  }
  const m = n / 1_000_000;
  return `${Number.isInteger(m) ? m : m.toFixed(1)}M`;
}

export default function ViewCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && typeof data?.count === "number") {
          setCount(data.count);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
      <Eye size={16} weight="regular" />
      <span>{formatCount(count)}</span>
    </div>
  );
}
