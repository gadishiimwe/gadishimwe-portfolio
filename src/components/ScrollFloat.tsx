import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: React.ReactNode;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll('.letter');

    gsap.set(letters, { y: 100, opacity: 0 });

    ScrollTrigger.create({
      trigger: container,
      start: scrollStart,
      end: scrollEnd,
      animation: gsap.to(letters, {
        y: 0,
        opacity: 1,
        duration: animationDuration,
        ease: ease,
        stagger: stagger,
      }),
      toggleActions: 'play none none reverse',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  const wrapLetters = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const processChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        if (typeof child.props.children === 'string') {
          return React.cloneElement(child, {
            ...child.props,
            children: wrapLetters(child.props.children),
          });
        } else if (Array.isArray(child.props.children)) {
          return React.cloneElement(child, {
            ...child.props,
            children: React.Children.map(child.props.children, processChildren),
          });
        }
      }
      return child;
    });
  };

  return (
    <div ref={containerRef} className="scroll-float-container">
      {processChildren(children)}
    </div>
  );
};

export default ScrollFloat;
