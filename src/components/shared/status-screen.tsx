import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/shared/container";

type Props = {
  code: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function StatusScreen({ code, title, description, children }: Props) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-brand-800 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:120px_120px]"
      />
      <Navbar />

      <Container className="relative flex flex-1 flex-col items-center justify-center py-32 text-center">
        <p className="font-heading text-[96px] font-semibold leading-none text-lime-400 sm:text-[160px]">
          {code}
        </p>
        <h1 className="mt-6 text-3xl sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-[520px] text-base leading-[1.6] text-white/90 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{children}</div>
      </Container>
    </main>
  );
}
