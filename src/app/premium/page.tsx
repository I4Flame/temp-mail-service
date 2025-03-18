import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PremiumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Premium Planlarımız
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
                İhtiyacınıza uygun planı seçin ve TempMail Pro'nun tüm avantajlarından yararlanın.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Free Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle>Ücretsiz</CardTitle>
                  <CardDescription>Başlangıç için temel özellikler</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺0</span>
                    <span className="text-gray-500 dark:text-gray-400">/ay</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sınırlı sayıda geçici e-posta (3/gün)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>10 dakika e-posta saklama süresi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Temel alan adı uzantıları</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Basit gelen kutusu</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Reklamlı kullanım</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/">Ücretsiz Kullan</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-primary">
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                    EN POPÜLER
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Bireysel kullanım için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺29</span>
                    <span className="text-gray-500 dark:text-gray-400">/ay</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sınırsız geçici e-posta oluşturma</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>24 saat e-posta saklama süresi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Özel alan adı uzantıları</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Gelişmiş gelen kutusu</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dosya ekleri (5MB'a kadar)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Reklamsız kullanım</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Öncelikli destek</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/odeme?plan=premium">Şimdi Başla</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Business Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle>Kurumsal</CardTitle>
                  <CardDescription>Ekipler ve işletmeler için</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺99</span>
                    <span className="text-gray-500 dark:text-gray-400">/ay</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tüm Premium özellikleri</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>5 kullanıcıya kadar ekip hesabı</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>7 gün e-posta saklama süresi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Özel marka uzantıları</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dosya ekleri (20MB'a kadar)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Gelişmiş güvenlik özellikleri</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>7/24 öncelikli destek</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/odeme?plan=kurumsal">Şimdi Başla</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Premium Avantajları
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
                TempMail Pro Premium ile daha fazla özellik ve esnekliğe sahip olun
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Sınırsız E-postalar</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  İstediğiniz kadar geçici e-posta adresi oluşturun ve dilediğiniz gibi kullanın.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Uzun Saklama Süresi</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  E-postalarınız daha uzun süre sistemimizde kalır, önemli bir mesajı kaçırmazsınız.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Özel Alan Adları</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Premium uzantılara sahip e-posta adresleri ile daha profesyonel görünün.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Dosya Eki Desteği</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Dosya ekli e-postaları alabilir ve indirebilirsiniz.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Reklamsız Deneyim</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Premium hesaplar reklamlar olmadan temiz bir kullanıcı deneyimi sunar.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Öncelikli Destek</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Herhangi bir sorun yaşadığınızda öncelikli destek hizmetimizden yararlanın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Sıkça Sorulan Sorular
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
                Premium üyelik hakkında merak edilenler
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Premium üyeliği nasıl satın alabilirim?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  İstediğiniz planı seçtikten sonra ödeme sayfasına yönlendirileceksiniz. Kredi kartı veya kripto para ile ödeme yapabilirsiniz.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Üyeliğimi istediğim zaman iptal edebilir miyim?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Evet, üyeliğinizi istediğiniz zaman iptal edebilirsiniz. İptal ettikten sonra mevcut ödeme döneminin sonuna kadar premium özelliklerden yararlanmaya devam edersiniz.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Hangi ödeme yöntemlerini kabul ediyorsunuz?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Kredi kartı (Visa, Mastercard, American Express) ve popüler kripto para birimleri (Bitcoin, Ethereum) ile ödeme yapabilirsiniz.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Premium sürüm gerçekten e-postaları daha uzun süre saklıyor mu?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Evet, ücretsiz sürümde e-postalar 10 dakika saklanırken, Premium'da 24 saat, Kurumsal planda ise 7 gün boyunca saklanır.
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Başka sorularınız mı var?
              </p>
              <Button asChild variant="outline">
                <Link href="/iletisim">Bizimle İletişime Geçin</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
