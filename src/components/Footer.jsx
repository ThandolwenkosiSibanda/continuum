import { Link } from "react-router-dom";
import { useSiteIndex } from "@/components/Layout";
import { PrimaryButton } from "@/components/ui";
import { asset } from "@/lib/assets";
import { EMAIL, SOCIALS, WHATSAPP_URL } from "@/lib/site";

export default function Footer() {
  const { projects, services, industries } = useSiteIndex();
  const usedIndustries = industries.filter((i) => projects.some((p) => p.industry === i.name));

  return (
    <footer className="cc_footer">
      <div className="container-fluid cc_col">
        <div className="cc_footer_cta">
          <div>
            <h2>Have an app in mind?</h2>
            <p>Tell us how your business works and we'll show you what we'd build.</p>
          </div>
          <div className="cc_footer_cta_btns">
            <PrimaryButton to="/contact">Contact Us</PrimaryButton>
            <a href={WHATSAPP_URL} className="cc_footer_whatsapp" target="_blank" rel="noopener">
              <i className="ri-whatsapp-line"></i> WhatsApp
            </a>
          </div>
        </div>

        <div className="row cc_footer_main">
          <div className="col-lg-4 col-md-12">
            <Link to="/" className="cc_footer_logo">
              <img src={asset("/assets/images/white-logo.svg")} alt="Continuum Creative Agency" />
            </Link>
            <p className="cc_footer_about">Custom web and mobile apps, built around how your business actually works.</p>
            <a href={`mailto:${EMAIL}`} className="cc_footer_email">
              {EMAIL}
            </a>
            <div className="cc_footer_socials">
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href={SOCIALS.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp">
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-block"></div>
          <div className="col-lg-2 col-md-4 col-6">
            <h3 className="cc_footer_heading">Company</h3>
            <ul className="cc_footer_links">
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <h3 className="cc_footer_heading">Services</h3>
            <ul className="cc_footer_links">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <h3 className="cc_footer_heading">Industries</h3>
            <ul className="cc_footer_links">
              {usedIndustries.map((i) => (
                <li key={i.name}>
                  <Link to={`/work?industry=${encodeURIComponent(i.name)}`}>{i.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cc_footer_bottom">
          <span>&copy; {new Date().getFullYear()} Continuum Creative Agency</span>
          <button type="button" className="cc_totop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top <i className="ri-arrow-up-line"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
