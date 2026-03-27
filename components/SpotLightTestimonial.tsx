import Image from "next/image";

interface SpotlightTestimonialProps {
  content: string;
  author: string;
  authorExtra?: string;
  date?: Date | string;
  imageUrl: string;
}

export const SpotlightTestimonial = ({
  content,
  author,
  authorExtra,
  date,
  imageUrl,
}: SpotlightTestimonialProps) => {
  return (
    <div className="relative mx-auto mt-14 mb-6">
      <div className="max-w-3xl flex flex-col">
        {/* Avatar container (half-size of the box) */}
        <div className="relative h-32 w-32 -mb-8 z-10 ml-auto mr-16 md:mr-12 lg:mr-16">
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-md">
            <Image src={imageUrl} alt={author} fill className="object-cover" />
          </div>
        </div>

        {/* Text block overlapping the image */}
        <div className="relative bg-card/60 backdrop-blur-sm p-10 pt-16 rounded-xl shadow-sm max-w-xl text-center">
          <p className="relative text-xl leading-relaxed text-muted-foreground md:text-2xl before:content-['“'] before:font-eb-garamond before:absolute before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-6xl md:before:text-8xl md:before:font-bold before:text-primary/30">
            {content}
          </p>

          {/* Author */}
          <div className="mt-8 flex flex-col items-center gap-1">
            <span className="font-semibold text-foreground">{author}</span>

            {authorExtra && (
              <span className="text-sm text-muted-foreground">
                {authorExtra}
              </span>
            )}

            {date && (
              <span className="text-xs text-muted-foreground/70">
                {typeof date === "string" ? date : date.toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
