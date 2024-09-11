import { Button } from "@/components/ui/button";
import { Youtube, FileText } from "lucide-react";
import { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExtractButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export default function ExtractButton({ className, disabled, isLoading, ...props }: ExtractButtonProps) {
  return (
    <Button
    type="submit"
      variant="default"
      size="lg"
      className={cn(
        "group relative overflow-hidden font-semibold py-6 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out",
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white transform hover:scale-105",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      <span className="flex items-center space-x-2">
        <Youtube className={cn("w-5 h-5 transition-transform duration-300 ease-in-out", !disabled && "group-hover:scale-110")} />
        <span>{isLoading ? "Processing..." : "Extract & Summarize"}</span>
        <FileText className={cn("w-5 h-5 transition-transform duration-300 ease-in-out", !disabled && "group-hover:rotate-12")} />
      </span>
      {!disabled && (
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <span className="bg-white bg-opacity-20 rounded-full p-8 animate-ping"></span>
        </span>
      )}
    </Button>
  );
}
