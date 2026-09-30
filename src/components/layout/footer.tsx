import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { ResetForm } from "@/components/shared/reset-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerColumns } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white pt-12 text-neutral-950 lg:pt-[71px]">
      <Container className="xl:max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-x-10 xl:grid-cols-[1fr_580px] xl:gap-x-0">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <Logo dark />
            <p className="mt-4 text-base leading-[1.6]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <ResetForm className="mt-8 flex max-w-[504px] flex-col items-stretch gap-4 max-sm:w-full sm:flex-row sm:items-start sm:gap-6 lg:mt-11">
              <Input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-[52px] rounded-full border-neutral-200 px-6 text-base placeholder:text-neutral-800 sm:max-w-[376px] sm:flex-1 md:text-base"
              />
              <Button
                type="submit"
                className="h-[46px] rounded-full bg-lime-400 px-8 text-base font-medium text-neutral-950 hover:bg-lime-300"
              >
                Search
              </Button>
            </ResetForm>

            <p className="mt-6 max-w-[470px] text-xs leading-[1.6]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 max-sm:text-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-12 lg:grid-cols-3 lg:gap-x-0 xl:grid-cols-[207px_207px_1fr]">
            {footerColumns.map((col) => (
              <ul key={col.title} className="space-y-4 text-sm leading-[1.6]">
                {col.links.map((label) => (
                  <li key={label}>
                    <Link href="#" className="hover:text-brand-800">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pb-10 pt-6 text-xs max-sm:items-center max-sm:text-center sm:flex-row sm:justify-between lg:mt-[130px] lg:pb-12">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 max-sm:justify-center">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
