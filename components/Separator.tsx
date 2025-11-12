import { cn } from "@sglara/cn";

export default function Separator({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-px bg-stone-300", className)} aria-hidden />
  );
}
