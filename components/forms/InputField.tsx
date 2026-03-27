import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const InputField: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
  validation,
  disabled,
  value,
}) => {
  return (
    <div className="space-y-2 space-x-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn("form-input", {
          "opacity-80 cursor-not-allowed": disabled,
        })}
        {...register(name, validation)}
      />

      <div className="min-h-5 transition-opacity duration-500">
        {error ? (
          <p className="text-red-300 text-sm opacity-100">{error.message}</p>
        ) : (
          <p className="opacity-0 text-sm aria-hidden:">placeholder</p>
        )}
      </div>
    </div>
  );
};

export default InputField;
