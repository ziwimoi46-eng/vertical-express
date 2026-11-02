import { useEffect } from 'react';
import { Reveal } from '@/components/reveal';
import { TeamSection } from '@/components/team-and-gallery';

export function TeamPage() {
  useEffect(() => {
    document.title = 'Directors & Team | Vertical Express Elevators';
  }, []);

  return (
    <>
      <section className="bg-[#eef1f2] pt-[78px]">
        <div className="page-wrap py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Directors &amp; Team</p>
            <h1 className="display-font mt-5 max-w-2xl text-6xl font-semibold leading-[.92] tracking-[-.06em] text-[#202b34] sm:text-8xl">
              OUR<br />
              <span className="text-[#f4511e]">TEAM.</span>
            </h1>
          </Reveal>
        </div>
      </section>
      <TeamSection />
    </>
  );
}
