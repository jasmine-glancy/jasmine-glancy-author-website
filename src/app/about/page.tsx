import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cooking_with_joy_scri from '../../../public/cooking_with_joy_scri.jpg';
import { Separator } from '@/components/ui/separator';
import NavigationBar from '@/components/nav_bar';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import { Smile } from 'lucide-react';
import ToTop from '@/components/to_top_button';

export default function About() {
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-[0.25em] flex-col items-center justify-center font-sans">
        <main className="mr-[2em] flex max-w-4xl flex-[0.25em] flex-col items-center justify-between gap-[1.5em] px-[1em] py-[2em] sm:max-w-7xl sm:items-start xl:w-[75em]">
          <Hero
            imageType={true}
            heading="Hi! I'm Jasmine Glancy."
            authorSubtitle="Business Analyst ● Author ● Night-shifter by Nature"
            briefIntro="Advocate of the human-animal bond, registered veterinary technician, and coworker to a fantastic service dog named Jewel. I write Dark Fantasy while my cat, Artemis, supervises. Find me at the intersection of dark media and baked goods. I run on sugar, salt, and Dr. Pepper."
          />
          <div
            id="main-content"
            className="flex w-full flex-col justify-center text-center sm:max-w-6xl sm:items-start sm:text-left"
          >
            <h2>About Me</h2>
            <Separator />

            <div className="max-w-8xl mt-[1em] rounded-[1vw] border-[0.3em] border-double bg-[var(--muted)] object-fill p-[2em] sm:max-w-7xl">
              <h5 className="pb-[1em] text-center">
                I&apos;m an Ohio native, but I&apos;ve lived in North Carolina for over half my
                life. I started writing stories at age 9. By age 11 I enjoyed coding forum websites
                in my spare time to roleplay online with my friends. In high school, I stayed up way
                too late writing into the night.
              </h5>
              <p className="pt-[1em]">
                It shouldn&apos;t have surprised me when I became a writer, but it did! The first
                story I ever felt something for was the <em>Warriors</em> series by Erin Hunter. I
                still buy and read every book that comes out. I can thank <em>Warriors</em> and
                Masashi Kishimoto&apos;s <em>Naruto</em> for inspiring me to write collaboratively
                with others! Before my story became a novel, it was a ProBoards forum roleplay
                group. I won&apos;t share any spoilers yet, as the decisions characters make in the
                third book reflect what the Tribes became in the roleplay group&apos;s story. But it
                was a lot of fun to design a website and write stories with my friends.
              </p>
              <p className="pt-[1em]">
                I went to college to become a registered veterinary technician 2015. By 2017, I
                worked at my dream veterinary hospital among the various emergency and specialty
                departments. I loved working overnights in the Intensive Care Unit, and I&apos;ll
                never forget the people I met along my nine years in veterinary medicine.
              </p>
              <p className="pt-[1em]">
                Outside of writing and veterinary medicine, there&apos;s no dopamine rush like
                finding a data discrepancy or solving a complicated problem. Filled progress bars
                drive me. I wish I could go back in time and tell myself how much cooler web
                development would be after 2022! Customization is an amazing thing. My brain likes
                to work and my eyes like to be happy.
              </p>
              <div className="grid grid-cols-2 pt-[1.5em]">
                <h3>Writing Philosophy</h3>
                <h4 className="pb-[1em] text-center">... Input ● Crock-Pot Style ● Plots-er</h4>
              </div>
              <p className="pt-[1em]">
                I&apos;m fortunate to have multiple sources of inspiration. I watch. I listen. I
                think. When inspiration strikes, I&apos;m very productive! I appreciate thinking
                about complicated problems and spending time with the gray characters in my head. I
                want to know who my characters are before I feel comfortable writing them.
              </p>
              <p className="inline-flex items-center gap-2 pt-[1em]">
                I will take personality tests for my primary and secondary characters.
                <Smile color="var(--secondary)" strokeWidth={0.2} />
              </p>
              <p className="pt-[1em]">
                When I write, I tend to be verbose. Not everything makes it, but I remember
                everything I cut fondly as a part of the process. I wander between plotting out my
                story and trusting my gut. My outline is important to me, even if I deviate from it.
                Flexibility is important to my creative process, but requirements can spark
                creativity, too! I have writing prompts to thank for some of my foundational
                world-building.
              </p>
            </div>

            <h2 className="mt-[1em]">Current Projects</h2>
            <Separator />
            <div className="mt-[2em] grid grid-cols-3 gap-[1.5em] sm:gap-[4em]">
              <Card className="w-[25vw] sm:w-[30vw] 2xl:w-[17.5vw]">
                <CardHeader>
                  <CardTitle className="mt-[2em] md:mt-[0.15em]">
                    <em>The Fetchers</em>
                  </CardTitle>
                  <CardDescription className="mt-[2em] md:mt-[0.15em]">
                    Fantasy Novella, Prequel to <em>Trial by Blood</em>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid place-items-center object-center text-[1.5em]">
                  <div
                    className="radial-progress text-primary [--size:6rem] [--thickness:0.75rem] [--value:80] md:[--size:12rem] md:[--thickness:1rem]"
                    aria-valuenow={80}
                    role="progressbar"
                  >
                    80%
                  </div>
                  <Badge
                    variant="default"
                    className="mt-[4em] text-sm font-extrabold md:mt-[2.5em]"
                  >
                    5th Edit
                  </Badge>
                </CardContent>
              </Card>
              <Card className="w-[25vw] sm:w-[30vw] 2xl:w-[18vw]">
                <CardHeader>
                  <CardTitle className="mt-[2em] md:mt-[0.15em]">
                    <em>Trial by Blood</em>
                  </CardTitle>
                  <CardDescription className="mt-[2em] md:mt-[0.15em]">
                    Young Adult Dark Fantasy Novel, Book 1
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid place-items-center text-[1.5em]">
                  <div
                    className="radial-progress text-accent text radial-progress [--size:6rem] [--thickness:0.75rem] [--value:95] md:[--size:12rem] md:[--thickness:1rem]"
                    aria-valuenow={95}
                    role="progressbar"
                  >
                    95%
                  </div>
                  <Badge variant="accent" className="mt-[4em] text-sm font-extrabold md:mt-[2.5em]">
                    5th Edit
                  </Badge>
                </CardContent>
              </Card>
              <Card className="w-[25vw] sm:w-[30vw] 2xl:w-[18vw]">
                <CardHeader>
                  <CardTitle className="mt-[2em] md:mt-[0.15em]">
                    <em>Trial by Fire</em>
                  </CardTitle>
                  <CardDescription className="mt-[2em] md:mt-[0.15em]">
                    Young Adult Dark Fantasy Novel, Book 2
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid place-items-center text-[1.5em]">
                  <div
                    className="radial-progress text-secondary text radial-progress [--size:6rem] [--thickness:0.75rem] [--value:10] md:[--size:12rem] md:[--thickness:1rem]"
                    aria-valuenow={10}
                    role="progressbar"
                  >
                    10%
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-[4em] text-sm font-extrabold md:mt-[2.5em]"
                  >
                    Drafting
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-[1em]">Jewel</h2>
            <Separator />
            <div className="grid w-full grid-cols-1 gap-[2.5em] sm:max-w-5xl md:grid-cols-2">
              <Image
                src={cooking_with_joy_scri}
                className="image mt-[1em] ml-[0.15em] bg-[var(--muted)] object-fill sm:mt-[1em] sm:ml-[0.5em] sm:w-[65vw] 2xl:mt-[1.1em] 2xl:ml-[0.15em]"
                alt="The image features a black dog named Jewel, gazing directly at the camera with a gentle expression. Jewel has large, expressive eyes and a short, glossy coat that reflects light. She is holding a square, checkered, book-shaped toy, predominantly red and white in color, which adds contrast to her dark fur. The cloth book features a navy blue label with the text COOKING WITH JOY printed in white. The background is softly blurred, suggesting a home setting with warm, neutral tones."
                placeholder="blur"
              />
              <div
                id="jewel-and-eenp"
                className="mt-[0.1em] rounded-[1vw] border-[0.3em] border-double bg-[var(--muted)] object-fill p-[2em] sm:mt-[1em] sm:mr-[20em] sm:w-[50vw] 2xl:w-[30vw]"
              >
                <h5 className="pb-[1em] text-center">Best girl ● Licker license est. 2018</h5>
                <p className="mt-[1em]">
                  I have a task-trained service dog named Jewel who mitigates my disability. When my
                  heart rate jumps for any reason, my blood pressure doesn&apos;t always catch up.
                  If this happens, Jewel tells ME to sit. She tells me when my medications are due
                  better than any phone alarm has. While my medical team has been crucial in my
                  health, Jewel has gotten my pain down from a 9/10 most days to less than a 6/10
                  most days. She does so, so much more than this! She has enhanced my bravery and
                  taught me things about communication I never would have thought about if I only
                  communicated with people.
                </p>
                <p className="mt-[1em]">
                  A non-profit organization called{' '}
                  <Link className="accent-link" title="EENP.org" href="https://eenp.org/">
                    Eyes Ears Nose & Paws
                  </Link>{' '}
                  worked for 2.5 years with the residents at the North Carolina prisons to help
                  train Jewel. When they placed her with me, they worked with me so I could learn to
                  communicate with her. My experience with dogs in the hospital and occasionally
                  working with military dogs. Nothing could have prepared me for the way she would
                  reframe my thinking. Beyond her medical tasks and helping me with mobility on my
                  bad days, Jewel becomes both focused and excited when she smells my pain. On my
                  worst days, her tail is wagging and she leans against me. On my best days, she
                  prances alongside me as we navigate the world. I&apos;m forever grateful to Jewel,
                  EENP, and Jewel&apos;s trainers for expanding my world. We still see folks she
                  learned with at the ceremonies hosted by the North Carolina Department of Adult
                  Corrections.
                </p>
                <p className="mt-[1em]">
                  Jewel&apos;s favorite game is{' '}
                  <Link
                    className="secondary-link"
                    title="Scent work (American Kennel Club)"
                    href="https://www.akc.org/sports/akc-scent-work/"
                  >
                    scent work
                  </Link>
                  , a sport we casually participate in to celebrate the joy of smells. Jewel looks
                  for Birch oil through an obstacle course; when she finds the source, she will
                  nudge it with her nose to show me. The best part is she gets paid in special
                  treats for doing her favorite thing—smells!
                </p>
                <h3 className="mt-[1em]">Jewel&apos;s Other Favorite Things</h3>
                <div className="mt-[2em] mr-[1em] grid grid-cols-3 gap-[2em] xl:mr-[0.1em]">
                  <Badge variant="accent" className="sm:text-md text-sm">
                    Sweet Potato
                  </Badge>
                  <Badge variant="default" className="sm:text-md ml-[1em] text-sm sm:ml-[1.25em]">
                    Carrots
                  </Badge>
                  <Badge variant="secondary" className="sm:text-md text-sm">
                    Large, Soft Toys
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </main>
        <ToTop />
        <Footer />
      </div>
    </div>
  );
}
