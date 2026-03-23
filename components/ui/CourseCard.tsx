import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  content: string;
  icon?: string | React.ReactNode;
}

export const CourseCard = ({ title, content, icon }: CourseCardProps) => {
  return (
    <Card
      className="w-54 py-3 hover:shadow-md transition-shadow rounded-md 
    bg-white/30 backdrop-blur-md border border-white/20 shadow-black/20 shadow-lg"
    >
      <CardHeader className="flex flex-col items-center mb-3">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>

      <CardContent className="mb-3">
        <p className=" leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
};
