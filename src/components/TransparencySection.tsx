import { Shield } from "lucide-react";

import { useTranslations } from "@/contexts/language-context";

const TransparencySection = () => {
  const { transparency } = useTranslations();

  return (
    <section id="transparency" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            {transparency.heading}
          </h2>
          <p className="mx-auto max-w-3xl text-slate-600">
            {transparency.description}
          </p>
        </div>
        <div className="mx-auto max-w-2xl rounded-2xl border-2 border-primary bg-accent p-8 text-center shadow-lg">
          <div className="mb-4 flex justify-center">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-bold">{transparency.badgeTitle}</h3>
          <p className="mb-6 text-slate-600">
            {transparency.badgeDescription}
          </p>
          <a
            href="https://thiennguyen.app/user/nhilefoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            {transparency.badgeCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
