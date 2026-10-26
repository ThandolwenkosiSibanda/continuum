import { Link, useParams } from "react-router-dom";
import { Chips, FeatureGrid, PageHero, PageState, Section, SectionTitle } from "@/components/ui";
import { useAsync } from "@/hooks/useAsync";
import { useSeo } from "@/hooks/useSeo";
import { getNextProject, getProject } from "@/lib/api";
import { asset } from "@/lib/assets";
import NotFound from "@/pages/NotFound";

// A case study. Each section shows only when the project's row fills it in.
export default function Project() {
  const { slug } = useParams();
  const state = useAsync(() => Promise.all([getProject(slug), getNextProject(slug)]), [slug]);
  const [project, next] = state.data ?? [];
  useSeo({ title: project?.name, description: project?.lead });

  if (state.error || state.loading) return <PageState state={state} />;
  if (!project) return <NotFound />;

  const meta = [
    ["Industry", project.industry],
    ["Platform", project.platform],
    ["Services", project.services_label],
  ].filter(([, value]) => value);

  return (
    <>
      <PageHero
        split
        crumbs={[{ label: "Work", to: "/work" }, { label: project.name }]}
        title={project.title || project.name}
        lead={project.lead}
        aside={<img className="cc_case_cover" src={asset(project.cover)} alt={`${project.name} app cover`} />}
      >
        <div className="cc_case_meta">
          {meta.map(([label, value]) => (
            <div key={label}>
              <small>{label}</small>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </PageHero>

      {project.challenge_title && (
        <Section>
          <div className="row cc_split">
            {[
              ["The challenge", project.challenge_title, project.challenge_text],
              ["The solution", project.solution_title, project.solution_text],
            ]
              .filter(([, title]) => title)
              .map(([label, title, text]) => (
                <div key={label} className="col-lg-6">
                  <span className="cc_approach_label">{label}</span>
                  <h2 className="cc_split_title">{title}</h2>
                  <p className="cc_split_text">{text}</p>
                </div>
              ))}
          </div>
        </Section>
      )}

      {project.features.length > 0 && (
        <Section alt>
          <SectionTitle sub="What the app does" title="Features" />
          <FeatureGrid items={project.features} />
        </Section>
      )}

      {project.screens.length > 0 && (
        <Section>
          <SectionTitle sub="Inside the app" title="Screens" />
          <div className="cc_gallery">
            {project.screens.map((screen) => (
              <figure key={screen.image} className="cc_gallery_item">
                <img src={asset(screen.image)} alt={`${project.name}: ${screen.caption}`} loading="lazy" />
                <figcaption>{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      {project.tech_title && (
        <Section dark>
          <div className="row cc_split">
            <div className="col-lg-5">
              <span className="cc_approach_label">How it's built</span>
              <h2 className="cc_split_title">{project.tech_title}</h2>
              <Chips items={project.tech} />
            </div>
            <div className="col-lg-7">
              <ul className="cc_tech_list">
                {project.tech_points.map((point) => (
                  <li key={point}>
                    <i className="ri-check-line"></i> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {project.why.length > 0 && (
        <Section alt>
          <SectionTitle sub="Why custom" title="Why custom beat off-the-shelf" />
          <FeatureGrid items={project.why} columns={4} />
        </Section>
      )}

      {next && next.slug !== project.slug && (
        <Section>
          <Link to={`/work/${next.slug}`} className="cc_next_project">
            <span>
              <small>Next project</small>
              <strong>{next.name}</strong>
              <em>{next.tagline}</em>
            </span>
            <i className="ri-arrow-right-up-line"></i>
          </Link>
        </Section>
      )}
    </>
  );
}
