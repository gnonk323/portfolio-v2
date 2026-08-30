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
        "rounded px-3 py-1 border border-stone-300 bg-background flex items-center gap-2 hover:shadow-sm hover:border-stone-400 transition-all cursor-pointer md:text-base text-sm hover:rounded-xl",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function NextProjectButton({ name, href, className }: { name: string; href: string, className?: string }) {
  return (
    <Link href={href}>
      <div className={cn("rounded border border-stone-300 p-6 lg:mt-16 flex items-center justify-between transition-all cursor-pointer hover:shadow-md hover:border-rose-400 md:text-base text-sm hover:rounded-xl", className)}>
        <div>
          <p className="font-semibold text-lg">Next Project</p>
          <p>{name}</p>
        </div>
        <div className="text-rose-600 font-semibold flex items-center gap-2">
          Keep Going
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
