import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="label mb-4">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
