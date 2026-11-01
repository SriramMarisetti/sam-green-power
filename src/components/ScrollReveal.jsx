import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Smoothly reveals child elements as they enter the viewport using native IntersectionObserver.
 * 
 * Props:
 * - animation: 'fade-up' (default) | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in'
 * - delay: delay in ms before animation starts (default: 0)
 * - duration: duration in ms of animation (default: 700)
 * - threshold: intersection threshold 0 to 1 (default: 0.12)
 * - rootMargin: rootMargin string (default: '0px 0px -40px 0px')
 * - once: whether to trigger only once (default: true)
 * - className: additional Tailwind classes
 * - as: HTML element to render (default: 'div')
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = true,
  className = '',
  as: Component = 'div',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const domRef = useRef(null);

  useEffect(() => {
    if (isVisible && once) return;
    const node = domRef.current;
    if (!node || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, isVisible]);

  // Initial animation transform styles before reveal
  const getInitialStyle = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-10';
      case 'fade-down':
        return 'opacity-0 -translate-y-10';
      case 'fade-left':
        return 'opacity-0 -translate-x-10';
      case 'fade-right':
        return 'opacity-0 translate-x-10';
      case 'scale-up':
        return 'opacity-0 scale-95 translate-y-6';
      case 'fade-in':
      default:
        return 'opacity-0';
    }
  };

  // Revealed animation transform styles
  const getVisibleStyle = () => {
    switch (animation) {
      case 'scale-up':
        return 'opacity-100 scale-100 translate-y-0';
      case 'fade-up':
      case 'fade-down':
      case 'fade-left':
      case 'fade-right':
      case 'fade-in':
      default:
        return 'opacity-100 translate-x-0 translate-y-0';
    }
  };

  return (
    <Component
      ref={domRef}
      className={`transition-all ease-out transform ${
        isVisible ? getVisibleStyle() : getInitialStyle()
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/**
 * ScrollStagger Component
 * Automatically staggers child elements with progressive delays for grid and card layouts.
 */
export function ScrollStagger({
  children,
  staggerDelay = 120,
  baseDelay = 0,
  animation = 'fade-up',
  duration = 700,
  className = '',
  as: Component = 'div',
  ...rest
}) {
  return (
    <Component className={className} {...rest}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <ScrollReveal
            animation={animation}
            delay={baseDelay + index * staggerDelay}
            duration={duration}
          >
            {child}
          </ScrollReveal>
        );
      })}
    </Component>
  );
}
