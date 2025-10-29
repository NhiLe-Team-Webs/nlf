import { useTranslations } from "@/contexts/language-context";

const Footer = () => {
  const { footer } = useTranslations();

  return (
    <footer className="bg-slate-800 py-16 text-slate-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">NhiLe Foundation</h2>
        <p className="mb-8">{footer.tagline}</p>
        <p className="text-sm text-slate-500">{footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
