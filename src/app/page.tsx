import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import TempMailBox from "@/components/temp-mail-box"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-20 lg:py-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Güvenli ve Hızlı Geçici E-posta Hizmeti
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Gerçek e-posta adresinizi paylaşmadan, spam ve istenmeyen e-postalardan korunun.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/kayit">
                  <Button size="lg" className="font-medium">
                    Ücretsiz Başla
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/premium">
                  <Button size="lg" variant="outline">
                    Premium'u Keşfet
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <div className="w-full max-w-md rounded-lg border bg-background p-4 shadow-sm">
                <TempMailBox />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Neden TempMail Pro?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Kullanıcı dostu ve güvenli geçici e-posta hizmetimiz ile tüm ihtiyaçlarınızı karşılayın.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-background p-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Hızlı ve Kolay</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Kayıt gerektirmeden anında kullanmaya başlayın. Sadece bir tıklama ile yeni bir geçici e-posta adresi alın.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">%100 Güvenli</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Gizliliğinizi koruyun. Gerçek e-posta adresinizi paylaşmadan çevrimiçi hizmetlere kaydolun.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6">
                <Check className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Premium Özellikler</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Özel uzantılar, daha uzun kullanım süresi ve sınırsız gelen kutusu ile premium avantajlardan yararlanın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Section */}
        <section className="container py-12 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex items-center justify-center md:order-last">
              <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
                <Image
                  src="https://same-assets.com/demo/images/1692882801-dashboard-premium.jpg"
                  alt="Premium Dashboard"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Premium ile Daha Fazlası
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  TempMail Pro Premium ile daha fazla kontrol ve özelliğe sahip olun.
                </p>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Özel alan adı uzantıları</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Sınırsız geçici e-posta adresleri</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Daha uzun e-posta saklama süresi</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Dosya ekleri desteği</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Reklamsız deneyim</span>
                </li>
              </ul>

              <div>
                <Link href="/premium">
                  <Button size="lg" className="font-medium">
                    Premium'a Geç
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sık Sorulan Sorular
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Geçici e-posta hizmetimiz hakkında merak ettiğiniz tüm sorular için cevaplarımız hazır.
            </p>
            <div className="pt-4">
              <Link href="/s-s-s">
                <Button size="lg" variant="outline">
                  Tüm Soruları Gör
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
