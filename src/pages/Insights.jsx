import { useSiteIndex } from "@/components/Layout";
import { Async, InsightCard, PageHero, Section, Stack } from "@/components/ui";
import { useAsync } from "@/hooks/useAsync";
import { useSeo } from "@/hooks/useSeo";
import { getPosts } from "@/lib/api";

const HERO_STACK = [
  { src: "/assets/images/projects/proqit/14-sourcing.jpg" },
  { src: "/assets/images/insights/auctionflow-10-mobile-money.jpg" },
  { src: "/assets/images/insights/auctionflow-01-white-label.jpg" },
];

export default function Insights() {
  useSeo({
    title: "Insights",
    description: "What we learn building software for auction houses, builders, pharmacies, landlords and football associations.",
  });
  const { projects } = useSiteIndex();
  const posts = useAsync(getPosts);
  const projectName = (slug) => projects.find((p) => p.slug === slug)?.name;

  return (
    <>
      <PageHero
        crumbs={[{ label: "Insights" }]}
        title="Notes from the apps we build."
        lead="What we learn building software for auction houses, builders, pharmacies, landlords and football associations."
        aside={<Stack images={HERO_STACK} />}
      />
      <Section>
        <Async state={posts}>
          {(list) => (
            <div className="row cc_grid_gap">
              {list.map((post) => (
                <div key={post.slug} className="col-lg-4 col-md-6">
                  <InsightCard post={post} projectName={projectName(post.project_slug)} />
                </div>
              ))}
            </div>
          )}
        </Async>
      </Section>
    </>
  );
}
