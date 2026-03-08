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
      <section className="pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
              Let's Talk
            </h1>
            <div className="mt-6 mb-6 h-[3px] w-16 bg-primary" />
            <p className="text-muted-foreground text-base max-w-md">
              Whether you're looking for a product leader, a strategic advisor,
              or just want to connect — I'd love to hear from you.
            </p>
          </FadeIn>

          {sent ? (
            <FadeIn delay={0.1}>
              <div className="mt-10 flex flex-col items-start py-16 space-y-4 border-2 border-foreground p-8">
                <CheckCircle size={32} />
                <h2 className="text-xl font-black uppercase tracking-tight">Message sent</h2>
                <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you shortly.</p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs font-bold tracking-[0.15em] uppercase text-foreground underline underline-offset-4 decoration-2 mt-4"
                >
                  Send another
                </button>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-[0.1em] uppercase text-foreground mb-2">
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
                    className="border-2 border-foreground bg-background text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-[0.1em] uppercase text-foreground mb-2">
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
                    className="border-2 border-foreground bg-background text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-[0.1em] uppercase text-foreground mb-2">
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
                    className="border-2 border-foreground bg-background text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-none border-2 border-foreground bg-foreground text-background font-bold text-xs tracking-[0.15em] uppercase hover:bg-muted-foreground px-8 py-3 h-auto"
                >
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
            <div className="mt-14 pt-8 border-t-2 border-foreground flex flex-wrap gap-6">
              <a
                href="https://www.linkedin.com/in/mariociardulli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://mariociardulli.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe size={14} /> mariociardulli.com
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
