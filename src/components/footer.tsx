"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  // Link yapılandırmaları için dil kökü
  const langRoot = isEnglish ? '/en' : ''

  // Dil bağlamına göre metinleri ayarlama
  const texts = {
    tagline: isEnglish
      ? "Secure, fast and easy-to-use temporary email service."
      : "Güvenli, hızlı ve kullanımı kolay geçici e-posta hizmeti.",
    links: isEnglish ? "Links" : "Bağlantılar",
    howItWorks: isEnglish ? "How It Works" : "Nasıl Çalışır?",
    premium: "Premium",
    faq: isEnglish ? "FAQ" : "S.S.S.",
    legal: isEnglish ? "Legal" : "Yasal",
    privacyPolicy: isEnglish ? "Privacy Policy" : "Gizlilik Politikası",
    termsOfService: isEnglish ? "Terms of Service" : "Kullanım Koşulları",
    contact: isEnglish ? "Contact" : "İletişim",
    copyright: isEnglish
      ? `© ${new Date().getFullYear()} TempMail Pro. All rights reserved.`
      : `© ${new Date().getFullYear()} TempMail Pro. Tüm hakları saklıdır.`
  }

  return (
    <footer className="bg-background border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">TempMail Pro</span>
            </div>
            <p className="text-muted-foreground">
              {texts.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{texts.links}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`${langRoot}/nasil-calisir`} className="text-muted-foreground hover:text-primary">
                  {texts.howItWorks}
                </Link>
              </li>
              <li>
                <Link href={`${langRoot}/premium`} className="text-muted-foreground hover:text-primary">
                  {texts.premium}
                </Link>
              </li>
              <li>
                <Link href={`${langRoot}/s-s-s`} className="text-muted-foreground hover:text-primary">
                  {texts.faq}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{texts.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`${langRoot}/gizlilik-politikasi`} className="text-muted-foreground hover:text-primary">
                  {texts.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`${langRoot}/kullanim-kosullari`} className="text-muted-foreground hover:text-primary">
                  {texts.termsOfService}
                </Link>
              </li>
              <li>
                <Link href={`${langRoot}/iletisim`} className="text-muted-foreground hover:text-primary">
                  {texts.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            {texts.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
