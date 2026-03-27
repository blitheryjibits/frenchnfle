import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FloatingInput({
  label,
  className,
  ...props
}: FloatingInputProps) {
  return (
    <div className="relative w-full">
      <Input
        {...props}
        placeholder=" " // important: keeps label floating logic clean
        className={cn("peer h-12 pt-6", className)}
      />

      <label
        className={cn(
          "absolute left-3 top-3 text-muted-foreground transition-all duration-200",
          "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground",
          "peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary",
          "pointer-events-none",
        )}
      >
        {label}
      </label>
    </div>
  );
}
