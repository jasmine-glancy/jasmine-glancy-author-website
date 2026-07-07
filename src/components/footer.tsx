import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--popover)] text-[var(--foreground)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-[5rem] py-[4rem] md:grid-cols-3 md:py-[3rem]">
        {/* Brand Section */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-center text-[var(--popover-foreground)]">Jasmine Glancy</h3>
          <p className="mt-4 text-center text-sm text-[var(--muted-foreground)]">
            Author ● Dark Fantasy ● YA/New Adult
          </p>
        </div>

        {/* Navigation Categories */}

        <div className="flex flex-wrap justify-end gap-[15em] pr-[10em] sm:col-span-1 md:col-span-2">
          <div className="pl-[1em]">
            <h5 className="text-[var(--popover-foreground)] uppercase">Navigate</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="accent-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="accent-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[var(--popover-foreground)] uppercase">Resources</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="accent-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="accent-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 border-t border-[var(--border)] px-4 py-6 pb-[6em] text-[var(--muted-foreground)] sm:flex-row">
        <p className="center-content">&copy; {currentYear} Jasmine Glancy. All rights reserved.</p>
      </div>
    </footer>
  );
}
