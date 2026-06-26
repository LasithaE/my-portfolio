"use client";
import { usePathname } from "next/navigation";
import { TopBar } from "@/components/TopBar";

export function TopBarWrapper() {
  const pathname = usePathname();
  const hideTopBar = pathname === "/" || pathname.startsWith("/personal-mba"); // hide at root and on the MBA page (has its own header)

  if (hideTopBar) return null;

  return (
    <div className="sticky top-0 z-50 bg-white md:bg-transparent md:static">
      <TopBar />
    </div>
  );
}