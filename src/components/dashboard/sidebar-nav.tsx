"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  CreditCard,
  FileBox,
  Home,
  Inbox,
  LifeBuoy,
  Plus,
  Settings,
  Users
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  variant: "default" | "ghost";
}

interface SidebarNavProps {
  isEnglish?: boolean;
}

export function SidebarNav({ isEnglish = false }: SidebarNavProps) {
  const pathname = usePathname()
  const langPrefix = isEnglish ? "/en" : ""

  // Dil bağlamına göre metinleri ayarlama
  const texts = {
    dashboard: isEnglish ? "Dashboard" : "Kontrol Paneli",
    inboxes: isEnglish ? "My Inboxes" : "Gelen Kutularım",
    create: isEnglish ? "Create New" : "Yeni Oluştur",
    archives: isEnglish ? "Archives" : "Arşiv",
    domains: isEnglish ? "Custom Domains" : "Özel Alan Adları",
    billing: isEnglish ? "Billing" : "Faturalama",
    settings: isEnglish ? "Settings" : "Ayarlar",
    help: isEnglish ? "Help & Support" : "Yardım & Destek"
  }

  const navItems: NavItem[] = [
    {
      title: texts.dashboard,
      href: `${langPrefix}/dashboard`,
      icon: <Home className="mr-2 h-4 w-4" />,
      variant: pathname === `${langPrefix}/dashboard` ? "default" : "ghost",
    },
    {
      title: texts.inboxes,
      href: `${langPrefix}/dashboard/inboxes`,
      icon: <Inbox className="mr-2 h-4 w-4" />,
      variant: pathname === `${langPrefix}/dashboard/inboxes` ? "default" : "ghost",
    },
    {
      title: texts.create,
      href: `${langPrefix}/dashboard/create`,
      icon: <Plus className="mr-2 h-4 w-4" />,
      variant: pathname === `${langPrefix}/dashboard/create` ? "default" : "ghost",
    },
    {
      title: texts.archives,
      href: `${langPrefix}/dashboard/archives`,
      icon: <FileBox className="mr-2 h-4 w-4" />,
      variant: pathname === `${langPrefix}/dashboard/archives` ? "default" : "ghost",
    },
    {
      title: texts.domains,
      href: `${langPrefix}/dashboard/domains`,
      icon: <Users className="mr-2 h-4 w-4" />,
      variant: pathname === `${langPrefix}/dashboard/domains` ? "default" : "ghost",
    },
    {
      title: texts.billing,
      href: `${langPrefix}/dashboard/billing`,
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      variant: pathname === `${langPrefix}/dashboard/billing` ? "default" : "ghost",
    },
    {
      title: texts.settings,
      href: `${langPrefix}/dashboard/settings`,
      icon: <Settings className="mr-2 h-4 w-4" />,
      variant: pathname === `${langPrefix}/dashboard/settings` ? "default" : "ghost",
    },
    {
      title: texts.help,
      href: `${langPrefix}/dashboard/help`,
      icon: <LifeBuoy className="mr-2 h-4 w-4" />,
      variant: pathname === `${langPrefix}/dashboard/help` ? "default" : "ghost",
    }
  ]

  return (
    <nav className="grid gap-1 px-2">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            buttonVariants({ variant: item.variant, size: "sm" }),
            item.variant === "default" &&
              "bg-primary text-primary-foreground hover:bg-primary/90",
            "justify-start"
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
