import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSiteIndex } from "@/components/Layout";
import { workByIndustry } from "@/components/ui";
import { asset } from "@/lib/assets";
import { WHATSAPP_URL } from "@/lib/site";

function DropdownLink({ to, icon, title, text }) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link cc_dd_link">
        <i className={icon}></i>
        <span>
          <strong>{title}</strong>
          <small>{text}</small>
        </span>
      </Link>
    </li>
  );
}

export default function Header({ onOpenMenu }) {
  const { projects, services, industries } = useSiteIndex();
  const { pathname } = useLocation();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = (section) => (pathname.startsWith(section) ? " active" : "");

  return (
    <div className={`navbar-area white-navbar top-0 start-0 end-0 h-auto${sticky ? " is-sticky" : ""}`}>
      <div className="container-fluid cc_col">
        <nav className="navbar p-0 navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img src={asset("/assets/images/white-logo.svg")} alt="Continuum Creative Agency" style={{ width: 250 }} />
          </Link>
          <button className="navbar-toggler" type="button" onClick={onOpenMenu} aria-label="Open menu">
            <span className="burger-menu">
              <span className="top-bar"></span>
              <span className="middle-bar"></span>
              <span className="bottom-bar"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/work" className={`dropdown-toggle nav-link${active("/work")}`}>
                  Work
                </Link>
                <ul className="dropdown-menu cc_dd">
                  {projects.map((p) => (
                    <DropdownLink key={p.slug} to={`/work/${p.slug}`} icon={p.icon} title={p.name} text={p.tagline} />
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/services" className={`dropdown-toggle nav-link${active("/services")}`}>
                  Services
                </Link>
                <ul className="dropdown-menu cc_dd">
                  {services.map((s) => (
                    <DropdownLink key={s.slug} to={`/services/${s.slug}`} icon={s.icon} title={s.name} text={s.nav_text} />
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/work" className="dropdown-toggle nav-link">
                  Industries
                </Link>
                <ul className="dropdown-menu cc_dd">
                  {workByIndustry(industries, projects).map(({ industry, names }) => (
                    <DropdownLink
                      key={industry.name}
                      to={`/work?industry=${encodeURIComponent(industry.name)}`}
                      icon={industry.icon}
                      title={industry.name}
                      text={names}
                    />
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link${active("/about")}`}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a href={WHATSAPP_URL} className="nav-link cc_nav_whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
                  <i className="ri-whatsapp-line"></i>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link cc_nav_cta">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
