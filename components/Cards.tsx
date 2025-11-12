import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Paragraph } from "./Typography";

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
      className="rounded p-4 border border-stone-300 text-left flex flex-col justify-between group ring-0 hover:ring-4 ring-stone-500/40 transition-all"
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      <div>
        <h3 className="font-bold  mb-1">{title}</h3>
        <Paragraph>{description}</Paragraph>
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

export function TechStackBadge({
  name,
  svgPath,
  icon,
}: {
  name: string;
  svgPath?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded border border-stone-300 px-2 py-1 hover:border-stone-500 transition-colors flex items-center gap-2 font-semibold cursor-default md:text-base text-sm">
      {svgPath && (
        <svg role="img" viewBox="0 0 24 24" width="16" height="16">
          <path d={svgPath} />
        </svg>
      )}
      {icon && icon}
      <span>{name}</span>
    </div>
  );
}

export function FeatureCard({
  title,
  description,
  onClickAction,
}: {
  title: string;
  description: string;
  onClickAction: () => void;
}) {
  return (
    <div
      className="flex flex-col justify-between p-6 border border-stone-300 rounded cursor-pointer hover:bg-stone-200 transition-all hover:ring-4 hover:ring-stone-300"
      onClick={onClickAction}
    >
      <div className="md:space-y-4 space-y-2">
        <h4 className="md:text-xl text-base font-bold">{title}</h4>
        <Paragraph>{description}</Paragraph>
      </div>
      <div className="flex justify-end mt-4 text-sm md:text-base">
        <p className="flex items-center gap-1 text-sky-600 font-semibold">
          Read More
          <ArrowRight size={16} />
        </p>
      </div>
    </div>
  );
}
