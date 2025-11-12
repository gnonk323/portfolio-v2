import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@sglara/cn";

export function Button({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-full px-3 py-1 border border-foreground flex items-center gap-2 hover:bg-foreground hover:text-background transition-colors cursor-pointer md:text-base text-sm",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function NextProjectButton({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="rounded border border-stone-300 p-6 mt-16 flex items-center justify-between hover:-rotate-1 transition-all cursor-pointer hover:bg-stone-200 md:text-base text-sm">
        <div>
          <p className="font-semibold text-lg">Next Project</p>
          <p>{name}</p>
        </div>
        <div className="text-sky-600 font-semibold flex items-center gap-2">
          Keep Going
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
