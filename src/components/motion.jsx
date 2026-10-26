import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A section heading whose lines tip up into place as it scrolls into view
// (the template's .text-animation).
export function AnimatedHeading({ as: Tag = "h2", className = "", children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (reducedMotion()) return;
    const el = ref.current;
    gsap.set(el, { perspective: 400 });
    // autoSplit re-splits the lines once the web font loads or the width changes.
    const split = SplitText.create(el, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        }),
    });
    return () => split.revert();
  }, []);

  return (
    <Tag ref={ref} className={`text-animation ${className}`.trim()}>
      {children}
    </Tag>
  );
}

// Fades and slides its children up, one after another, the first time it
// scrolls into view (the template's data-cues="slideInUp").
export function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reducedMotion()) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`cc_reveal${shown ? " is-shown" : ""} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
