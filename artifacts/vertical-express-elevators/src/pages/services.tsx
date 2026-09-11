import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageReveal, Reveal } from '@/components/reveal';
import { imageBase, services } from '@/lib/site-data';

export function ServicesPage() {
  useEffect(() => { document.title = 'Services | Vertical Express Elevators'; }, []);
  return (
    <>
      <section className="dark-panel pt-[76px]"><div className="page-wrap grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_.8fr] lg:items-end"><Reveal><p className="eyebrow">Installation | Maintenance | Services</p><h1 className="display-font mt-5 max-w-2xl text-6xl font-semibold leading-[.92] tracking-[-.05em] sm:text-8xl">OUR<br /><span className="text-[#f47a21]">SERVICES.</span></h1></Reveal><Reveal className="reveal-delay-1"><p className="mono-font max-w-sm text-[11px] uppercase tracking-[.16em] text-[#b8bec1]">Installation | Maintenance | Services</p></Reveal></div></section>
      <section className="bg-[#e7e1d8] py-16 md:py-24"><div className="page-wrap"><Reveal><p className="eyebrow">01 — 09 / Services</p><h2 className="display-font mt-4 max-w-2xl text-3xl font-semibold tracking-[-.03em] text-[#1d252d] sm:text-5xl">Installation<br /><span className="text-[#f47a21]">| Maintenance | Services</span></h2></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map(([name, image], index) => <Reveal key={name} className={`service-card group bg-[#f3f0eb] p-3 reveal-delay-${(index % 3) + 1}`}><div className="service-image relative aspect-[1.05] overflow-hidden"><ImageReveal src={`${imageBase}${image}`} alt={name} className="h-full w-full" /><span className="absolute left-4 top-4 bg-[#1d252d] px-2 py-1 mono-font text-[9px] text-[#f3f0eb]">{String(index + 1).padStart(2, '0')}</span></div><div className="flex items-center justify-between gap-4 px-3 pb-3 pt-5"><h3 className="display-font text-xl font-semibold text-[#1d252d]">{name}</h3><Link href="/contact" data-testid={`link-service-contact-${index}`} aria-label={`Contact us about ${name}`} className="service-arrow flex h-9 w-9 shrink-0 items-center justify-center border border-[#d9d2c8]"><ArrowUpRight size={16} /></Link></div></Reveal>)}</div></div></section>
    </>
  );
}