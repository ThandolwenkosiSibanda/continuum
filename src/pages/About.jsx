import { useSiteIndex } from "@/components/Layout";
import { Async, FeatureGrid, PageHero, Section, SectionTitle, Steps, WorkGrid } from "@/components/ui";
import { useAsync } from "@/hooks/useAsync";
import { useSeo } from "@/hooks/useSeo";
import { getProcessSteps } from "@/lib/api";

const TILES = [
  { icon: "ri-apps-2-line", title: "Custom apps", text: "designed and built" },
  { icon: "ri-compass-3-line", title: "Many industries", text: "auctions to football" },
  { icon: "ri-device-line", title: "Android, iPhone", text: "and the web" },
  { icon: "ri-customer-service-2-line", title: "After launch", text: "we stay on" },
];

const BELIEFS = [
  {
    icon: "ri-compass-3-line",
    title: "Built around how you work",
    text: "We don't force your business into a shop template. The software follows your business model, your customers and your staff.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Your brand, your system",
    text: "Your name and logo on the app, your listing in the app stores, and a system that belongs to you, with no per-seat fees.",
  },
  {
    icon: "ri-map-pin-line",
    title: "Built for local realities",
    text: "Mobile money, WhatsApp-first customers, local languages and delivery zones that grow town by town.",
  },
];

export default function About() {
  useSeo({
    title: "About",
    description:
      "Continuum designs and builds custom web and mobile apps around how each business actually works, then stays on to grow them after launch.",
  });
  const { projects } = useSiteIndex();
  const steps = useAsync(getProcessSteps);

  return (
    <>
      <PageHero
        crumbs={[{ label: "About" }]}
        title="We build the software businesses run on."
        lead="Continuum designs and builds custom web and mobile apps around how each business actually works, then stays on to grow them after launch."
        aside={
          <div className="cc_tiles">
            {TILES.map((tile) => (
              <div key={tile.title} className="cc_tile">
                <i className={tile.icon}></i>
                <strong>{tile.title}</strong>
                <small>{tile.text}</small>
              </div>
            ))}
          </div>
        }
      />
      <Section>
        <div className="row cc_split">
          <div className="col-lg-5">
            <h2 className="cc_split_title">Our success is rooted in yours.</h2>
          </div>
          <div className="col-lg-7">
            <p className="cc_split_text">
              That's why we're fully committed to helping your project succeed, delivering custom software with care,
              precision and purpose. Our goal is lasting partnerships, where clients trust us not just once but again and
              again, and we grow together with every project.
            </p>
            <p className="cc_split_text">
              We've built auction platforms, building-materials ordering, a block-yard system, medicine price comparison, a
              rentals app, a hardware store's point of sale and a football league app. Each one started the same way: with
              how that business really works.
            </p>
          </div>
        </div>
      </Section>
      <Section alt>
        <SectionTitle sub="What we believe" title="How we approach every build" />
        <FeatureGrid items={BELIEFS} />
      </Section>
      <Section>
        <SectionTitle sub="Our process" title="From first call to launch and beyond" />
        <Async state={steps}>{(list) => <Steps steps={list} />}</Async>
      </Section>
      <Section alt>
        <SectionTitle sub="Our work" title="Recent apps" link={{ to: "/work", label: "See All Work" }} />
        <WorkGrid projects={projects.slice(0, 3)} />
      </Section>
    </>
  );
}
