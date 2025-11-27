import pj1 from "@/assets/project-1.jpg";
import pj2 from "@/assets/project-2.jpg";
import pj3 from "@/assets/project-3.jpg";
import pj4 from "@/assets/project-4.jpg";
import pj5 from "@/assets/project-5.jpg";
import pj6 from "@/assets/project-6.jpg";
import pj7 from "@/assets/project-7.jpg";
import pj8 from "@/assets/project-8.jpg";
import pj9 from "@/assets/project-9.jpg";
import { useTranslations } from "@/contexts/language-context";
import { ArrowRight } from "lucide-react";

const projectAssets = [
  {
    image: pj1,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid024XqkqaGw1TxC14vSHiKDsq5PFMfWtSFuaHLrEECHTPamjJAszyZmpKsGrZGw2xkUl",
  },
  {
    image: pj2,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid02EWKwZ778akS7K5NZMAbNTMAXYjaP4JSsUNdQq9Ejom7VkjeUffy5ZihMkFCnt6avl",
  },
  {
    image: pj3,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid02cW7t3SHDxMumPuRk41n1PZT6Wh1qXosRK1XfFFygqGsBtJgN9gJWFhTtT8VZKG2rl",
  },
  {
    image: pj4,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid0YSSnrY6qomanumz5f15ni7WT9cu9pEq27Dr34NRzHK1ErTvxee7CG6NThq9fPmTkl",
  },
  {
    image: pj5,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid0KAWn5jDioHAT8fBGA6oxCfoYxDzyLYqXehEQJKHs6cfPQhwzGGoDdNutSRufvvzEl",
  },
  {
    image: pj6,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid09piuRXctzqpNqEBtjriLFb54igGBQyQej83YwSb9joYnkgBiRZYZAmkXiewT1qKml",
  },
  {
    image: pj7,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid0ECdtSjNuTT3zsZ8PSNJ4HbVcAUuPq1D4PKnrS2pUfRRXAHbXzqJ3yzGSuXAxfET1l",
  },
  {
    image: pj8,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid02vU6NpKr3NPhKTgMRFFoaH1hmEhRcTwSJbrz23HZYGsm3S2jnNjTWdocYbbdEqCk2l",
  },
  {
    image: pj9,
    link: "https://www.facebook.com/nlf.sg/posts/pfbid02hNRn2ZujdWL6r7p3mAcwGB4r39GCbbMpmRCPb91H6jVSxfYpAu7jRLUvuPZ7ah5Gl",
  },
] as const;

const ProjectsSection = () => {
  const { projects } = useTranslations();

  return (
    <section id="projects" className="bg-slate-100 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            {projects.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            {projects.subheading}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectAssets.map((project, index) => {
            const projectCopy = projects.items[index];
            if (!projectCopy) {
              return null;
            }
            return (
              <div
                key={project.link}
                className="transform overflow-hidden rounded-xl bg-background shadow-lg transition-transform hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={projectCopy.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{projectCopy.title}</h3>
                  <p className="mb-4 text-slate-600">{projectCopy.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    {projects.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
