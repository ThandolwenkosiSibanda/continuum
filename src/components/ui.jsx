import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedHeading, Reveal } from "@/components/motion";
import { asset } from "@/lib/assets";

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Industries that have projects, each with its project names ("Proqit, Winno Brix").
export function workByIndustry(industries, projects) {
  return industries
    .map((industry) => ({
      industry,
      names: projects
        .filter((p) => p.industry === industry.name)
        .map((p) => p.name)
        .join(", "),
    }))
    .filter(({ names }) => names);
}

const pad = (n) => String(n).padStart(2, "0");

// Text with [words](/path) links, as stored in posts.
export function RichText({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!link) return <Fragment key={i}>{part}</Fragment>;
    const [, label, href] = link;
    return href.startsWith("/") ? (
      <Link key={i} to={href}>
        {label}
      </Link>
    ) : (
      <a key={i} href={href} target="_blank" rel="noopener">
        {label}
      </a>
    );
  });
}

// ─── Buttons ──────────────────────────────────────────────────────────────────

// The template's pill button. `to` is a site page, `href` anything else (#hash, mailto).
export function PrimaryButton({ to, href, outline = false, icon = "ri-arrow-right-long-line", children }) {
  const className = `btn primary_btn${outline ? " with_border" : ""}`;
  const inner = (
    <span className="d-inline-block position-relative">
      {children} <i className={icon}></i>
    </span>
  );
  return to ? (
    <Link to={to} className={className}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={className}>
      {inner}
    </a>
  );
}

// ─── Page structure ───────────────────────────────────────────────────────────

