
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const SubmitButton = ({
  text,
  onClick,
  className,
  disabled = false,
  type = "submit"
}: SubmitButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  return (
    <button
      type={type}
      className={cn(
        "button-primary group relative overflow-hidden animate-fade-in",
        { "opacity-70 cursor-not-allowed": disabled },
        className
      )}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <div 
        className={cn(
          "absolute inset-0 -translate-x-full bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer",
          isHovered ? "opacity-30" : "opacity-0"
        )}
      />
    </button>
  );
};

export default SubmitButton;
