import { useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageReveal, Reveal } from '@/components/reveal';
import { imageBase, services } from '@/lib/site-data';

export function HomePage() {
  useEffect(() => { document.title = 'Vertical Express Elevators | Ascend Beyond Limits'; }, []);
  return (
    <>
      <section className="dark-panel relative min-h-[680px] overflow-hidden pt-[76px] md:min-h-[760px]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, transparent 0 65%, rgba(244,122,33,.35) 65% 65.15%, transparent 65.15%), linear-gradient(0deg, transparent 0 78%, rgba(244,122,33,.35) 78% 78.15%, transparent 78.15%)' }} />
        <div className="page-wrap relative grid min-h-[604px] items-center gap-10 py-16 lg:grid-cols-[.82fr_1.18fr] lg:py-24">
          <div className="relative z-10">
            <Reveal><p className="eyebrow">Vertical Express Elevators Pvt. Ltd.</p></Reveal>
            <Reveal className="reveal-delay-1"><h1 className="display-font mt-6 max-w-xl text-5xl font-semibold leading-[.98] tracking-[-.045em] text-[#f3f0eb] sm:text-6xl lg:text-[6.4rem]">Ascend<br /><span className="text-[#f47a21]">Beyond</span><br />Limits<span className="text-[#f47a21]">...</span></h1></Reveal>
            <Reveal className="reveal-delay-2"><p className="mono-font mt-8 max-w-sm text-[11px] uppercase tracking-[.16em] text-[#c3c7c9]">Installation | Maintenance | Services</p></Reveal>
            <Reveal className="reveal-delay-3"><Link href="/services" data-testid="link-hero-services" className="arrow-link mt-9 inline-flex items-center gap-3 border-b border-[#f47a21] pb-3 text-xs font-bold uppercase tracking-[.12em] text-[#f3f0eb]">Explore services <ArrowUpRight size={16} /></Link></Reveal>
          </div>
          <div className="relative h-[380px] sm:h-[500px] lg:h-[610px]">
            <div className="absolute -right-20 top-1/2 hidden h-px w-64 bg-[#f47a21] lg:block" />
            <img src={`${imageBase}IMG-20260912-WA0011_1789155975552.jpg`} alt="Vertical Express Elevators elevator installation" className="hero-image absolute inset-0 h-full w-full object-cover object-center lg:left-[7%] lg:w-[93%]" />
            <div className="absolute bottom-5 left-5 border border-[#f3f0eb]/35 px-4 py-3 backdrop-blur-sm lg:left-[13%]"><p className="mono-font text-[9px] uppercase tracking-[.14em] text-[#f3f0eb]">Ascend Beyond Limits...</p></div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex"><span className="h-10 w-px bg-[#f47a21]" /><span className="mono-font text-[9px] uppercase tracking-[.2em] text-[#a4abb0]">Scroll to explore</span></div>
      </section>
      <section className="grid-lines bg-[#f3f0eb] py-20 md:py-32">
        <div className="page-wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <Reveal><p className="eyebrow">01 / About Company</p><div className="orange-rule mt-5" /></Reveal>
          <Reveal className="reveal-delay-1"><h2 className="display-font max-w-3xl text-3xl font-semibold leading-[1.1] tracking-[-.03em] text-[#1d252d] sm:text-5xl">Elevating spaces,<br /><span className="text-[#f47a21]">connecting lives.</span></h2><p className="mt-7 max-w-2xl text-base leading-8 text-[#697077]">At Vertical Express Elevators, we’re more than just a transportation solution – we’re your gateway to seamless vertical mobility.</p><Link href="/about" data-testid="link-home-about" className="arrow-link mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em] text-[#1d252d]">About the company <ArrowUpRight size={16} className="text-[#f47a21]" /></Link></Reveal>
        </div>
      </section>
      <section className="bg-[#e7e1d8] py-20 md:py-28">
        <div className="page-wrap">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">02 / Services</p><h2 className="display-font mt-4 text-4xl font-semibold tracking-[-.04em] text-[#1d252d] sm:text-6xl">Installation<br /><span className="text-[#f47a21]">| Maintenance | Services</span></h2></div><Link href="/services" data-testid="link-home-all-services" className="arrow-link inline-flex items-center gap-3 pb-2 text-xs font-bold uppercase tracking-[.12em] text-[#1d252d]">View all services <ArrowUpRight size={16} className="text-[#f47a21]" /></Link></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map(([name, image], index) => <Reveal key={name} className={`reveal-delay-${(index % 3) + 1}`}><Link href="/services" data-testid={`card-home-service-${index}`} className="service-card group block bg-[#f3f0eb] p-3"><div className="service-image relative aspect-[1.22] overflow-hidden"><img src={`${imageBase}${image}`} alt={name} className="h-full w-full object-cover" /><span className="absolute left-3 top-3 bg-[#1d252d] px-2 py-1 mono-font text-[9px] text-[#f3f0eb]">0{index + 1}</span></div><div className="flex items-center justify-between px-2 pb-2 pt-5"><h3 className="display-font text-lg font-semibold text-[#1d252d]">{name}</h3><span className="service-arrow flex h-8 w-8 items-center justify-center border border-[#d9d2c8]"><ArrowUpRight size={15} /></span></div></Link></Reveal>)}
          </div>
        </div>
      </section>
      <section className="dark-panel py-20 md:py-28">
        <div className="page-wrap grid items-end gap-10 md:grid-cols-[1fr_auto]"><Reveal><p className="eyebrow">03 / Contact Us</p><h2 className="display-font mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-.04em] sm:text-6xl">Contact<br /><span className="text-[#f47a21]">Us.</span></h2></Reveal><Reveal className="reveal-delay-1"><Link href="/contact" data-testid="link-home-contact" className="group inline-flex items-center gap-5 border border-[#59636b] px-6 py-5 text-xs font-bold uppercase tracking-[.12em] text-[#f3f0eb] transition-colors hover:border-[#f47a21] hover:bg-[#f47a21]">Contact us <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></Reveal></div>
      </section>
    </>
  );
}