// crumbs: [{ label, to }], the last one being the current page (no `to`).
export function Breadcrumb({ crumbs }) {
  return (
    <nav className="cc_breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {crumbs.map(({ label, to }) => (
        <Fragment key={label}>
          {" "}
          <i className="ri-arrow-right-s-line"></i> {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}

// The dark band at the top of every inner page. `aside` fills the right-hand
// column; `split` is the layout used by detail pages (buttons, phones, covers).
export function PageHero({ crumbs, title, lead, aside, split = false, wide = 7, children }) {
  return (
    <div className={`cc_page_hero${split ? " cc_page_hero_split" : ""}`}>
      <div className="container-fluid cc_col">
        <div className={`row align-items-center${split ? "" : " cc_page_hero_row"}`}>
          <div className={aside ? `col-lg-${wide}` : "col-lg-9"}>
            <Breadcrumb crumbs={crumbs} />
            <h1>{title}</h1>
            {lead && <p className="cc_page_lead">{lead}</p>}
            {children}
          </div>
          {aside && <div className={`col-lg-${12 - wide}`}>{aside}</div>}
        </div>
      </div>
    </div>
  );
}

// Small label, heading, and an optional "see all" link on the right.
export function SectionTitle({ sub, title, animated = false, link }) {
  const Heading = animated ? AnimatedHeading : "h2";
  return (
    <div className="digital-agency-section-title">
      <span className="sub-title position-relative d-block"> {sub} </span>
      <div className="row align-items-end">
        <div className="col-lg-8 col-md-8">
          <Heading>{title}</Heading>
        </div>
        {link && (
          <div className="col-lg-4 col-md-4 text-md-end">
            <Link to={link.to} className="default-btn style-two">
              {link.label} <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export function Section({ alt = false, dark = false, id, children }) {
  return (
    <div className={`cc_section${alt ? " cc_section_alt" : ""}${dark ? " cc_section_dark" : ""}`} id={id}>
      <div className="container-fluid cc_col">{children}</div>
    </div>
  );
}

// ─── Cards and lists ──────────────────────────────────────────────────────────

export function WorkCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="cc_work_card">
      <span className="cc_work_image">
        <img src={asset(project.cover)} alt={`${project.name}: ${project.tagline.toLowerCase()}`} loading="lazy" />
      </span>
      <span className="cc_work_meta">
        <span className="cc_insight_tag">{project.industry}</span>
      </span>
      <h3>{project.name}</h3>
      <p>{project.tagline}</p>
    </Link>
  );
}

export function WorkGrid({ projects }) {
  return (
    <div className="row cc_grid_gap">
      {projects.map((p) => (
        <div key={p.slug} className="col-lg-4 col-md-6">
          <WorkCard project={p} />
        </div>
      ))}
    </div>
  );
}

export function InsightCard({ post, projectName }) {
  return (
    <Link to={`/insights/${post.slug}`} className="cc_insight">
      <span className="cc_insight_image">
        <img src={asset(post.cover)} alt={projectName ?? ""} loading="lazy" />
      </span>
      <span className="cc_insight_meta">
        <span className="cc_insight_tag">{post.industry}</span>
        {projectName && <span>{projectName}</span>}
      </span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className="cc_insight_more">
        Read more <i className="ri-arrow-right-line"></i>
      </span>
    </Link>
  );
}

// Icon cards: [{ icon, title, text }]. columns: 3 or 4.
export function FeatureGrid({ items, columns = 3 }) {
  return (
    <div className={`cc_feature_grid cc_cols_${columns}`}>
      {items.map((item) => (
        <div key={item.title} className="cc_approach_card">
          <span className="cc_approach_icon">
            <i className={item.icon}></i>
          </span>
          <h3>{item.title}</h3>
          {item.text && <p>{item.text}</p>}
        </div>
      ))}
    </div>
  );
}

// Numbered steps: [{ title, text }].
export function Steps({ steps }) {
  return (
    <div className={`cc_steps${steps.length === 4 ? " cc_steps_4" : ""}`}>
      {steps.map((step, i) => (
        <div key={step.title} className="cc_step">
          <span className="cc_step_num">{pad(i + 1)}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Chips({ items }) {
  return (
    <div className="cc_chips">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

// ─── Hero images ──────────────────────────────────────────────────────────────

// Three phone screenshots, fanned out: [left, centre, right] projects.
export function Phones({ projects, label, className = "" }) {
  const positions = ["cc_phone_left", "cc_phone_center", "cc_phone_right"];
  return (
    <div className={`cc_hero_phones ${className}`.trim()} aria-label={label}>
      {projects.map((p, i) => (
        <figure key={p.slug} className={`cc_phone ${positions[i]}`}>
          <img src={asset(p.phone_screen)} alt={`${p.name} app home screen`} />
          <figcaption>{p.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

// Up to three images stacked like cards: [centre, left, right].
export function Stack({ images }) {
  const positions = ["cc_stack_center", "cc_stack_left", "cc_stack_right"];
  return (
    <div className="cc_stack" aria-hidden="true">
      {images.slice(0, 3).map((img, i) => (
        <img key={img.src} className={`cc_stack_img ${positions[i]}`} src={asset(img.src)} alt="" />
      ))}
    </div>
  );
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

// A numbered list beside a preview panel. Hovering, focusing or tapping an item
// swaps the panel; on touch screens the first tap previews and the second opens.
// items: [{ key, to, title, small, image?, alt? }]; renderDesc(item) fills the panel.
export function Showcase({ items, renderDesc, descClass = "" }) {
  const [active, setActive] = useState(0);
  const hasImages = items.some((item) => item.image);

  return (
    <div className="row cc_showcase">
      <div className="col-lg-6 col-md-12">
        <Reveal as="ol" className="cc_showcase_list">
          {items.map((item, i) => (
            <li key={item.key}>
              <Link
                to={item.to}
                className={`cc_showcase_item${i === active ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={(e) => {
                  if (i !== active) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
              >
                <span className="cc_showcase_num">{pad(i + 1)}</span>
                <span className="cc_showcase_text">
                  <strong>{item.title}</strong>
                  <small>{item.small}</small>
                </span>
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="cc_showcase_panel">
          {hasImages && (
            <div className="cc_showcase_frame">
              {items.map((item, i) => (
                <img
                  key={item.key}
                  className={`cc_showcase_img${i === active ? " is-active" : ""}`}
                  src={asset(item.image)}
                  alt={item.alt ?? item.title}
                />
              ))}
            </div>
          )}
          <div className="cc_showcase_descs" aria-live="polite">
            {items.map((item, i) => (
              <div key={item.key} className={`cc_showcase_desc${descClass}${i === active ? " is-active" : ""}`}>
                {renderDesc(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── States ───────────────────────────────────────────────────────────────────

export function Loading() {
  return (
    <div className="cc_loading" role="status">
      <span className="cc_loading_spinner"></span>
      <span className="visually-hidden">Loading</span>
    </div>
  );
}

export function ErrorState({ onRetry }) {
  return (
    <div className="cc_error_state">
      <p>Something went wrong loading this. Check your connection and try again.</p>
      <button type="button" className="default-btn style-two" onClick={onRetry}>
        Try again <i className="ri-refresh-line"></i>
      </button>
    </div>
  );
}

// A whole page waiting on its data: an empty dark band, so the white header
// stays readable, with the spinner or the error in it.
export function PageState({ state }) {
  return (
    <div className="cc_page_hero">
      <div className="container-fluid cc_col">
        {state.error ? <ErrorState onRetry={state.reload} /> : <Loading />}
      </div>
    </div>
  );
}

// Loading, error or content, for a section that waits on data.
export function Async({ state, children }) {
  if (state.error) return <ErrorState onRetry={state.reload} />;
  if (state.loading || !state.data) return <Loading />;
  return children(state.data);
}
