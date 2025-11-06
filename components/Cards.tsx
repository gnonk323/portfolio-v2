import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectCard({
  title,
  description,
  date,
  href,
  newTab = false,
}: {
  title: string;
  description: string;
  date: string;
  href: string;
  newTab?: boolean;
}) {
  return (
    <Link
      className="rounded-xl p-4 border border-stone-300 text-left flex flex-col justify-between group ring-0 hover:ring-4 ring-stone-500/40 transition-all"
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm">
        <div className="text-stone-500">{date}</div>
        <div className="flex opacity-0 group-hover:opacity-100 rounded-full bg-foreground text-background py-1 px-3 items-center gap-1 cursor-pointer hover:-translate-y-1 transition-all hover:drop-shadow-lg">
          Read More
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
