import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
          className={cn("text-lg text-neutral-700 pt-1", "__className_8b3a75")}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};
