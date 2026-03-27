import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  content: string;
  author: string;
  authorExtra?: string;
  date?: Date | string;
  imageUrl?: string;
}

export const TestimonialCard = ({
  content,
  author,
  authorExtra,
  date,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <Card className="relative overflow-hidden border-l-4 border-primary/70 bg-card p-6 shadow-sm transition-all hover:shadow-md">
      {/* Floating image */}
      {imageUrl && (
        <div className="absolute left-6 top-6 h-16 w-16 overflow-hidden rounded-full shadow-sm">
          <Image src={imageUrl} alt={author} fill className="object-cover" />
        </div>
      )}

      <CardContent className="pl-24 pt-2 space-y-4">
        <p
          className="text-muted-foreground leading-relaxed relative mt-2
        before:font-eb-garamond before:font-bold before:content-['“'] before:absolute before:-top-9 before:-left-6 before:text-8xl before:text-primary/40
        after:font-eb-garamond after:font-bold after:content-['”'] after:absolute after:-bottom-20 after:-right-4 after:text-8xl after:text-primary/40
        "
        >
          {content}
        </p>

        <div className="flex flex-col">
          <div>
            <span className="font-medium">{author}</span>

            {authorExtra && (
              <span className="text-sm text-muted-foreground">
                {" | "}
                {authorExtra}
              </span>
            )}
          </div>

          {date && (
            <span className="text-xs text-muted-foreground/70">
              {typeof date === "string" ? date : date.toLocaleDateString()}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
