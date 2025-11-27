import heroImage from "@/assets/hero-children.jpg";
import { useTranslations } from "@/contexts/language-context";

const HeroSection = () => {
  const { hero } = useTranslations();

  const scrollToAction = () => {
    const element = document.getElementById("join-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center bg-background text-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="container relative mx-auto px-6">
        <h2 className="charity-text-gradient mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
          {hero.title}
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-600 md:text-xl">
          {hero.subtitle}
        </p>
        <button
          onClick={scrollToAction}
          className="transform rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary-dark"
        >
          {hero.cta}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
