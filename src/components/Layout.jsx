import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import { useAsync } from "@/hooks/useAsync";
import { getSiteIndex } from "@/lib/api";

const EMPTY_INDEX = { projects: [], services: [], industries: [] };
const SiteIndex = createContext(EMPTY_INDEX);

// Projects, services and industries for the menus, footer and cross-links.
export const useSiteIndex = () => useContext(SiteIndex);

export default function Layout() {
  const { data } = useAsync(getSiteIndex);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // A new page starts at the top, or at the section its #hash names.
  useEffect(() => {
    setMenuOpen(false);
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  // Scroll animations measure where things are; re-measure when content loads
  // or images change the page height.
  useEffect(() => {
    let frame;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    observer.observe(document.body);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <SiteIndex.Provider value={data ?? EMPTY_INDEX}>
      <Header onOpenMenu={() => setMenuOpen((open) => !open)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </SiteIndex.Provider>
  );
}
