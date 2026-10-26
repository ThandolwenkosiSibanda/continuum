import { useSearchParams } from "react-router-dom";
import { useSiteIndex } from "@/components/Layout";
import { Loading, PageHero, Stack, WorkCard } from "@/components/ui";
import { useSeo } from "@/hooks/useSeo";

// The covers stacked in the hero: centre, left, right.
const HERO_STACK = ["auctionflow", "proqit", "ntafa"];

export default function Works() {
  useSeo({ title: "Work", description: "Apps we've designed and built, each one shaped around how that business actually works." });
  const { projects, industries } = useSiteIndex();
  // The industry filter lives in the address (/work?industry=Retail), so the
  // menus can link straight to it.
  const [params, setParams] = useSearchParams();
  const filter = params.get("industry") ?? "All";
  const setFilter = (name) => setParams(name === "All" ? {} : { industry: name }, { replace: true, preventScrollReset: true });

  const filters = ["All", ...industries.filter((i) => projects.some((p) => p.industry === i.name)).map((i) => i.name)];
  const stack = HERO_STACK.map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({ src: p.cover }));

  return (
    <>
      <PageHero
        crumbs={[{ label: "Work" }]}
        title="Our most recent work."
        lead="Auction platforms, building supplies, a block yard, pharmacies, rentals, a hardware store and league football, each one shaped around how that business actually works."
        aside={stack.length > 0 && <Stack images={stack} />}
      />
      <div className="cc_section">
        <div className="container-fluid cc_col">
          {projects.length === 0 ? (
            <Loading />
          ) : (
            <>
              <div className="cc_filter" role="group" aria-label="Filter by industry">
                {filters.map((name) => (
                  <button
                    key={name}
                    type="button"
                    className={`cc_filter_btn${filter === name ? " is-active" : ""}`}
                    aria-pressed={filter === name}
                    onClick={() => setFilter(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div className="row cc_grid_gap cc_work_grid">
                {projects.map((p) => (
                  <div
                    key={p.slug}
                    className={`col-lg-4 col-md-6 cc_work_item${filter === "All" || p.industry === filter ? "" : " is-hidden"}`}
                  >
                    <WorkCard project={p} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
