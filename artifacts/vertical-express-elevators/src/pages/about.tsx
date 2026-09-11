import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageReveal, Reveal } from '@/components/reveal';
import { imageBase } from '@/lib/site-data';

export function AboutPage() {
  useEffect(() => { document.title = 'About Company | Vertical Express Elevators'; }, []);
  return (
    <>
      <section className="bg-[#e7e1d8] pt-[76px]">
        <div className="page-wrap grid gap-10 py-20 md:py-28 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><Reveal><p className="eyebrow">About Vertical Express</p><h1 className="display-font mt-5 text-6xl font-semibold leading-[.92] tracking-[-.05em] text-[#1d252d] sm:text-8xl">ABOUT<br /><span className="text-[#f47a21]">COMPANY</span></h1></Reveal><Reveal className="reveal-delay-1"><p className="max-w-lg border-l-2 border-[#f47a21] pl-6 text-lg leading-8 text-[#4e575d]">Elevating spaces, connecting lives. Discover the vertical difference with us.</p></Reveal></div>
      </section>
      <section className="bg-[#f3f0eb] py-16 md:py-28"><div className="page-wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24"><ImageReveal src={`${imageBase}IMG-20260912-WA0010_1789155975581.jpg`} alt="Elevator installation inside a glass building" className="h-[480px] md:h-[680px]" /><Reveal className="reveal-delay-1"><p className="eyebrow">About Company</p><h2 className="display-font mt-5 text-3xl font-semibold leading-[1.1] tracking-[-.03em] text-[#1d252d] sm:text-5xl">Elevating spaces,<br /><span className="text-[#f47a21]">connecting lives.</span></h2><p className="mt-7 text-base leading-8 text-[#697077]">At Vertical Express Elevators, we’re more than just a transportation solution – we’re your gateway to seamless vertical mobility. With a relentless commitment to innovation, safety, and efficiency, we redefine vertical transportation experiences. Our cutting-edge elevator systems combine state-of-the-art technology with exceptional design, ensuring both reliability and aesthetics. With a focus on sustainability, we’re dedicated to shaping the future of urban connectivity. Elevate your spaces with Vertical Express Elevators and journey upwards with confidence.</p><Link href="/contact" data-testid="link-about-contact" className="arrow-link mt-9 inline-flex items-center gap-3 border-b border-[#f47a21] pb-3 text-xs font-bold uppercase tracking-[.12em] text-[#1d252d]">Contact us <ArrowUpRight size={16} className="text-[#f47a21]" /></Link></Reveal></div></section>
      <section className="dark-panel py-20 md:py-28"><div className="page-wrap grid gap-12 md:grid-cols-[.85fr_1.15fr]"><Reveal><p className="eyebrow">Vertical Express Elevators Pvt. Ltd.</p><div className="orange-rule mt-5" /></Reveal><Reveal className="reveal-delay-1"><p className="display-font max-w-3xl text-3xl font-medium leading-[1.15] sm:text-5xl">Ascend Beyond Limits<span className="text-[#f47a21]">...</span></p><p className="mono-font mt-8 text-[11px] uppercase tracking-[.16em] text-[#b8bec1]">Installation | Maintenance | Services</p></Reveal></div></section>
    </>
  );
}