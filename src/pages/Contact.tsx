import { useState } from "react";
import { useTranslations } from "@/contexts/language-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { contact } = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You could add a toast notification here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {contact.title}
            </h1>
            <p className="text-lg text-slate-600">{contact.subtitle}</p>
          </div>

          {/* Contact Information Section */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Email */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {contact.email}
                  </h3>
                  <a
                    href="mailto:nedu@nhi.sg"
                    className="text-primary hover:underline"
                  >
                    nedu@nhi.sg
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {contact.address}
                  </h3>
                  <p className="text-slate-600">
                    72 Nại Nam, Hoà Cường Bắc, Hải Châu, Đà Nẵng 50000, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              {contact.mapTitle}
            </h2>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.588331632411!2d108.22863187459937!3d16.034931540356233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219e6a827a5a1%3A0x58bae07542c041c6!2zNzIgTuG6oWkgTmFtLCBIb8OgIEPGsOG7nW5nIELhuq9jLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1764062200982!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="NhiLe Foundation Location Map"
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              {contact.getInTouch}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                  {contact.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder={contact.name}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  {contact.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  {contact.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder={contact.message}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full md:w-auto"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                {contact.send}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;