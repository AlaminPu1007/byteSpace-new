import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerColumns } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white pt-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-sm text-sm text-neutral-500">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="mt-5 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-11 rounded-full px-4"
              />
              <Button type="submit" variant="secondary" className="h-11 rounded-full px-6">
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-xs text-neutral-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <ul key={col.title} className="space-y-3 text-sm text-neutral-600">
                {col.links.map((label) => (
                  <li key={label}>
                    <Link href="#" className="hover:text-brand-700">{label}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-100 py-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
