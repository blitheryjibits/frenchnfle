import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function MaisonryGridCard({
  title,
  badge,
  icon,
  paragraphs = [],
  footerTags = [],
  className = "",
  headerClass = "",
}: MaisonryCardProps) {
  return (
    <Card
      className={cn(
        `bg-card p-4 h-[clamp(92px, 12vh, 120px)] overflow-hidden font-sans rounded-md`,
        className,
      )}
    >
      <CardHeader className="mb-2 md:mb-8">
        <CardAction className="font-eb-garamond">{badge}</CardAction>
        <div className={cn("", headerClass)}>
          <div className="mb-6 md:mb-8">{icon}</div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        {Array.isArray(paragraphs) &&
          paragraphs.map((node, i) =>
            typeof node === "string" ? (
              <p key={i} className="mb-2 md:text-xl">
                {node}
              </p>
            ) : (
              <div key={i} className="mb-2">
                {node}
              </div>
            ),
          )}
      </CardContent>
      <CardFooter className="mt-auto">
        {footerTags.length > 0 && (
          <div className="flex flex-row gap-3 mt-8 ">
            {footerTags.map((tag) => tag)}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
