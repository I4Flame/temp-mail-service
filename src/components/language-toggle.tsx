"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Language = {
  name: string;
  code: string;
  flag: string;
}

const languages: Language[] = [
  { name: "Türkçe", code: "tr", flag: "🇹🇷" },
  { name: "English", code: "en", flag: "🇬🇧" },
]

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()

  // Mevcut dili almak için pathname'i kontrol ediyoruz
  const currentLang = pathname.startsWith('/en') ? 'en' : 'tr'

  const switchLanguage = (langCode: string) => {
    // Eğer zaten o dil aktifse işlem yapmıyoruz
    if ((langCode === 'en' && pathname.startsWith('/en')) ||
        (langCode === 'tr' && !pathname.startsWith('/en'))) {
      return
    }

    // Dil değişimine göre yönlendirme
    if (langCode === 'en') {
      // Türkçe'den İngilizce'ye geçiş
      if (pathname === '/') {
        router.push('/en')
      } else {
        router.push(`/en${pathname}`)
      }
    } else {
      // İngilizce'den Türkçe'ye geçiş
      if (pathname === '/en') {
        router.push('/')
      } else {
        router.push(pathname.replace('/en', ''))
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={currentLang === lang.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
