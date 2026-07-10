'use client';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import ToContent from './skip_to_content_button';

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="flex w-full flex-wrap items-center justify-between gap-[1em] bg-linear-to-r/srgb from-[var(--saturated-accent)] via-[var(--saturated-primary)] to-[var(--saturated-secondary)] px-[1.5em] py-[1em] backdrop-blur-sm"
    >
      <Navbar.Brand href="/" className="text-foreground sm:text-2xl sm:font-bold">
        <h2>Jasmine Glancy</h2>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />

      <ToContent />
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="#home"
          className="text-foreground/80 hover:text-foreground sm:text-xl sm:font-medium"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-foreground/80 hover:text-foreground sm:text-xl sm:font-medium"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-foreground/80 hover:text-foreground sm:text-xl sm:font-medium"
        >
          Contact
        </Link>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
