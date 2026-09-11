import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageReveal, Reveal } from '@/components/reveal';
import { imageBase } from '@/lib/site-data';

export function AboutPage() {
  useEffect(() => { document.title = 'About Company | Vertical Express Elevators'; }, []);

  return (
    <>
      <section className="bg-[#eef1f2] pt-[78px]">
        <div className="page-wrap grid gap-10 py-20 md:py-28 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <Reveal><p className="eyebrow">About Vertical Express</p><h1 className="display-font mt-5 text-6xl font-semibold leading-[.92] tracking-[-.06em] text-[#202b34] sm:text-8xl">ABOUT<br /><span className="text-[#f4511e]">COMPANY</span></h1></Reveal>
          <Reveal className="reveal-delay-1"><p className="max-w-lg border-l-2 border-[#f4511e] pl-6 text-lg leading-8 text-[#59666e]">Elevating spaces, connecting lives. Discover the vertical difference with us.</p></Reveal>
        </div>
      </section>
      <section className="bg-white py-16 md:py-28">
        <div className="page-wrap grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <ImageReveal src={`${imageBase}IMG-20260912-WA0010_1789155975581.jpg`} alt="Elevator installation inside a glass building" className="h-[480px] md:h-[680px]" />
          <Reveal className="reveal-delay-1">
            <p className="eyebrow">About Company</p>
            <h2 className="display-font mt-5 text-3xl font-semibold leading-[1.08] tracking-[-.04em] text-[#202b34] sm:text-5xl">Elevating spaces,<br /><span className="text-[#f4511e]">connecting lives.</span></h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#667279]">At Vertical Express Elevators, we’re more than just a transportation solution – we’re your gateway to seamless vertical mobility. With a relentless commitment to innovation, safety, and efficiency, we redefine vertical transportation experiences. Our cutting-edge elevator systems combine state-of-the-art technology with exceptional design, ensuring both reliability and aesthetics. With a focus on sustainability, we’re dedicated to shaping the future of urban connectivity. Elevate your spaces with Vertical Express Elevators and journey upwards with confidence.</p>
            <Link href="/contact" data-testid="link-about-contact" className="arrow-link mt-9 inline-flex items-center gap-3 border-b border-[#f4511e] pb-3 text-xs font-bold uppercase tracking-[.12em] text-[#202b34]">Contact us <ArrowUpRight size={16} className="text-[#f4511e]" /></Link>
          </Reveal>
        </div>
      </section>
      <section className="soft-grid bg-[#f8f7f3] py-20 md:py-28">
        <div className="page-wrap grid gap-12 md:grid-cols-[.55fr_1fr] md:gap-20"><Reveal><p className="eyebrow">Vertical Express Elevators Pvt. Ltd.</p><div className="orange-rule mt-5" /></Reveal><Reveal className="reveal-delay-1"><p className="display-font max-w-3xl text-3xl font-medium leading-[1.15] text-[#202b34] sm:text-5xl">Ascend Beyond Limits<span className="text-[#f4511e]">...</span></p><p className="mono-font mt-8 text-[10px] uppercase tracking-[.16em] text-[#667279]">Installation | Maintenance | Services</p></Reveal></div>
      </section>
    </>
  );
}