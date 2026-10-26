import { Link } from "react-router-dom";
import { useSiteIndex } from "@/components/Layout";
import { Async, Chips, Loading, PageHero, PrimaryButton, Section, SectionTitle, Steps } from "@/components/ui";
import { useAsync } from "@/hooks/useAsync";
import { useSeo } from "@/hooks/useSeo";
import { getProcessSteps } from "@/lib/api";

const TOOLS = ["React Native", "Expo", "Supabase", "PostgreSQL", "PowerSync", "WhatsApp Cloud API", "OpenAI", "Google Maps"];

export default function Services() {
  useSeo({
    title: "Services",
    description: "Design, mobile and web development, integrations, and support after launch: everything it takes to build and run your app.",
  });
  const { services } = useSiteIndex();
  const steps = useAsync(getProcessSteps);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        title="Everything it takes to build and run your app."
        lead="From the first sketch to the app store and beyond: design, mobile and web development, integrations, and support after launch."
        aside={
          <div className="cc_tiles cc_tiles_compact">
            {services.map((s) => (
              <div key={s.slug} className="cc_tile">
                <i className={s.icon}></i>
                <strong>{s.name}</strong>
                <small></small>
              </div>
            ))}
            <div className="cc_tile">
              <i className="ri-question-answer-line"></i>
              <strong>Not sure?</strong>
              <small></small>
            </div>
          </div>
        }
      />
      <Section>
        {services.length === 0 ? (
          <Loading />
        ) : (
          <div className="row cc_grid_gap">
            {services.map((s) => (
              <div key={s.slug} className="col-lg-4 col-md-6">
                <Link to={`/services/${s.slug}`} className="cc_service_card">
                  <span className="cc_approach_icon">
                    <i className={s.icon}></i>
                  </span>
                  <h3>{s.name}</h3>
                  <p>{s.summary}</p>
                  <ul>
                    {s.card_bullets.map((b) => (
                      <li key={b}>
                        <i className="ri-check-line"></i> {b}
                      </li>
                    ))}
                  </ul>
                  <span className="cc_insight_more">
                    Learn more <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            ))}
            <div className="col-lg-4 col-md-6">
              <div className="cc_service_card cc_service_card_cta">
                <span className="cc_approach_icon">
                  <i className="ri-question-answer-line"></i>
                </span>
                <h3>Not sure what you need?</h3>
                <p>Tell us how your business works and we'll show you what we'd build.</p>
                <PrimaryButton to="/contact">Talk to us</PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </Section>
      <Section alt>
        <SectionTitle sub="Our process" title="How we work" />
        <Async state={steps}>{(list) => <Steps steps={list} />}</Async>
      </Section>
      <Section>
        <SectionTitle sub="Technology" title="Tools we build with" />
        <Chips items={TOOLS} />
      </Section>
    </>
  );
}
