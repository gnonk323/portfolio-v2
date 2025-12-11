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
      className={cn(
        "font-doto font-bold text-stone-500 md:text-3xl text-lg",
        className,
      )}
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
    <p
      className={cn(
        "font-sans md:text-base text-sm leading-relaxed",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <code
      className={cn(
        "font-mono md:text-sm text-xs bg-stone-300 rounded py-0.5 px-1",
        className,
      )}
    >
      {children}
    </code>
  )
}
