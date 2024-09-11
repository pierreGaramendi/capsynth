"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const frameworks = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
];
interface ComboboxDemoProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  disabled: boolean;
}
export function ComboboxDemo({ selectedValue, onValueChange, disabled }: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[200px] justify-between bg-gray-800 text-white border-gray-700 hover:bg-gray-700 hover:text-white",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          disabled={disabled}
        >
          {selectedValue ? frameworks.find((framework) => framework.value === selectedValue)?.label : "Select language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-gray-800 text-white border-gray-700">
        <Command className="bg-gray-900 text-white placeholder-gray-500">
          <CommandInput
            placeholder="Search lang..."
            className="bg-gray-900 text-white placeholder-gray-500"
            disabled={disabled}
          />
          <CommandList>
            <CommandEmpty>No lang found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    onValueChange(currentValue === selectedValue ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="hover:bg-gray-700 text-white"
                >
                  <Check className={cn("mr-2 h-4 w-4", selectedValue === framework.value ? "opacity-100" : "opacity-0")} />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
