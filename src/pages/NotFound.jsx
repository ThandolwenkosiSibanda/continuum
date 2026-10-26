import { PageHero, PrimaryButton } from "@/components/ui";
import { useSeo } from "@/hooks/useSeo";

export default function NotFound() {
  useSeo({ title: "Page not found" });
  return (
    <PageHero crumbs={[{ label: "Page not found" }]} title="We couldn't find that page." lead="It may have moved, or the link may be wrong.">
      <div className="cc_hero_btns">
        <PrimaryButton to="/">Go to the home page</PrimaryButton>
        <PrimaryButton to="/work" outline>
          See our work
        </PrimaryButton>
      </div>
    </PageHero>
  );
}
