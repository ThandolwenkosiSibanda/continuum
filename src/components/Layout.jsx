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

  // Every link click starts at the top (or at the section its #hash names),
  // even when only ?industry= changes. Navigations that ask to keep their place
  // (the Work page's filter buttons) don't move.
  useEffect(() => {
    setMenuOpen(false);
    if (location.state?.keepScroll) return;
    // Forget the last page's position: ScrollTrigger would put it back when it
    // re-measures, and "manual" stops the browser restoring it on Back.
    ScrollTrigger.clearScrollMemory("manual");
    // "instant": Bootstrap makes the page scroll smoothly, which would slide
    // the whole way up from the bottom of the last page.
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.key]);

  // Scroll animations measure where things are; re-measure when content loads
  // or images change the page height.
  useEffect(() => {
    let frame;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // refresh() can put back a scroll position from before the last page
        // change; keep wherever the page actually is.
        const top = window.scrollY;
        ScrollTrigger.refresh();
        window.scrollTo({ top, behavior: "instant" });
      });
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
