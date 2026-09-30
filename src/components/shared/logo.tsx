import Image from "next/image";
import Link from "next/link";

/**
 * Default variant uses the exported logo (white wordmark) for dark backgrounds.
 * The `dark` variant is for light backgrounds, where the white wordmark would disappear.
 */
export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  if (!dark) {
    return (
      <Link href="/" aria-label="ByteSpace home" className={className}>
        <Image src="/images/logo.png" alt="ByteSpace" width={171} height={37} priority className="h-8 w-auto sm:h-9" />
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="ByteSpace home" className={className}>
      <Image src="/images/logo-dark.png" alt="ByteSpace" width={171} height={37} className="h-8 w-auto sm:h-9" />
    </Link>
  );
}
