import artemis from '../../public/artemis.jpg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import NavigationBar from '@/components/nav_bar';
import Image from 'next/image';
import jasmine_jewel_banner from '../../public/jasmine_jewel_banner.jpg';
import Footer from '@/components/footer';
import ToTop from '@/components/to_top_button';

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-[0.25em] flex-col items-center justify-center pt-[0.5em] font-sans sm:pt-[2em]">
        <Image
          src={jasmine_jewel_banner}
          className="image sm:h-[78vh] sm:max-w-6xl 2xl:max-w-[100em]"
          alt="The image features a joyful interaction between a black Labrador Retriever, named Jewel, and a young woman named Jasmine Glancy. They are positioned on a grassy area that is softly blurred in the background, emphasizing their connection. Jewel is leaning in towards Jasmine, playfully licking her cheek. The dog's fur is glossy and well-groomed, showcasing a rich black color. Jasmine has a bright smile, her expression radiating happiness. She has curly dark hair, partially pulled back, and is wearing a colorful tie-dye shirt. The soft sunlight casts a gentle glow, enhancing the warm and cheerful atmosphere of the moment."
          placeholder="blur"
        />
        <main
          id="main-content"
          className="flex w-full flex-[0.25em] flex-col items-center justify-between px-[1em] py-[2em] sm:max-w-6xl sm:items-start 2xl:max-w-[100em]"
        >
          <div className="flex flex-col items-center gap-[1.5em] text-center sm:items-start sm:text-left">
            <h2>Welcome to my Author Website!</h2>
            <Separator />

            <div className="rounded-[1vw] border-[0.3em] border-double bg-[var(--muted)] p-[2em]">
              <p>
                Sufjan kale chips sally rooney phoebe bridgers plaid intermittent fasting authentic
                monstera. Letterboxd neutral milk hotel side hustle, blundstones enneagram booktok
                deschooling truffaut aeropress williamsburg. Wolf cut reading series woke, feral
                kale chips hot honey austin. Messenger bag vape offal aesthetic raclette solarpunk
                heirloom bone broth gr
              </p>
            </div>
            <div className="grid h-fit grid-cols-1 gap-[1em] sm:grid-cols-2 2xl:sm:gap-[10em]">
              <Card className="w-[90vw] sm:w-[67vw] 2xl:w-[60vw]">
                <CardHeader>
                  <CardTitle>Card testing</CardTitle>
                  <CardDescription>
                    I&apos;m baby sohla el-waylly are.na succulents literally claire saffitz.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-[1.5em]">
                  Skateboard third place lynch, sufjan slow-carb supreme wayfarers hipster runoff
                  shoreditch man bun master cleanse affogato try-hard cacio e pepe pour-over.
                  <Link className="secondary-link" href="/dashboard">
                    Secondary Link,
                  </Link>
                  <Link className="accent-link" href="/dashboard">
                    Accent Link,
                  </Link>
                  <Link className="muted-link" href="/dashboard">
                    Muted Link,
                  </Link>
                  <Link href="/dashboard">Normal Link</Link>
                  <div className="grid grid-cols-2 grid-rows-3 gap-[1em] xl:grid-cols-3 xl:grid-rows-2 xl:gap-[0.5em]">
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="default">Default Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="accent">Destructive Button</Button>
                    <Button variant="link">Link Button</Button>
                  </div>
                  <Badge variant="default">Default Badge</Badge>
                  <Badge variant="outline">Outline Badge</Badge>
                  <Badge variant="secondary">Secondary Badge</Badge>
                  <Badge variant="accent">Destructive Badge</Badge>
                </CardContent>
              </Card>
              <Image
                src={artemis}
                className="image bg-[var(--muted)] mask-linear-50 mask-linear-from-70% mask-linear-to-90% object-fill sm:ml-[17.5em] sm:w-[22vw] 2xl:ml-[18em]"
                alt="The image features a gray cat named Artemis, who is lying on a soft, blue blanket. The cat's fur has a blend of gray tones with visible stripes, displaying a smooth texture. Artemis has a slightly tilted head, revealing its large, expressive eyes and a white patch on its chin. The background includes a blurred view of furniture and muted colors, indicating a cozy indoor environment. The composition centers on the cat, highlighting its relaxed posture against the blanket."
                placeholder="blur"
              />
            </div>
          </div>
        </main>
        <ToTop />
        <Footer />
      </div>
    </div>
  );
}
