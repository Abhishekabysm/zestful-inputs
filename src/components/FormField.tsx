
import React from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  min?: number;
  max?: number;
  options?: { value: string; label: string }[];
}

const FormField = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  className,
  min,
  max,
  options
}: FormFieldProps) => {
  return (
    <div className={cn("mb-6 animate-slide-up opacity-0", className)} 
      style={{ animationDelay: `${parseInt(id.replace(/\D/g, '') || '0') * 0.1}s`, animationFillMode: "forwards" }}>
      <label htmlFor={id} className="fitness-label">
        {label} {required && <span className="text-fitness-accent">*</span>}
      </label>
      
      {type === "select" && options ? (
        <select
          id={id}
          value={value.toString()}
          onChange={(e) => {
            const event = {
              target: {
                value: e.target.value
              }
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
          }}
          className="fitness-input"
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="fitness-input"
            required={required}
            min={min}
            max={max}
          />
          {type === "number" && (
            <div className="absolute right-0 top-0 h-full flex items-center pr-4 text-fitness-dark/50">
              {id.includes("height") ? "cm" : id.includes("weight") ? "kg" : ""}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FormField;
