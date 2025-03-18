import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Geçici E-posta Nasıl Çalışır?
              </h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                TempMail Pro ile özel hayatınızı koruyarak internette daha güvenli gezinin
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="container py-12 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://same-assets.com/demo/images/1692882805-step-1.jpg"
                  alt="Adım 1"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                1
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Geçici E-posta Alın</h2>
              <p className="text-gray-500 dark:text-gray-400">
                TempMail Pro ana sayfasında bulunan kutudan rastgele bir geçici e-posta adresi alın.
                Kayıt gerektirmez ve tamamen ücretsizdir. Premium kullanıcılar özel alan adları
                kullanabilir.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div className="md:order-last">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://same-assets.com/demo/images/1692882803-step-2.jpg"
                  alt="Adım 2"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                2
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">E-posta Adresini Kullanın</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Aldığınız geçici e-posta adresini kayıt olmak veya bilgi almak istediğiniz sitelerde
                kullanın. Gerçek e-posta adresinizi paylaşmanıza gerek kalmaz. Adresi tek tıklamayla
                kopyalayabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://same-assets.com/demo/images/1692882807-step-3.jpg"
                  alt="Adım 3"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                3
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">E-postaları Alın</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Geçici e-posta adresinize gelen tüm e-postalar anında gelen kutunuzda görüntülenir.
                Doğrulama kodları, bilgilendirmeler ve diğer e-postaları gelen kutunuzdan kolayca okuyabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div className="md:order-last">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://same-assets.com/demo/images/1692882809-step-4.jpg"
                  alt="Adım 4"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                4
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">İşiniz Bittiğinde Yenileyin</h2>
              <p className="text-gray-500 dark:text-gray-400">
                İşiniz bittiğinde veya yeni bir adres almak istediğinizde "Yenile" düğmesine tıklayarak
                yeni bir geçici e-posta adresi alabilirsiniz. Ücretsiz sürümde e-postalar 10 dakika,
                Premium'da ise 24 saat boyunca saklanır.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container space-y-12">
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Geçici E-posta Kullanmanın Avantajları
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Neden gerçek e-posta adresinizi her yerde paylaşmamalısınız?
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Gizlilik Koruması</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Gerçek e-posta adresinizi paylaşmadığınız için kimlik bilgileriniz korunur.
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Spam Engelleme</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  İstenmeyen e-postalar gerçek gelen kutunuza ulaşamaz.
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Veri Güvenliği</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Otomatik silinen e-postalar sayesinde verileriniz güvende kalır.
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Hesap Güvenliği</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Deneme amaçlı kayıtlarda ana hesabınızı riske atmazsınız.
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Hız ve Kolaylık</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Anında kullanıma hazır, kayıt gerektirmeyen pratik bir çözüm.
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-2">Tamamen Ücretsiz</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Temel özelliklerin tümü ücretsiz olarak sunulmaktadır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Hemen Kullanmaya Başlayın
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                TempMail Pro ile gizliliğinizi koruyun ve spam e-postalardan kurtulun.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button asChild size="lg">
                  <Link href="/">
                    Ücretsiz Başlayın
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/premium">
                    Premium Özellikleri Keşfedin
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
