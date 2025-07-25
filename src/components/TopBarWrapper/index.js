"use client";
import { usePathname } from "next/navigation";
import { TopBar } from "@/components/TopBar";

export function TopBarWrapper() {
  const pathname = usePathname();
  const hideTopBar = pathname.startsWith("/casestudy-mvp");

  if (hideTopBar) return null;

  return (
    <div className="sticky top-0 z-50 bg-whit md:bg-transparent md:static">
      <TopBar />
    </div>
  );
}