import { useParams } from "react-router-dom";
import { useSiteIndex } from "@/components/Layout";
import { Breadcrumb, InsightCard, PageState, RichText, Section, SectionTitle } from "@/components/ui";
import { useAsync } from "@/hooks/useAsync";
import { useSeo } from "@/hooks/useSeo";
import { getPost, getPosts } from "@/lib/api";
import { asset } from "@/lib/assets";
import NotFound from "@/pages/NotFound";

function Block({ block }) {
  switch (block.type) {
    case "intro":
      return (
        <p className="cc_article_intro">
          <RichText text={block.text} />
        </p>
      );
    case "h2":
      return <h2>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "images":
      return (
        <div className="cc_article_images">
          {block.images.map((img) => (
            <img key={img.src} src={asset(img.src)} alt={img.alt} loading="lazy" />
          ))}
        </div>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
  }
}

export default function Post() {
  const { slug } = useParams();
  const { projects } = useSiteIndex();
  const state = useAsync(() => Promise.all([getPost(slug), getPosts()]), [slug]);
  const [post, all] = state.data ?? [];
  useSeo({ title: post?.title, description: post?.lead || post?.excerpt });

  if (state.error || state.loading) return <PageState state={state} />;
  if (!post) return <NotFound />;

  const projectName = (s) => projects.find((p) => p.slug === s)?.name;
  const body = post.body?.length ? post.body : [{ type: "intro", text: post.excerpt }];
  const more = all.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <div className="cc_page_hero cc_article_hero">
        <div className="container-fluid cc_col">
          <Breadcrumb crumbs={[{ label: "Insights", to: "/insights" }, { label: post.industry }]} />
          <span className="cc_insight_meta">
            <span className="cc_insight_tag">{post.industry}</span>
            {projectName(post.project_slug) && <span>{projectName(post.project_slug)}</span>}
          </span>
          <h1>{post.title}</h1>
          {post.lead && <p className="cc_page_lead">{post.lead}</p>}
          <div className="cc_author">
            <img src={asset("/assets/images/favicon.png")} alt="" />
            <span>
              <strong>Continuum Creative Agency</strong>
              <small>Insights</small>
            </span>
          </div>
        </div>
      </div>

      <Section>
        <article className="cc_article">
          <img className="cc_article_cover" src={asset(post.cover)} alt={post.cover_alt} />
          <div className="cc_article_body">
            {body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </article>
      </Section>

      {more.length > 0 && (
        <Section alt>
          <SectionTitle sub="Keep reading" title="More insights" link={{ to: "/insights", label: "All Insights" }} />
          <div className="row cc_grid_gap">
            {more.map((p) => (
              <div key={p.slug} className="col-lg-6">
                <InsightCard post={p} projectName={projectName(p.project_slug)} />
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
