import { Card, CardHeader, CardContent } from '@/components/ui/card'

interface CourseCardProps {
  title: string
  content: string
  icon?: string | React.ReactNode
}

export const CourseCard = ({ title, content, icon }: CourseCardProps) => {
  return (
    <Card className="w-54 shadow-sm hover:shadow-md transition-shadow rounded-md border bg-white">
      <CardHeader className="flex flex-col items-center">
        <div className="text-3xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {content}
        </p>
      </CardContent>
    </Card>
  )
}
