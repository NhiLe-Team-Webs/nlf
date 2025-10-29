import missionImage from "@/assets/mission-vision.jpg";
import { useTranslations } from "@/contexts/language-context";

const AboutSection = () => {
  const { about } = useTranslations();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 md:flex-row">
        <div className="md:w-1/2">
          <img
            src={missionImage}
            alt={about.title}
            className="h-[450px] w-full rounded-xl object-cover shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{about.title}</h2>
          <p className="mb-4 text-lg text-slate-600">
            <strong>{about.missionTitle}</strong>{" "}
            {about.mission}
          </p>
          <p className="text-lg text-slate-600">
            <strong>{about.visionTitle}</strong>{" "}
            {about.vision}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
