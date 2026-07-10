// Based on the code from Michael Ojogbo
// https://medium.com/@ojogbomichael/same-page-navigation-with-nextjs-bb99cccfda11

'use client';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function ToContent() {
  //The approach recommended by Next.js
  const isBrowser = () => typeof window !== 'undefined';
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Keep the button until the user scrolls down
    if (window.scrollY <= 100) {
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

  function scrollToContent() {
    if (!isBrowser()) return;

    // Finds the main content container
    const content = document.getElementById('main-content');

    if (content) {
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Ensures screen readers stay in sync
      content.focus({ preventScroll: true });
    }
  }

  return (
    <Button
      aria-label="Skip to content"
      className={`scrollButton group w-max-content fixed h-[2em] p-[1.5em] transition-colors duration-200 ${isVisible ? 'visible' : ''} right-0 z-50 mt-[0.5em] mr-[21.5em] flex items-center rounded-sm border border-[var(--sidebar-primary-foreground)] bg-[var(--secondary)] text-[var(--sidebar-primary-foreground)] transition-colors duration-200 hover:border-[var(--muted)] hover:bg-[var(--primary)] hover:text-[var(--muted)]`}
      onClick={scrollToContent}
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
      <h6>Skip to Content</h6>
    </Button>
  );
}
