"use client";

import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data/landing";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled && "bg-brand-800/75 shadow-[0_8px_30px_-12px_rgba(4,8,25,0.5)] backdrop-blur-lg",
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20 md:grid md:grid-cols-[1fr_auto_1fr]">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className={i === 0 ? "font-medium text-lime-500" : "text-white/90 hover:text-white"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 justify-self-end text-sm md:flex">
          <Link href="/login" className="hover:text-lime-500">Sign In</Link>
          <Link href="/signup" className="hover:text-lime-500">Join Us</Link>
          <button aria-label="Cart" className="hover:text-lime-500">
            <ShoppingBag className="size-5" />
          </button>
        </div>

        <Sheet>
          <SheetTrigger aria-label="Open menu" className="md:hidden">
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <SheetTitle className="font-heading text-lg">Menu</SheetTitle>
            <nav className="mt-2 flex flex-col gap-4 text-base">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>{link.label}</Link>
              ))}
              <hr />
              <Link href="/login">Sign In</Link>
              <Link href="/signup" className={buttonVariants({ variant: "secondary", className: "h-10" })}>
                Join Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
