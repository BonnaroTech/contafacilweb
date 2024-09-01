import { File, LayoutDashboard } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    title: "GNRE",
    icon: File,
    href: "/example",
    color: "text-orange-500",
    isChidren: true,
    children: [
      {
        title: "Gerar GNRE",
        icon: File,
        color: "text-red-500",
        href: "/gnre/generate",
      },
      {
        title: "Comprovante GNRE",
        icon: File,
        color: "text-red-500",
        href: "/gnre/receipt",
      },
    ],
  },
];