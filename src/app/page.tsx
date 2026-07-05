import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Button variant="outline">Button</Button>
          <Badge variant="default">Default Badge</Badge>
          <Badge variant="outline">Outline Badge</Badge>
          <Badge variant="secondary">Secondary Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>

          <Separator />

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
            <CardAction>CLICK ME!</CardAction>
          </Card>
        </div>
      </main>
    </div>
  );
}
