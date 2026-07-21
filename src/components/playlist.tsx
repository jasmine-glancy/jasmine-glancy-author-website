import { Button } from './ui/button';
import { Play } from 'lucide-react';
import bad_luck_charm from '../../public/bad_luck_charm.png';
import shrunken_head from '../../public/shrunken_head.png';
import great_time_to_be_human from '../../public/great_time_to_be_human.png';
import Image from 'next/image';

// TODO: Iterate this list

export default function Playlist() {
  return (
    <ul className="list rounded-box border-[0.2em] border-solid bg-[var(--muted)] shadow-md md:ml-[5em]">
      <li className="font-heading p-4 pb-2 text-center text-lg tracking-wide opacity-60">
        Top Songs 2026
      </li>

      <li className="list-row">
        <div className="text-4xl font-thin tabular-nums opacity-30">01</div>
        <div>
          <Image
            className="rounded-box size-10"
            alt="Album art for Bad Luck Charm by Sythe, showing a young man sitting against a graffiti-covered wall with a broken heart graphic on his shirt."
            src={bad_luck_charm}
          />
        </div>
        <div className="list-col-grow">
          <div>Bad Luck Charm</div>
          <div className="text-xs font-semibold uppercase opacity-60">SYTHE</div>
        </div>
        <Button variant="ghost">
          <Play color="var(--secondary)" strokeWidth={0.75} />
        </Button>
      </li>

      <li className="list-row">
        <div className="text-4xl font-thin tabular-nums opacity-30">02</div>
        <div>
          <Image
            className="rounded-box size-10"
            alt="Album art for Shrunken Head featuring a large yellow flower, a spiral pattern, and a vintage crowd photo against a pink background."
            src={shrunken_head}
          />
        </div>
        <div className="list-col-grow">
          <div>Shrunken Head</div>
          <div className="text-xs font-semibold uppercase opacity-60">House & Home</div>
        </div>

        <Button variant="ghost">
          <Play color="var(--secondary)" strokeWidth={0.75} />
        </Button>
      </li>

      <li className="list-row">
        <div className="text-4xl font-thin tabular-nums opacity-40">03</div>
        <div>
          <Image
            className="rounded-box size-10"
            alt="Surreal album cover for Great Time To Be Human, featuring a yellow humanoid figure with a flower head walking through a city under a large rainbow."
            src={great_time_to_be_human}
          />
        </div>
        <div className="list-col-grow">
          <div>Great Time To Be Human</div>
          <div className="text-xs font-semibold uppercase opacity-60">Jagwar Twin</div>
        </div>

        <Button variant="ghost">
          <Play color="var(--secondary)" strokeWidth={0.75} />
        </Button>
      </li>
    </ul>
  );
}
