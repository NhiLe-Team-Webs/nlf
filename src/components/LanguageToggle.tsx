import { LANGUAGE_OPTIONS, useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle = ({ className }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-600 shadow-sm",
        "transition-colors duration-200",
        className,
      )}
      aria-label="Language selection"
    >
      <Globe className="h-4 w-4 text-primary" aria-hidden="true" />
      <div className="flex items-center gap-1">
        {LANGUAGE_OPTIONS.map((option) => {
          const isActive = option.code === language;
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full px-3 py-1 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-slate-600 hover:text-primary",
              )}
            >
              {option.shortLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageToggle;
