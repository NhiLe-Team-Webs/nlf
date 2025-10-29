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
        "flex items-center gap-2 rounded-full border border-slate-800/50 bg-slate-900/90 px-3 py-1.5 text-slate-200 shadow-inner shadow-black/20",
        className,
      )}
      aria-label="Language selection"
    >
      <Globe className="h-4 w-4 text-slate-300" aria-hidden="true" />
      <div className="flex items-center gap-1.5">
        {LANGUAGE_OPTIONS.map((option) => {
          const isActive = option.code === language;
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full px-3 py-1 text-sm font-medium transition-all",
                isActive
                  ? "bg-background text-slate-900 shadow-sm"
                  : "text-slate-300 hover:text-white",
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
