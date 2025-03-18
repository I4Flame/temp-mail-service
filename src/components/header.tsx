"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function Header() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  // Link ve menü öğesi yapılandırmaları için dil kökü
  const langRoot = isEnglish ? '/en' : ''

  // Dil bağlamına göre metinleri ayarlama
  const texts = {
    howItWorks: isEnglish ? "How It Works" : "Nasıl Çalışır?",
    premium: "Premium",
    faq: isEnglish ? "FAQ" : "S.S.S.",
    login: isEnglish ? "Login" : "Giriş Yap",
    signup: isEnglish ? "Sign Up" : "Kayıt Ol",
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={isEnglish ? "/en" : "/"} className="flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">TempMail Pro</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href={`${langRoot}/nasil-calisir`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            {texts.howItWorks}
          </Link>
          <Link href={`${langRoot}/premium`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            {texts.premium}
          </Link>
          <Link href={`${langRoot}/s-s-s`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            {texts.faq}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Link href={`${langRoot}/giris`}>
              <Button variant="outline">{texts.login}</Button>
            </Link>
            <Link href={`${langRoot}/kayit`}>
              <Button>{texts.signup}</Button>
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`${langRoot}/nasil-calisir`}>{texts.howItWorks}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`${langRoot}/premium`}>{texts.premium}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`${langRoot}/s-s-s`}>{texts.faq}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`${langRoot}/giris`}>{texts.login}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`${langRoot}/kayit`}>{texts.signup}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
