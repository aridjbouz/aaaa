import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useGSAP3D — attaches scroll-driven 3D parallax animations.
 * Elements with `data-gsap="fade-up"` animate from below.
 * Elements with `data-gsap="tilt-in"` do a 3D perspective tilt reveal.
 * Elements with `data-gsap="scale-3d"` scale up with Z-depth.
 * Elements with `data-gsap="slide-left"` or `"slide-right"` slide in.
 */
export function useGSAP3D(containerRef) {
  useEffect(() => {
    if (!containerRef?.current) return;
    const ctx = gsap.context(() => {
      // fade-up
      gsap.utils.toArray('[data-gsap="fade-up"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, rotateX: 12, transformOrigin: 'center bottom', perspective: 800 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // tilt-in (dramatic 3D flip reveal)
      gsap.utils.toArray('[data-gsap="tilt-in"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, rotateY: -25, z: -120, transformOrigin: 'left center', perspective: 1200 },
          {
            opacity: 1,
            rotateY: 0,
            z: 0,
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // scale-3d
      gsap.utils.toArray('[data-gsap="scale-3d"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.75, z: -200, transformPerspective: 800 },
          {
            opacity: 1,
            scale: 1,
            z: 0,
            duration: 1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // slide-left
      gsap.utils.toArray('[data-gsap="slide-left"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 80, rotateY: 10, transformPerspective: 900 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // slide-right
      gsap.utils.toArray('[data-gsap="slide-right"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -80, rotateY: -10, transformPerspective: 900 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // stagger-children — animates direct children one by one
      gsap.utils.toArray('[data-gsap="stagger"]').forEach((parent) => {
        gsap.fromTo(
          parent.children,
          { opacity: 0, y: 40, rotateX: 8, transformPerspective: 600 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // v1-frames — animates frames rising up as second section enters
      gsap.utils.toArray('[data-gsap="v1-frames"]').forEach((container) => {
        gsap.fromTo(
          container.children,
          { opacity: 0, y: 120, scale: 0.92, transformOrigin: 'center bottom' },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.18,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // parallax-hero-text — fades out and pins the hero section
      gsap.utils.toArray('[data-gsap="parallax-hero-text"]').forEach((el) => {
        ScrollTrigger.create({
          trigger: '#hero',
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false, // Allows the next section to slide over it
        });

        gsap.to(el, {
          opacity: 0,
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: '+=100%',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}

export { gsap, ScrollTrigger };
