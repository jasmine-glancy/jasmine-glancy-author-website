// Constructed with assistance from Michael Ojogbo
// https://medium.com/@ojogbomichael/same-page-navigation-with-nextjs-bb99cccfda11

'use client';
import { Button } from '@/components/ui/button';
import { MoveUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ToTop() {
  //The approach recommended by Next.js
  const isBrowser = () => typeof window !== 'undefined';
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Button
      aria-label="Scroll to Top"
      className={`scrollToTopButton group fixed h-[4em] w-[4em] ${isVisible ? 'visible' : ''} right-0 bottom-0 z-50 mr-[2em] mb-[2em] flex items-center rounded-full border border-[var(--sidebar-primary-foreground)] bg-[var(--sidebar-primary)] p-[1.5em] text-[var(--sidebar-primary-foreground)] transition-colors duration-200 hover:border-[var(--sidebar-primary)] hover:bg-[var(--sidebar-primary-foreground)] hover:text-[var(--sidebar-primary)]`}
      onClick={scrollToTop}
      style={{ ['--button-icon-color' as string]: 'var(--sidebar-primary-foreground)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.setProperty('--button-icon-color', 'var(--sidebar-primary)');
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty(
          '--button-icon-color',
          'var(--sidebar-primary-foreground)'
        );
      }}
    >
      <MoveUp
        className="h-4 w-4 shrink-0 transition-colors duration-200"
        style={{ color: 'var(--button-icon-color)' }}
      />
    </Button>
  );
}
