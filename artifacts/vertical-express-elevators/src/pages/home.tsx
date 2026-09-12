import { useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageReveal, Reveal } from '@/components/reveal';
import { imageBase, services } from '@/lib/site-data';

export function HomePage() {
  useEffect(() => { document.title = 'Vertical Express Elevators | Ascend Beyond Limits'; }, []);

  return (
    <>
      <section className="bg-[#f8f7f3] pt-[78px]">
        <div className="page-wrap grid min-h-[680px] items-center gap-12 py-14 md:py-20 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 lg:py-24">
          <div className="order-2 lg:order-1">
            <Reveal><p className="eyebrow">Vertical Express Elevators Pvt. Ltd.</p></Reveal>
            <Reveal className="reveal-delay-1"><h1 className="display-font mt-6 max-w-xl text-[3.8rem] font-semibold leading-[.95] tracking-[-.055em] text-[#202b34] sm:text-7xl lg:text-[5.7rem]">Ascend<br /><span className="text-[#f4511e]">Beyond</span><br />Limits<span className="text-[#f4511e]">...</span></h1></Reveal>
            <Reveal className="reveal-delay-2"><p className="mono-font mt-8 text-[10px] uppercase tracking-[.18em] text-[#6d777d]">Installation | Maintenance | Services</p></Reveal>
            <Reveal className="reveal-delay-3"><Link href="/services" data-testid="link-hero-services" className="arrow-link mt-9 inline-flex items-center gap-3 border-b border-[#f4511e] pb-3 text-xs font-bold uppercase tracking-[.12em] text-[#202b34]">Explore services <ArrowUpRight size={16} className="text-[#f4511e]" /></Link></Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <Reveal className="relative">
              <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-l border-b border-[#f4511e] md:block" />
              <div className="relative overflow-hidden bg-[#e8ecee] p-3 md:p-5">
                <img src={`${imageBase}home-hero.webp`} alt="Vertical Express Elevators premium elevator interior" className="hero-image h-auto max-h-[650px] w-full object-contain object-center" />
                <div className="absolute bottom-7 left-7 bg-white/90 p-2 backdrop-blur-sm"><img src="/images/official-logo.png" alt="Vertical Express Elevators Pvt. Ltd." className="h-9 w-28 object-cover object-center" /></div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="border-t border-[#e2e6e8]">
          <div className="page-wrap flex items-center justify-end py-4"><ArrowDownRight size={17} className="text-[#f4511e]" /></div>
        </div>
      </section>

      <section className="soft-grid bg-white py-20 md:py-28">
        <div className="page-wrap grid gap-12 lg:grid-cols-[.55fr_1fr_1fr] lg:gap-16">
          <Reveal><p className="eyebrow">01 / About Company</p><div className="orange-rule mt-5" /></Reveal>
          <Reveal className="reveal-delay-1"><h2 className="display-font text-3xl font-semibold leading-[1.08] tracking-[-.04em] text-[#202b34] sm:text-4xl">Elevating spaces,<br /><span className="text-[#f4511e]">connecting lives.</span></h2></Reveal>
          <Reveal className="reveal-delay-2"><p className="max-w-xl text-[15px] leading-8 text-[#667279]">At Vertical Express Elevators, we’re more than just a transportation solution – we’re your gateway to seamless vertical mobility.</p><Link href="/about" data-testid="link-home-about" className="arrow-link mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em] text-[#202b34]">About the company <ArrowUpRight size={16} className="text-[#f4511e]" /></Link></Reveal>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-20 md:py-28">
        <div className="page-wrap">
          <Reveal className="flex flex-col justify-between gap-6 border-b border-[#d3dade] pb-7 md:flex-row md:items-end">
            <div><p className="eyebrow">02 / Services</p><h2 className="display-font mt-4 text-3xl font-semibold tracking-[-.04em] text-[#202b34] sm:text-5xl">Installation <span className="text-[#f4511e]">|</span> Maintenance <span className="text-[#f4511e]">|</span> Services</h2></div>
            <Link href="/services" data-testid="link-home-all-services" className="arrow-link inline-flex items-center gap-3 pb-1 text-xs font-bold uppercase tracking-[.12em] text-[#202b34]">View all services <ArrowUpRight size={16} className="text-[#f4511e]" /></Link>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map(([name, image], index) => (
              <Reveal key={name} className={`service-card group reveal-delay-${(index % 3) + 1}`}>
                <Link href="/services" data-testid={`card-home-service-${index}`} className="block">
                  <div className="service-image relative flex min-h-[190px] items-center justify-center overflow-hidden bg-white p-4"><img src={`${imageBase}${image}`} alt={name} className="h-auto max-h-[220px] w-full object-contain" /></div>
                  <div className="flex items-center justify-between border-b border-[#d3dade] py-5"><h3 className="display-font text-lg font-semibold text-[#202b34]">{name}</h3><span className="service-arrow flex h-8 w-8 items-center justify-center border border-[#c5cfd4] text-[#202b34]"><ArrowUpRight size={15} /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="page-wrap grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <Reveal><p className="eyebrow">03 / Vertical mobility</p><h2 className="display-font mt-5 max-w-md text-3xl font-semibold leading-[1.08] tracking-[-.04em] text-[#202b34] sm:text-5xl">Installation<br /><span className="text-[#f4511e]">Maintenance</span><br />Services</h2></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <ImageReveal src={`${imageBase}capsule-lift.jpg`} alt="Capsule lift installation" className="flex h-64 items-center sm:h-80" imageClassName="object-contain" />
            <ImageReveal src={`${imageBase}car-lift.jpg`} alt="Car lift installation" className="flex h-64 items-center sm:mt-14 sm:h-80" imageClassName="object-contain" />
          </div>
        </div>
      </section>

      <section className="dark-panel py-20 md:py-28">
        <div className="page-wrap grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><Reveal><p className="eyebrow">04 / Contact Us</p><h2 className="display-font mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-.04em] sm:text-6xl">Contact <span className="text-[#f4511e]">us.</span></h2></Reveal><Reveal className="reveal-delay-1"><Link href="/contact" data-testid="link-home-contact" className="group inline-flex items-center gap-5 bg-[#f4511e] px-6 py-5 text-xs font-bold uppercase tracking-[.12em] text-white transition-colors hover:bg-[#d94113]">Contact us <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></Reveal></div>
      </section>
    </>
  );
}