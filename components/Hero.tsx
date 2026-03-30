import Image from "next/image";
import { cn } from "@/lib/utils";

export const Hero = ({
  minorText,
  heading,
  imageUrl,
  imageAlt,
  subtext,
  footer,
  className,
}: HeroProps) => {
  return (
    <section className={cn("w-full min-h-64 pt-12 md:py-32", className)}>
      <div className="w-8/9 mx-auto flex flex-col md:flex-row md:gap-8">
        <div className="flex flex-col gap-6 w-full md:max-w-1/2 md:my-8">
          <p className="py-0.5 px-4 rounded-xl bg-primary/60 max-w-fit text-accent font-noto-serif">
            {minorText}
          </p>
          {heading}
          <p className=" text-xl font-plus-jakart-sans">{subtext}</p>
          {Array.isArray(footer) && typeof footer[0] === "string" ? (
            <div className="flex flex-row gap-4">
              {footer.map((string, i) => (
                <p
                  key={`${i}herofootertext`}
                  className="px-4 py-0.5 bg-primary/60 text-muted-foreground rounded-xl"
                >
                  {string}
                </p>
              ))}
            </div>
          ) : (
            footer
          )}
        </div>
        <div className="flex-1 flex min-h-[100vw] md:min-h-auto">
          <div className="relative w-full max-h-full aspect-square">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
