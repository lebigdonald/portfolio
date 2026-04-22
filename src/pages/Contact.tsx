import {useMemo, useState} from "react";
import {motion} from "framer-motion";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import {profile} from "@/lib/portfolioData";
import SectionHeader from "@/components/portfolio/SectionHeader";
import {toast} from "sonner";

const emailDomainColors = {
  "gmail.com": {bg: "rgba(66,133,244,0.04)", border: "rgba(66,133,244,0.15)"},
  "yahoo.com": {bg: "rgba(111,48,183,0.04)", border: "rgba(111,48,183,0.15)"},
  "hotmail.com": {bg: "rgba(0,120,215,0.04)", border: "rgba(0,120,215,0.15)"},
  "outlook.com": {bg: "rgba(0,120,215,0.04)", border: "rgba(0,120,215,0.15)"}
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const emailDomain = useMemo(() => {
    const parts = form.email.split("@");
    return parts.length === 2 ? parts[1].toLowerCase() : "";
  }, [form.email]);

  const domainStyle = emailDomainColors[emailDomain] || null;

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);
    /*await entities.ContactMessage.create({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message
    });*/

    // Send notification email
    /*await integrations.Core.SendEmail({
      to: profile.email,
      subject: `Portfolio Contact: ${form.subject || "New Message"} from ${form.name}`,
      body: `<h2>New Contact Message</h2>
<p><strong>From:</strong> ${form.name} (${form.email})</p>
<p><strong>Subject:</strong> ${form.subject || "N/A"}</p>
<p><strong>Message:</strong></p>
<p>${form.message}</p>`
    });*/

    setSending(false);
    setSent(true);
    toast.success("Message sent successfully!");
    setForm({name: "", email: "", subject: "", message: ""});
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = field => e => {
    setForm(prev => ({...prev, [field]: e.target.value}));
  };

  return (
    <div>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Get In Touch"
            title="Contact"
            description="Have a project in mind? Let's architect something remarkable together."
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24 lg:pb-40">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className="space-y-6 rounded-xl p-8 lg:p-10 border border-border transition-all duration-700"
              style={{
                backgroundColor: domainStyle?.bg || "transparent",
                borderColor: domainStyle?.border || undefined
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-grotesk tracking-[0.15em] uppercase text-muted-foreground mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    required
                    className="w-full bg-transparent border-b-2 border-border focus:border-accent-orange outline-none py-3 text-base font-inter transition-colors min-h-[48px] placeholder:text-muted-foreground/40"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-grotesk tracking-[0.15em] uppercase text-muted-foreground mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    required
                    className="w-full bg-transparent border-b-2 border-border focus:border-accent-orange outline-none py-3 text-base font-inter transition-colors min-h-[48px] placeholder:text-muted-foreground/40"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-grotesk tracking-[0.15em] uppercase text-muted-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className="w-full bg-transparent border-b-2 border-border focus:border-accent-orange outline-none py-3 text-base font-inter transition-colors min-h-[48px] placeholder:text-muted-foreground/40"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-grotesk tracking-[0.15em] uppercase text-muted-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange("message")}
                  required
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-border focus:border-accent-orange outline-none py-3 text-base font-inter transition-colors resize-none placeholder:text-muted-foreground/40"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-grotesk font-medium hover:opacity-90 transition-all min-h-[48px] disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : sent ? (
                  <>Sent Successfully!</>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </motion.form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
              className="space-y-8"
            >
              <div>
                <h3 className="text-sm font-grotesk tracking-[0.15em] uppercase text-muted-foreground mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-grotesk uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-sm font-inter font-medium">
                        {profile.email}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-grotesk uppercase tracking-wider">
                        Phone
                      </p>
                      <p className="text-sm font-inter font-medium">
                        {profile.phone}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-grotesk uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-sm font-inter font-medium">
                        {profile.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-sm font-grotesk tracking-[0.15em] uppercase text-muted-foreground mb-6">
                  Social
                </h3>
                <div className="flex gap-4">
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-sm font-grotesk tracking-[0.15em] uppercase text-muted-foreground mb-4">
                  Availability
                </h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-grotesk font-medium">
                    Open to remote & international opportunities
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
