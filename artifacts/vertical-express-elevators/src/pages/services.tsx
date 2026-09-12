import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageReveal, Reveal } from '@/components/reveal';
import { imageBase, services } from '@/lib/site-data';

export function ServicesPage() {
  useEffect(() => { document.title = 'Services | Vertical Express Elevators'; }, []);

  return (
    <>
      <section className="bg-[#eef1f2] pt-[78px]">
        <div className="page-wrap py-20 md:py-28"><Reveal><p className="eyebrow">Installation | Maintenance | Services</p><h1 className="display-font mt-5 max-w-2xl text-6xl font-semibold leading-[.92] tracking-[-.06em] text-[#202b34] sm:text-8xl">OUR<br /><span className="text-[#f4511e]">SERVICES.</span></h1></Reveal></div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="page-wrap">
          <Reveal className="flex flex-col justify-between gap-5 border-b border-[#d3dade] pb-7 md:flex-row md:items-end"><div><p className="eyebrow">Services catalogue</p><h2 className="display-font mt-4 max-w-2xl text-3xl font-semibold tracking-[-.04em] text-[#202b34] sm:text-5xl">Installation <span className="text-[#f4511e]">|</span> Maintenance <span className="text-[#f4511e]">|</span> Services</h2></div><span className="mono-font text-[10px] uppercase tracking-[.16em] text-[#89949a]">09 elevator services</span></Reveal>
          <div className="mt-10">
            {services.map(([name, image], index) => (
              <Reveal key={name} className={`catalogue-row group grid gap-6 py-8 md:grid-cols-[4rem_minmax(14rem,.8fr)_minmax(14rem,1.2fr)_auto] md:items-center reveal-delay-${(index % 3) + 1}`}>
                <span className="mono-font text-[10px] tracking-[.14em] text-[#f4511e]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="display-font text-2xl font-semibold tracking-[-.03em] text-[#202b34] sm:text-3xl">{name}</h3>
                <a href={`${imageBase}${image}`} target="_blank" rel="noreferrer" aria-label={`View full photograph of ${name}`} className="service-image-reveal block w-full max-w-md cursor-zoom-in">
                  <ImageReveal src={`${imageBase}${image}`} alt={`Full photograph of ${name}`} className="w-full" imageClassName="object-contain" />
                </a>
                <Link href="/contact" data-testid={`link-service-contact-${index}`} aria-label={`Contact us about ${name}`} className="arrow-link flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em] text-[#202b34]">Enquire <ArrowUpRight size={17} className="text-[#f4511e]" /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}