import { useState } from "react";
import { Linkedin, Globe, Loader2, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });

      if (error) throw error;

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Let's build something great.
            </h1>
            <p className="text-muted-foreground mt-3 text-lg">
              Whether you're looking for a product leader, a strategic advisor,
              or just want to connect — I'd love to hear from you.
            </p>
          </FadeIn>

          {sent ? (
            <FadeIn delay={0.1}>
              <div className="mt-10 flex flex-col items-center justify-center text-center py-16 space-y-4">
                <CheckCircle className="text-primary" size={48} />
                <h2 className="text-xl font-semibold text-foreground">Message sent!</h2>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you shortly.</p>
                <Button variant="outline" onClick={() => setSent(false)} className="mt-4">
                  Send another message
                </Button>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    maxLength={100}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    required
                    maxLength={255}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What would you like to discuss?"
                    required
                    maxLength={5000}
                    disabled={loading}
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </FadeIn>
          )}

          <FadeIn delay={0.2}>
            <div className="mt-14 pt-10 border-t divider flex flex-wrap gap-6">
              <a
                href="https://www.linkedin.com/in/mariociardulli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://mariociardulli.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe size={16} /> mariociardulli.com
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
