import { Link } from "react-router-dom";
import { useSiteIndex } from "@/components/Layout";
import { AnimatedHeading, Reveal } from "@/components/motion";
import { Async, InsightCard, Phones, PrimaryButton, SectionTitle, Showcase } from "@/components/ui";
import { useAsync } from "@/hooks/useAsync";
import { useSeo } from "@/hooks/useSeo";
import { getPosts } from "@/lib/api";

// The three apps fanned out in the hero: left, centre, right.
const HERO_PHONES = ["rentr", "auctionflow", "ntafa"];

const APPROACH = [
  { icon: "ri-wallet-3-line", title: "Mobile money", text: "EcoCash, OneMoney and InnBucks, built into checkout." },
  { icon: "ri-whatsapp-line", title: "WhatsApp", text: "Right where your customers already talk to you." },
  { icon: "ri-translate-2", title: "Local languages", text: "In the languages your customers actually speak." },
  { icon: "ri-smartphone-line", title: "Run it from a phone", text: "An admin side your team can use from anywhere." },
];

function Hero({ projects }) {
  const phones = HERO_PHONES.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);
  return (
    <div className="cc_hero position-relative z-1">
      <div className="container-fluid cc_col">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <Reveal className="cc_hero_content">
              <h1 className="text-uppercase">
                Apps built around <span>your business.</span>
              </h1>
              <p className="cc_hero_lead">
                No two businesses are the same, so the software that runs them shouldn't be. We've built apps for auction
                houses, building suppliers, a block yard and a football league, each one shaped around how that business
                actually works.
              </p>
              <div className="cc_hero_btns">
                <PrimaryButton to="/contact">Start a Project</PrimaryButton>
                <PrimaryButton href="#work" outline icon="ri-arrow-down-line">
                  See Our Work
                </PrimaryButton>
              </div>
              <span className="d-block cc_hero_note fw-medium text-uppercase">
                Your brand, your data, your terms. No long-term lock-in.
              </span>
            </Reveal>
          </div>
          <div className="col-lg-6 col-md-12">
            {phones.length === 3 && <Phones projects={phones} label="Apps built by Continuum" />}
          </div>
        </div>
      </div>
      <div className="cc_marquee">
        <div className="cc_marquee_track">
          {[false, true].map((copy) => (
            <ul key={String(copy)} className="cc_marquee_list" aria-hidden={copy || undefined}>
              {projects.map((p) => (
                <li key={p.slug}>{p.name}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useSeo();
  const { projects, services } = useSiteIndex();
  const posts = useAsync(getPosts);
  const projectName = (slug) => projects.find((p) => p.slug === slug)?.name;

  return (
    <>
      <Hero projects={projects} />

      <div className="case-studies-area pt-150" id="work">
        <div className="container cc_col">
          <SectionTitle sub="Our work" title="Our most recent apps" animated link={{ to: "/work", label: "View All Projects" }} />
          {projects.length > 0 && (
            <Showcase
              items={projects.map((p) => ({
                key: p.slug,
                to: `/work/${p.slug}`,
                title: p.name,
                small: p.tagline,
                image: p.cover,
                alt: `${p.name}: ${p.tagline.toLowerCase()}`,
                project: p,
              }))}
              renderDesc={({ project }) => (
                <>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <Link to={`/work/${project.slug}`} className="cc_showcase_link">
                    View project <i className="ri-arrow-right-line"></i>
                  </Link>
                </>
              )}
            />
          )}
        </div>
      </div>

      <div className="services-area pt-150">
        <div className="container cc_col">
          <SectionTitle
            sub="Services"
            title={
              <>
                What we <span>do</span>
              </>
            }
            animated
            link={{ to: "/services", label: "View All Services" }}
          />
          {services.length > 0 && (
            <Showcase
              descClass=" cc_service"
              items={services.map((s) => ({
                key: s.slug,
                to: `/services/${s.slug}`,
                title: s.name,
                small: s.list_text,
                service: s,
              }))}
              renderDesc={({ service }) => (
                <>
                  <span className="cc_service_icon">
                    <i className={service.icon}></i>
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <ul className="cc_service_list">
                    {service.bullets.map((b) => (
                      <li key={b}>
                        <i className="ri-check-line"></i> {b}
                      </li>
                    ))}
                  </ul>
                  {service.seen_in.length > 0 && (
                    <div className="cc_service_seen">
                      <small>Seen in</small>
                      <div>
                        {service.seen_in.map((slug) => (
                          <span key={slug}>{projectName(slug)}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link to="/contact" className="cc_showcase_link">
                    Discuss your project <i className="ri-arrow-right-line"></i>
                  </Link>
                </>
              )}
            />
          )}
        </div>
      </div>

      <div className="cc_approach ptb-150">
        <div className="container-fluid cc_col">
          <div className="row align-items-center cc_approach_row">
            <div className="col-lg-6 col-md-12">
              <span className="cc_approach_label">How we work</span>
              <h2 className="cc_approach_title">
                We don't start from a template. We start with how your <span>business</span> runs: who your{" "}
                <span>customers</span> are, how they <span>pay</span>, what your <span>staff</span> need on the go. Then we
                design and build the app around it.
              </h2>
              <p className="cc_approach_note">After launch, we stay on to support the app and grow it with your business.</p>
              <Link to="/about" className="btn black_btn">
                <span className="d-inline-block position-relative">
                  Know More About Us <i className="ri-arrow-right-long-line"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12">
              <Reveal className="cc_approach_grid">
                {APPROACH.map((item) => (
                  <div key={item.title} className="cc_approach_card">
                    <span className="cc_approach_icon">
                      <i className={item.icon}></i>
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area pb-150">
        <div className="container cc_col">
          <SectionTitle sub="Insights" title="Latest insights" animated link={{ to: "/insights", label: "View All Insights" }} />
          <Async state={posts}>
            {(list) => (
              <Reveal className="row cc_insights">
                {list.slice(0, 3).map((post) => (
                  <div key={post.slug} className="col-lg-4 col-md-6">
                    <InsightCard post={post} projectName={projectName(post.project_slug)} />
                  </div>
                ))}
              </Reveal>
            )}
          </Async>
        </div>
      </div>
    </>
  );
}
