import { useParams } from "react-router-dom";
import {
  Chips,
  FeatureGrid,
  PageHero,
  PageState,
  Phones,
  PrimaryButton,
  Section,
  SectionTitle,
  Stack,
  Steps,
  WorkGrid,
} from "@/components/ui";
import { useAsync } from "@/hooks/useAsync";
import { useSeo } from "@/hooks/useSeo";
import { getProcessSteps, getProjectsBySlugs, getService } from "@/lib/api";
import NotFound from "@/pages/NotFound";

async function loadService(slug) {
  const service = await getService(slug);
  if (!service) return { service: null };
  const related = service.related?.length ? service.related : service.seen_in.slice(0, 3);
  const [projects, phones, steps] = await Promise.all([
    getProjectsBySlugs(related),
    getProjectsBySlugs(service.hero_phones ?? []),
    service.steps?.length ? service.steps : getProcessSteps(),
  ]);
  return { service, projects, phones, steps };
}

// A service. Rows with their own detail content (included, steps, built_with,
// faq) show it; the rest fall back to their bullet points and the shared process.
export default function Service() {
  const { slug } = useParams();
  const state = useAsync(() => loadService(slug), [slug]);
  const { service, projects, phones, steps } = state.data ?? {};
  useSeo({ title: service?.name, description: service?.lead || service?.summary });

  if (state.error || state.loading) return <PageState state={state} />;
  if (!service) return <NotFound />;

  const ownSteps = Boolean(service.steps?.length);
  const included = service.included?.length
    ? service.included
    : service.bullets.map((title) => ({ icon: "ri-check-line", title }));
  const aside =
    phones.length === 3 ? (
      <Phones projects={phones} label={`${service.name} built by Continuum`} className="cc_page_phones" />
    ) : projects.length > 0 ? (
      <Stack images={projects.map((p) => ({ src: p.cover }))} />
    ) : null;

  return (
    <>
      <PageHero
        split
        wide={6}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.name }]}
        title={service.title || `${service.name}.`}
        lead={service.lead || service.summary}
        aside={aside}
      >
        <div className="cc_hero_btns">
          <PrimaryButton to="/contact">Start a Project</PrimaryButton>
          <PrimaryButton href="#included" outline icon="ri-arrow-down-line">
            What's Included
          </PrimaryButton>
        </div>
      </PageHero>

      <Section id="included">
        <SectionTitle sub="What's included" title={service.included_title || "What you get"} />
        <FeatureGrid items={included} />
      </Section>

      <Section alt>
        <SectionTitle sub={ownSteps ? "How we build it" : "Our process"} title={service.steps_title || "How we work"} />
        <Steps steps={steps} />
        {service.built_with?.length > 0 && (
          <div className="cc_built_with">
            <span>Built with</span>
            <Chips items={service.built_with} />
          </div>
        )}
      </Section>

      {projects.length > 0 && (
        <Section>
          <SectionTitle
            sub={service.related_label || "Where we've used it"}
            title="Recent work"
            link={{ to: "/work", label: "See All Work" }}
          />
          <WorkGrid projects={projects} />
        </Section>
      )}

      {service.faq?.length > 0 && (
        <Section alt>
          <div className="row cc_split">
            <div className="col-lg-4">
              <span className="cc_approach_label">FAQ</span>
              <h2 className="cc_split_title">{service.faq_title || "Questions"}</h2>
            </div>
            <div className="col-lg-8">
              {service.faq.map((item, i) => (
                <details key={item.question} className="cc_faq" open={i === 0}>
                  <summary>
                    {item.question}
                    <i className="ri-add-line"></i>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
