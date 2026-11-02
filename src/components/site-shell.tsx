import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems: Array<{ label: string; href: string }> = [
  { label: 'Home', href: '/' },
  { label: 'About Company', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location]);

  return (
    <div className="site-shell">
      <header className="nav-glass fixed inset-x-0 top-0 z-50 border-b border-[#e2e6e8]">
        <div className="page-wrap flex h-[78px] items-center justify-between">
          <Link href="/" data-testid="link-brand" className="group leading-none">
            <img src="/vee-assets/logos/vee-logo-dark.png" alt="Vertical Express Elevators Pvt. Ltd." className="h-12 w-[132px] object-contain object-left sm:w-[154px]" />
          </Link>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                className={`relative py-2 mono-font text-[10px] uppercase tracking-[.14em] transition-colors hover:text-[#f4511e] ${location === item.href ? 'text-[#f4511e] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-[#f4511e]' : 'text-[#6d777d]'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" data-testid="link-header-consultation" className="group flex items-center gap-3 bg-[#f4511e] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[.13em] text-white transition-colors hover:bg-[#d94113]">
              Talk to us <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>
          <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)} data-testid="button-mobile-menu" className="flex h-11 w-11 items-center justify-center border border-[#cfd6da] text-[#202b34] md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-[#e2e6e8] bg-white px-8 py-7 md:hidden">
            <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  className="display-font text-xl font-semibold text-[#202b34]"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} data-testid="link-mobile-consultation" className="mt-2 flex items-center justify-between border-t border-[#e2e6e8] pt-5 font-semibold text-[#f4511e]">
                Start a conversation <ArrowUpRight size={18} />
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="dark-panel mt-0">
        <div className="page-wrap grid gap-12 py-16 md:grid-cols-[1.2fr_.8fr_.8fr] md:py-20">
          <div>
            <img src="/vee-assets/logos/vee-logo-white.png" alt="Vertical Express Elevators Pvt. Ltd." className="mb-6 h-12 w-[148px] object-contain object-left" />
            <p className="display-font max-w-sm text-3xl font-semibold leading-[1.08]">Ascend Beyond Limits<span className="text-[#f4511e]">...</span></p>
            <p className="mono-font mt-6 text-[10px] uppercase tracking-[.16em] text-[#b8c1c6]">Installation | Maintenance | Services</p>
          </div>
          <div>
            <p className="eyebrow">Navigate</p>
            <div className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`link-footer-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-sm text-[#d9e0e3] transition-colors hover:text-[#f4511e]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <p className="mt-5 text-sm leading-6 text-[#d9e0e3]">verticalexpresspvtltd@gmail.com</p>
            <p className="mt-3 text-sm leading-6 text-[#a9b3b9]">
              Shop no 25 &amp; 26, KK Patel &amp; Sons Market,<br />
              Beed Bypass, Chhatrapati Sambhajinagar,<br />
              Maharashtra - 431001
            </p>
          </div>
        </div>
        <div className="border-t border-[#3d4b55]">
          <div className="page-wrap flex flex-col gap-2 py-5 text-[10px] text-[#97a3aa] sm:flex-row sm:items-center sm:justify-between">
            <span>VERTICAL EXPRESS ELEVATORS PVT. LTD.</span>
            <span>© {new Date().getFullYear()} · Chhatrapati Sambhajinagar, Maharashtra</span>
          </div>
        </div>
      </footer>
    </div>
  );
}