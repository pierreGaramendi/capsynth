import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface VideoInputProps extends React.TextareaHTMLAttributes<HTMLInputElement> {}

export function LinkInput({ className, ...props }: VideoInputProps) {
  return (
    <div className="w-full max-w-md space-y-2">
      <Input
        className={cn(
          "py-3 px-4 rounded-lg shadow-sm transition-all duration-300 ease-in-out",
          "bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-600",
          "border border-gray-700 focus:border-indigo-600",
          "hover:bg-gray-700",
          className
        )}
        {...props}
      />
    </div>
  );
}
