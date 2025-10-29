import { useTranslations } from "@/contexts/language-context";

const CallToActionSection = () => {
  const { callToAction } = useTranslations();

  return (
    <section id="join-us" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          {callToAction.heading}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-slate-600">
          {callToAction.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <a
            href="https://thiennguyen.app/user/nhilefoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary-dark md:w-auto"
          >
            {callToAction.donate}
          </a>
          <a
            href="https://www.facebook.com/nlf.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-slate-100 px-10 py-4 font-bold text-slate-800 transition-colors hover:bg-slate-200 md:w-auto"
          >
            {callToAction.volunteer}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
