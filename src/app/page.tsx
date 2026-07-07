import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import NavigationBar from '@/components/nav_bar';

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-1 flex-col items-center justify-center font-sans">
        <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <Button variant="outline">Button</Button>
            <Badge variant="default">Default Badge</Badge>
            <Badge variant="outline">Outline Badge</Badge>
            <Badge variant="secondary">Secondary Badge</Badge>
            <Badge variant="destructive">Destructive Badge</Badge>

            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>

            <Separator />
            <p>
              Sufjan kale chips sally rooney phoebe bridgers plaid intermittent fasting authentic
              monstera. Letterboxd neutral milk hotel side hustle, blundstones enneagram booktok
              deschooling truffaut aeropress williamsburg. Wolf cut reading series woke, feral kale
              chips hot honey austin. Messenger bag vape offal aesthetic raclette solarpunk heirloom
              bone broth gr
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Card testing</CardTitle>
                <CardDescription>
                  I&apos;m baby sohla el-waylly are.na succulents literally claire saffitz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Skateboard third place lynch, sufjan slow-carb supreme wayfarers hipster runoff
                shoreditch man bun master cleanse affogato try-hard cacio e pepe pour-over.
              </CardContent>
            </Card>

            <Link href="/dashboard">Normal Link</Link>
            <Link className="secondary-link" href="/dashboard">
              Secondary Link
            </Link>
            <Link className="accent-link" href="/dashboard">
              Accent Link
            </Link>
            <Link className="muted-link" href="/dashboard">
              Muted Link
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
