'use client';

import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="flex w-full flex-wrap items-center justify-between gap-4 bg-linear-to-r/srgb from-[var(--saturated_accent)] via-[var(--saturated_primary)] to-[var(--saturated_secondary)] px-6 py-4 backdrop-blur-sm"
    >
      <Navbar.Brand href="/" className="text-foreground text-2xl font-bold">
        <h2>Jasmine Glancy</h2>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />

      <div className="flex flex-wrap items-center gap-4">
        <a href="#home" className="text-foreground/80 hover:text-foreground text-sm font-medium">
          Home
        </a>
        <a href="#about" className="text-foreground/80 hover:text-foreground text-sm font-medium">
          About
        </a>
        <a href="#contact" className="text-foreground/80 hover:text-foreground text-sm font-medium">
          Contact
        </a>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
