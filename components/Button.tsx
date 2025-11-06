export function Button({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={`${className} rounded-full px-3 py-1 border border-foreground flex items-center gap-2 hover:bg-foreground hover:text-background transition-colors cursor-pointer`}
    >
      {children}
    </button>
  );
}
