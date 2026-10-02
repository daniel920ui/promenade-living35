"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Packages", href: "/packages" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md shadow-[0_10px_30px_rgba(25,17,13,0.12)] transition-all duration-300 md:px-6">
          <Link href="/" className="text-base font-semibold tracking-[0.22em] text-[#201b18] uppercase">
            Promenade Living
          </Link>

          <div className="hidden items-center gap-7 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#2a241f] lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-[#9b7a4d]">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="#consultation"
              className="inline-flex items-center gap-2 rounded-full border border-[#2d251d] bg-[#2d251d] px-5 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#f7f1e9] transition hover:border-[#9b7a4d] hover:bg-[#9b7a4d]"
            >
              Book Consultation
              <ArrowRight size={14} />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2d251d]/20 bg-white/80 text-[#2d251d] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-[#2d251d]/10 bg-[#f9f4ed]/95 p-4 shadow-lg backdrop-blur-sm lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#2d251d]/10 pb-2 text-sm font-medium uppercase tracking-[0.14em] text-[#2a241f] last:border-none last:pb-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#consultation"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#2d251d] px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#f7f1e9]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
