import { Separator } from '@/components/ui/separator';
import NavigationBar from '@/components/nav_bar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ToTop from '@/components/to_top_button';

export default function About() {
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-[0.25em] flex-col items-center justify-center font-sans">
        <main className="flex w-full flex-[0.25em] flex-col items-center justify-between gap-[1.5em] px-[1em] py-[2em] sm:max-w-6xl sm:items-start">
          <Hero
            imageType={true}
            heading="Hi! I'm Jasmine Glancy."
            authorSubtitle="Business Analyst ● Author ● Night-shifter by Nature"
            briefIntro="Advocate of the human-animal bond, registered veterinary technician, and coworker to a fantastic service dog named Jewel. I write Dark Fantasy while my cat, Artemis, supervises. Find me at the intersection of dark media and baked goods. I run on sugar, salt, and Dr. Pepper."
          />
          <div
            id="main-content"
            className="flex flex-col justify-center text-center sm:items-start sm:text-left"
          >
            <h2>About Me</h2>
            <Separator />

            <div className="rounded-[1vw] border-[0.3em] border-double bg-[var(--muted)] p-[2em]"></div>
          </div>
        </main>
        <ToTop />
        <Footer />
      </div>
    </div>
  );
}
