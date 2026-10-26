import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Insights from "@/pages/Insights";
import NotFound from "@/pages/NotFound";
import Post from "@/pages/Post";
import Project from "@/pages/Project";
import Service from "@/pages/Service";
import Services from "@/pages/Services";
import Works from "@/pages/Works";

// Addresses from the old static site, so existing links and bookmarks still land.
const OLD_PAGES = {
  "index.html": "/",
  "works.html": "/work",
  "work-single.html": "/work/proqit",
  "services.html": "/services",
  "service-single.html": "/services/mobile-apps",
  "about.html": "/about",
  "blog.html": "/insights",
  "blog-single.html": "/insights/your-next-buyer-is-on-their-phone",
  "contact.html": "/contact",
};

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Works />} />
        <Route path="work/:slug" element={<Project />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<Post />} />
        <Route path="contact" element={<Contact />} />
        {Object.entries(OLD_PAGES).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
