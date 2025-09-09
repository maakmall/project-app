"use client";

import Link from "next/link";
import { Home, User, Briefcase, CodeXml, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: User, label: "About" },
  { href: "/skills", icon: CodeXml, label: "Skills" },
  { href: "/projects", icon: Briefcase, label: "Projects" },
  { href: "/contact", icon: Send, label: "Contact" },
  // { href: "#", icon: SunMoon, label: "Theme" },
  // { href: "#", icon: Languages, label: "Language" },
];

export function DockNav() {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <nav className="fixed left-1/2 -translate-x-1/2 bottom-6 lg:bottom-auto lg:translate-x-0 lg:left-8 lg:top-1/2 lg:-translate-y-1/2 z-50 flex lg:flex-col gap-1 bg-white shadow rounded-full p-1 border">
        {navItems.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={`flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors ${pathname == item.href && "bg-gray-200"}`}
              >
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className="lg:hidden">
              <p>{item.label}</p>
            </TooltipContent>
            <TooltipContent side="right" className="hidden lg:block">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  );
}
