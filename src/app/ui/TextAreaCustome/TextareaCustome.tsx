import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface TextareaProps {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function TextareaCustome({ value = "", disabled = false, className }: TextareaProps) {
  return (
    <Textarea
      className={cn(
        "block w-full rounded-lg transition-all duration-300 ease-in-out border border-gray-300 p-3 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm focus:ring-2",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      value={value}
      disabled={disabled}
      rows={24}
    />
  );
}
