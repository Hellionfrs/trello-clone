import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});
export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={73} // Set either width or height based on the SVG's dimensions
          height={49} // Set the other dimension to "auto" to maintain aspect ratio
          style={{ width: "30px", height: "auto" }}
        />
        <p
          className={cn("text-lg text-neutral-700 pt-1", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};
