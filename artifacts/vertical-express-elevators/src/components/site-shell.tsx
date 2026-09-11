import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Company', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location]);
  return (
    <div className="site-shell">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9d2c8]/80 nav-glass">
        <div className="page-wrap flex h-[76px] items-center justify-between">
          <Link href="/" data-testid="link-brand" className="group leading-none">
            <span className="block">
              <span className="display-font block text-[13px] font-bold tracking-[.08em] text-[#1d252d]">VERTICAL EXPRESS</span>
              <span className="mono-font mt-1 block text-[8px] tracking-[.18em] text-[#697077]">ELEVATORS PVT. LTD.</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, '-')}`} className={`mono-font text-[10px] uppercase tracking-[.14em] transition-colors hover:text-[#f47a21] ${location === item.href ? 'text-[#f47a21]' : 'text-[#697077]'}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" data-testid="link-header-consultation" className="group flex items-center gap-2 bg-[#f47a21] px-4 py-3 text-[10px] font-bold uppercase tracking-[.13em] text-[#fffaf3] transition-colors hover:bg-[#d96012]">
              Talk to us <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>
          <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)} data-testid="button-mobile-menu" className="flex h-11 w-11 items-center justify-center border border-[#cfc7bc] text-[#1d252d] md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-[#d9d2c8] bg-[#f3f0eb] px-8 py-6 md:hidden">
            <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`} className="display-font text-xl font-semibold text-[#1d252d]">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" data-testid="link-mobile-consultation" className="mt-2 flex items-center justify-between border-t border-[#d9d2c8] pt-5 font-semibold text-[#f47a21]">
                Start a conversation <ArrowUpRight size={18} />
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="dark-panel mt-0">
        <div className="page-wrap grid gap-12 py-14 md:grid-cols-[1.2fr_.8fr_.8fr] md:py-20">
          <div>
            <p className="display-font max-w-sm text-3xl font-semibold leading-[1.08]">Ascend Beyond Limits<span className="text-[#f47a21]">...</span></p>
            <p className="mono-font mt-6 text-[10px] uppercase tracking-[.16em] text-[#a4abb0]">Installation | Maintenance | Services</p>
          </div>
          <div>
            <p className="eyebrow">Navigate</p>
            <div className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => <Link key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase().replace(/\s/g, '-')}`} className="text-sm text-[#d7d4ce] transition-colors hover:text-[#f47a21]">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <p className="mt-5 text-sm leading-6 text-[#d7d4ce]">verticalexpresspvtltd@gmail.com</p>
            <p className="mt-3 text-sm leading-6 text-[#a4abb0]">Plot No. 24, Arif Colony,<br />Near Aamkhas Ground,<br />Aurangabad - 431001 (M.H)</p>
          </div>
        </div>
        <div className="border-t border-[#465059]">
          <div className="page-wrap flex flex-col gap-2 py-5 text-[10px] text-[#899197] sm:flex-row sm:items-center sm:justify-between">
            <span>VERTICAL EXPRESS ELEVATORS PVT. LTD.</span><span>© {new Date().getFullYear()} · Aurangabad, Maharashtra</span>
          </div>
        </div>
      </footer>
    </div>
  );
}