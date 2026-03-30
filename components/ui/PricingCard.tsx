import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { cn } from "@/lib/utils";

export const PriceCard = ({
  title,
  duration,
  price,
  priceExtract,
  className,
  featured = false,
}: PriceCardProps) => {
  return (
    <Card
      data-featured={featured ? "true" : "false"}
      className={cn(
        "flex-1 flex flex-col max-w-84 min-w-60 justify-center text-center p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300",
        featured &&
          "bg-primary border-primary-foreground text-white shadow-secondary hover:shadow-lg",
        className,
      )}
    >
      <CardHeader className="mb-4 ">
        <CardTitle
          className={cn(featured && "bg-secondary py-2 rounded-xl", "text-2xl")}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-pretty text-xl flex flex-col gap-2">
        <div>{duration}</div>
        <div>{typeof price === "string" ? <p>{price}</p> : `${price} €`}</div>
        <div
          className={cn(
            "text-sm font-eb-garamond text-muted-foreground",
            featured && "text-muted",
          )}
        >
          {priceExtract}
        </div>
      </CardContent>
    </Card>
  );
};
