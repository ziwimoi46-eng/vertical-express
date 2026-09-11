import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  useEffect(() => { document.title = 'Page not found | Vertical Express Elevators'; }, []);
  return <section className="grid-lines flex min-h-[70dvh] items-center bg-[#f3f0eb] pt-[76px]"><div className="page-wrap"><p className="eyebrow">04 — Page not found</p><h1 className="display-font mt-5 text-8xl font-semibold tracking-[-.08em] text-[#1d252d]">404<span className="text-[#f47a21]">.</span></h1><p className="mt-5 max-w-sm text-base leading-7 text-[#697077]">The requested page could not be found.</p><Link href="/" data-testid="link-404-home" className="arrow-link mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em] text-[#1d252d]"><ArrowLeft size={16} className="text-[#f47a21]" /> Return home</Link></div></section>;
}