import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSiteIndex } from "@/components/Layout";
import { EMAIL, SITE_NAME, SOCIALS, WHATSAPP_URL } from "@/lib/site";

const ITEM = "accordion-item border-0 rounded-0 bg-transparent";
const BUTTON = "accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold";

// One expandable group (Work, Services, Industries); only one is open at a time.
function Group({ title, open, onToggle, links }) {
  return (
    <div className={ITEM}>
      <button className={`${BUTTON}${open ? "" : " collapsed"}`} type="button" aria-expanded={open} onClick={onToggle}>
        {title}
      </button>
      <div className={`accordion-collapse collapse${open ? " show" : ""}`}>
        <div className="accordion-body">
          <div className="accordion">
            {links.map(({ to, label }) => (
              <div key={to} className={ITEM}>
                <Link to={to} className="accordion-link fw-semibold text-decoration-none">
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileMenu({ open, onClose }) {
  const { projects, services, industries } = useSiteIndex();
  const [group, setGroup] = useState(null);
  const toggle = (name) => () => setGroup((current) => (current === name ? null : name));

  // The template styles the open menu (and locks the page) from body.active.
  useEffect(() => {
    document.body.classList.toggle("active", open);
    return () => document.body.classList.remove("active");
  }, [open]);

  const usedIndustries = industries.filter((i) => projects.some((p) => p.industry === i.name));

  return (
    <div className={`menu-popup-area position-fixed start-0 end-0 top-0 bottom-0${open ? " active" : ""}`}>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="meanu-popup-nav">
                  <div className="accordion">
                    <Group
                      title="Work"
                      open={group === "work"}
                      onToggle={toggle("work")}
                      links={projects.map((p) => ({ to: `/work/${p.slug}`, label: p.name }))}
                    />
                    <Group
                      title="Services"
                      open={group === "services"}
                      onToggle={toggle("services")}
                      links={services.map((s) => ({ to: `/services/${s.slug}`, label: s.name }))}
                    />
                    <Group
                      title="Industries"
                      open={group === "industries"}
                      onToggle={toggle("industries")}
                      links={usedIndustries.map((i) => ({ to: `/work?industry=${encodeURIComponent(i.name)}`, label: i.name }))}
                    />
                    <div className={ITEM}>
                      <Link className={`${BUTTON} without-icon`} to="/about">
                        About
                      </Link>
                    </div>
                    <div className={ITEM}>
                      <a className={`${BUTTON} without-icon`} href={WHATSAPP_URL} target="_blank" rel="noopener">
                        WhatsApp
                      </a>
                    </div>
                    <div className={ITEM}>
                      <Link className={`${BUTTON} without-icon`} to="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="menu-contact-info">
                  <div className="location">
                    <h5>{SITE_NAME}</h5>
                  </div>
                  <h4>{EMAIL}</h4>
                  <div className="socials">
                    <a href={SOCIALS.facebook} className="d-inline-block" target="_blank" rel="noopener" aria-label="Facebook">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href={SOCIALS.linkedin} className="d-inline-block" target="_blank" rel="noopener" aria-label="LinkedIn">
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="menu-popup-close-btn position-absolute rounded-circle text-center border-0 p-0"
        onClick={onClose}
        aria-label="Close menu"
      >
        <i className="ri-close-line"></i>
      </button>
    </div>
  );
}
