import { useTranslations } from "@/contexts/language-context";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { contact } = useTranslations();

  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {contact.title}
            </h2>
            <p className="text-lg text-slate-600">{contact.subtitle}</p>
          </div>

          {/* Contact Information */}
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Email */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {contact.email}
                  </h3>
                  <a
                    href="mailto:nhilefoundation.sg@gmail.com"
                    className="text-primary hover:underline break-all"
                  >
                    nhilefoundation.sg@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {contact.address}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    72 Nại Nam, Hoà Cường Bắc, Hải Châu, Đà Nẵng 50000, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 text-center">
              {contact.mapTitle}
            </h3>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.588331632411!2d108.22863187459937!3d16.034931540356233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219e6a827a5a1%3A0x58bae07542c041c6!2zNzIgTuG6oWkgTmFtLCBIb8OgIEPGsOG7nW5nIELhuq9jLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1764062200982!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="NhiLe Foundation Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;