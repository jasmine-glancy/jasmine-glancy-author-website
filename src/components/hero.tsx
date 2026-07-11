'use client';
import { Button } from './ui/button';

type HeroProps = {
  textType?: boolean;
  imageType?: boolean;
  heading?: string;
  authorSubtitle?: string;
  briefIntro?: string;
};

export default function Hero({
  textType,
  imageType,
  heading,
  authorSubtitle,
  briefIntro,
}: HeroProps) {
  //The approach recommended by Next.js
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToAbout() {
    if (!isBrowser()) return;

    // Finds the main content container
    const content = document.getElementById('main-content');

    if (content) {
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Ensures screen readers stay in sync
      content.focus({ preventScroll: true });
    }
  }

  function scrollToJewel() {
    if (!isBrowser()) return;

    // Finds the main content container
    const content = document.getElementById('jewel-and-eenp');

    if (content) {
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Ensures screen readers stay in sync
      content.focus({ preventScroll: true });
    }
  }
  return (
    <>
      {textType ? (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Sufjan kale chips sally rooney phoebe bridgers plaid intermittent fasting authentic
                monstera. Letterboxd neutral milk hotel side hustle, blundstones enneagram booktok
                deschooling truffaut aeropress williamsburg. Wolf cut reading series woke, feral
                kale chips hot honey austin. Messenger bag vape offal aesthetic raclette solarpunk
                heirloom bone broth gr
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {imageType ? (
        <div
          alt-text="A young woman pets her black dog lying on the grass. The woman wears a colorful tie-dye t-shirt and camouflage leggings."
          className="image hero min-h-[70vh] w-full bg-[url('https://i.imgur.com/IthfEpv.jpeg')] bg-contain bg-cover bg-top bg-no-repeat lg:min-h-[108vh] xl:min-h-[80vh]"
        >
          <div className="hero-overlay bg-black/50"></div>

          <div className="hero-content text-neutral-content px-[5em] text-center">
            <div className="max-w-xl xl:max-w-2xl">
              <h1 className="font-heading text-4xl font-bold md:text-5xl xl:text-6xl">{heading}</h1>
              <h5>{authorSubtitle}</h5>
              <p className="mt-[1em] font-sans text-base md:mt-[2em] md:text-lg xl:text-xl">
                {briefIntro}
              </p>
              <div className="align-center mt-[1em] grid grid-cols-1 place-items-center gap-[1em] md:grid-cols-3 md:gap-[4em]">
                <Button
                  variant="secondary"
                  aria-label="Learn about me"
                  onClick={scrollToAbout}
                  className="text-md md:mt-[2em]"
                  size="lg"
                >
                  Learn More About Me
                </Button>
                <Button
                  variant="accent"
                  aria-label="Did you say service dog?"
                  onClick={scrollToJewel}
                  className="text-md ml-[1em] md:mt-[2em]"
                  size="lg"
                >
                  Did You Say &ldquo;Service Dog&rdquo;?
                </Button>
                <Button aria-label="What inspires me" className="text-md md:mt-[2em]" size="lg">
                  What Inspires Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
