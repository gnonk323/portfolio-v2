import { cn } from "@sglara/cn";

export function MainHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("font-sans font-bold md:text-5xl text-2xl", className)}>
      {children}
    </h1>
  );
}

export function SubHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn("font-doto font-bold text-stone-500 text-3xl", className)}
    >
      {children}
    </h2>
  );
}

export function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("font-sans sm:text-xs text-base", className)}>
      {children}
    </p>
  );
}
