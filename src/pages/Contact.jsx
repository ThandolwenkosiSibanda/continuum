import { useSiteIndex } from "@/components/Layout";
import { PageHero, Section } from "@/components/ui";
import { useSeo } from "@/hooks/useSeo";
import { EMAIL, WHATSAPP_URL } from "@/lib/site";

export default function Contact() {
  useSeo({ title: "Contact", description: "Tell us how your business works and we'll show you what we'd build." });
  const { services } = useSiteIndex();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        title="Tell us how your business works."
        lead="We'll show you what we'd build. Send a message below, email us, or chat on WhatsApp."
        aside={
          <div className="cc_tiles cc_tiles_contact">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="cc_tile cc_tile_whatsapp">
              <i className="ri-whatsapp-line"></i>
              <strong>Chat on WhatsApp</strong>
              <small>Message us directly</small>
            </a>
            <a href={`mailto:${EMAIL}`} className="cc_tile">
              <i className="ri-mail-line"></i>
              <strong>{EMAIL}</strong>
              <small>Email us anytime</small>
            </a>
          </div>
        }
      />
      <Section>
        <div className="row cc_split">
          <div className="col-lg-7">
            {/* TODO: point this form at a real handler (a Supabase table or edge function, or a form service).
                Until then it opens the visitor's email app addressed to the support address. */}
            <form className="cc_form" action={`mailto:${EMAIL}`} method="post" encType="text/plain">
              <div className="cc_form_row">
                <label>
                  Your name
                  <input type="text" name="name" required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required autoComplete="email" />
                </label>
              </div>
              <div className="cc_form_row">
                <label>
                  Phone or WhatsApp
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>
                <label>
                  Business name
                  <input type="text" name="business" autoComplete="organization" />
                </label>
              </div>
              <label>
                What do you need?
                <select name="service" defaultValue="">
                  <option value="">Choose one</option>
                  {services.map((s) => (
                    <option key={s.slug}>{s.name}</option>
                  ))}
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                Tell us about your business and the app you have in mind
                <textarea name="message" rows={6} required></textarea>
              </label>
              <button type="submit" className="btn primary_btn">
                <span className="d-inline-block position-relative">
                  Send Message <i className="ri-arrow-right-long-line"></i>
                </span>
              </button>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="cc_contact_cards">
              <a href={`mailto:${EMAIL}`} className="cc_contact_card">
                <span className="cc_approach_icon">
                  <i className="ri-mail-line"></i>
                </span>
                <span>
                  <small>Email</small>
                  <strong>{EMAIL}</strong>
                </span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="cc_contact_card">
                <span className="cc_approach_icon cc_icon_whatsapp">
                  <i className="ri-whatsapp-line"></i>
                </span>
                <span>
                  <small>WhatsApp</small>
                  <strong>Chat with us</strong>
                </span>
              </a>
            </div>
            <div className="cc_next_steps">
              <h3>What happens next</h3>
              <ol>
                <li>
                  <strong>We reply</strong> by email or WhatsApp, whichever you prefer.
                </li>
                <li>
                  <strong>We talk</strong> about how your business works and what the app needs to do.
                </li>
                <li>
                  <strong>We propose</strong> what we'd build, how, and what it would take.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
