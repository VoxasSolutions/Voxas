"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "rgba(9,9,11,0.8)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <img
            src="/file_00000000bbec720684b54a85089de096(1).png"
            alt="Voxas Icon"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/file_0000000083307207af57182ffcddf1c6(1).png"
            alt="Voxas Icon"
            className="h-5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          {/* <span className="text-xl font-bold tracking-widest bg-gradient-to-r from-[#e2c69f] to-[#c084fc] bg-clip-text text-transparent font-display">
            VOXAS
          </span> */}
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-[11px] uppercase tracking-wider transition-colors duration-200",
                pathname === link.href
                  ? "text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary-container px-5 py-2.5 font-display text-[10px] uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-on-surface-variant transition-colors hover:text-on-surface md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t md:hidden"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 font-display text-xs uppercase tracking-wider transition-colors",
                    pathname === link.href
                      ? "bg-white/5 text-on-surface"
                      : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-lg bg-primary-container px-4 py-3 text-center font-display text-[10px] uppercase tracking-widest text-white transition-all hover:brightness-110"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
