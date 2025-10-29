import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useLanguage, useTranslations } from "@/contexts/language-context";

const StatsSection = () => {
  const { stats } = useTranslations();
  const { language } = useLanguage();
  const [animatedValues, setAnimatedValues] = useState({
    donated: 0,
    projects: 0,
  });

  useEffect(() => {
    const animateNumber = (
      target: number,
      setter: (value: number) => void,
      duration = 2500,
    ) => {
      let current = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
    };

    const timeout = setTimeout(() => {
      animateNumber(977_372_893, (value) =>
        setAnimatedValues((prev) => ({ ...prev, donated: value })),
      );
      animateNumber(15, (value) =>
        setAnimatedValues((prev) => ({ ...prev, projects: value })),
      );
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  const formatNumber = (value: number) =>
    value.toLocaleString(language === "vi" ? "vi-VN" : "en-US");

  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid grid-cols-1 gap-8 text-center md:grid-cols-2">
          <div>
            <p className="text-4xl font-bold text-primary md:text-5xl">
              {formatNumber(animatedValues.donated)}
            </p>
            <p className="mt-2 text-slate-600">{stats.raisedLabel}</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary md:text-5xl">
              {animatedValues.projects}+
            </p>
            <p className="mt-2 text-slate-600">{stats.projectsCompleted}</p>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-slate-800">
            {stats.currentHeading}
          </h3>
          <p className="mb-4 text-lg italic text-slate-700">
            {stats.currentDescription}
          </p>
          <a
            href="https://thiennguyen.app/donate-target/1958011484311146496"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90">
              {stats.cta}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
