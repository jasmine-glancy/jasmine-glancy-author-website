'use client';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="flex w-full flex-wrap items-center justify-between gap-[1em] bg-linear-to-r/srgb from-[var(--saturated_accent)] via-[var(--saturated_primary)] to-[var(--saturated_secondary)] px-[1.5em] py-[1em] backdrop-blur-sm"
    >
      <Navbar.Brand href="/" className="text-foreground text-2xl font-bold">
        <h2>Jasmine Glancy</h2>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />

      <div className="flex flex-wrap items-center gap-4">
        <Link href="#home" className="text-foreground/80 hover:text-foreground font-medium">
          Home
        </Link>
        <Link href="#about" className="text-foreground/80 hover:text-foreground font-medium">
          About
        </Link>
        <Link href="#contact" className="text-foreground/80 hover:text-foreground font-medium">
          Contact
        </Link>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
