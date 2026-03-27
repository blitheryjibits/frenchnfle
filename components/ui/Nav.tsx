"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TextAlignJustify, X } from "lucide-react";

export const Nav = () => {
  const pathname = usePathname();
  const linkClass = (href: string) =>
    pathname === href
      ? "underline underline-offset-4 text-primary"
      : " hover:bg-secondary transition";

  const items = [
    { label: "Accueil", href: "/" },
    { label: "Cours de Français", href: "/cours-de-francais" },
    {
      label: "Formations professionnelles FLE",
      href: "/formations-professionnelles",
    },
    { label: "Service de traduction", href: "/service-de-traduction" },
    { label: "Infos et contact", href: "/infos-et-contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav
      className={`
        w-screen sticky top-0 z-30
        flex flex-row justify-between
        bg-background
        overflow-x-clip
        `}
    >
      <div
        className="
            ml-2 mt-2 md:ml-4 py-4
            -rotate-20"
      >
        <Image
          loading="eager"
          src="/origami_Julie_web.webp"
          alt="French`n FLE Logo"
          width={150}
          height={100}
          className="-m-2"
        />
      </div>

      {/* menu */}
      <div className="relative h-100% flex-1">
        <input
          title="sidebar-active"
          type="checkbox"
          name="sidebar-active"
          id="sidebar-active"
          className="hidden peer"
        />
        <label
          id=""
          htmlFor="sidebar-active"
          className="md:hidden peer-checked:hidden
          absolute right-2 top-[50%] -translate-y-[50%]"
        >
          <TextAlignJustify />
        </label>

        {/* menu list */}

        <ul
          className={`absolute top-0 -right-full max-w-3/4 h-screen
              flex flex-col 
              gap-4 pt-4 
              bg-background/60 backdrop-blur 
              peer-checked:right-0
              transtition-all duration-300
              md:bg-transparent
              md:max-w-full md:flex md:flex-row md:right-0 md:h-full
              md:gap-0 md:pt-0 md:pr-4 md:text-sm
              
              `}
        >
          <li className="ml-auto md:hidden pr-4">
            <label htmlFor="sidebar-active">
              <X />
            </label>
          </li>
          {items.map((item) => (
            <li
              key={item.href}
              id={item.label}
              className="md:flex md:items-center text-accent"
            >
              <Link
                href={item.href}
                className={`py-1 px-2 rounded-md block text-center ${linkClass(item.href)}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu */}
    </nav>
  );
};
