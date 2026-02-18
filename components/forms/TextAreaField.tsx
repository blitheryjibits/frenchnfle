import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// interface FormTextareaProps {
//   name: string;
//   label: string;
//   placeholder?: string;
//   register: useFormRegister;
//   error?: any;
//   validation?: any;
//   disabled?: boolean;
//   value?: string;
//   className?: string;
// }

const TextAreaField: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  register,
  error,
  validation,
  disabled,
  value,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Textarea
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn("form-input", { "opacity-50 cursor-not-allowed": disabled })}
        {...register(name, validation)}
      />
      {error && <p className="text-red-300 text-sm">{error.message}</p>}
    </div>
  );
};

export default TextAreaField;
