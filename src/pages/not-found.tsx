import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  useEffect(() => { document.title = 'Page not found | Vertical Express Elevators'; }, []);
  return <section className="soft-grid flex min-h-[70dvh] items-center bg-[#f8f7f3] pt-[78px]"><div className="page-wrap"><p className="eyebrow">Page not found</p><h1 className="display-font mt-5 text-8xl font-semibold tracking-[-.08em] text-[#202b34]">404<span className="text-[#f4511e]">.</span></h1><p className="mt-5 max-w-sm text-base leading-7 text-[#667279]">The requested page could not be found.</p><Link href="/" data-testid="link-404-home" className="arrow-link mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em] text-[#202b34]"><ArrowLeft size={16} className="text-[#f4511e]" /> Return home</Link></div></section>;
}