import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const faqs = [
  {
    question: "TempMail Pro nedir?",
    answer: "TempMail Pro, geçici ve anonim e-posta adresleri oluşturmanıza olanak tanıyan bir hizmettir. Gerçek e-posta adresinizi paylaşmak istemediğiniz sitelere kaydolmak, spam e-postaları engellemek ve çevrimiçi gizliliğinizi korumak için idealdir."
  },
  {
    question: "Geçici e-posta hizmeti tamamen ücretsiz mi?",
    answer: "Evet, TempMail Pro'nun temel özellikleri tamamen ücretsizdir. Günlük sınırlı sayıda e-posta oluşturabilir, 10 dakika saklama süresiyle e-postaları alabilir ve temel özellikleri kullanabilirsiniz. Daha gelişmiş özellikler için Premium planlarımız mevcuttur."
  },
  {
    question: "Bir e-posta hesabı ne kadar süreyle aktif kalır?",
    answer: "Ücretsiz sürümde e-posta adresiniz 10 dakika boyunca aktif kalır ve gelen tüm e-postalar bu süre içinde görüntülenir. Premium hesaplarda ise bu süre 24 saate, Kurumsal hesaplarda 7 güne kadar uzayabilmektedir."
  },
  {
    question: "Geçici e-posta adresimi başkalarıyla paylaşabilir miyim?",
    answer: "Evet, geçici e-posta adresinizi başkalarıyla paylaşabilirsiniz. Ancak, bu e-posta adresi herkes tarafından erişilebilir olduğu için özel veya hassas bilgiler içeren e-postalar için kullanılmamalıdır."
  },
  {
    question: "TempMail Pro'nun Premium özellikleri nelerdir?",
    answer: "Premium özelliklere sınırsız geçici e-posta oluşturma, 24 saate kadar e-posta saklama süresi, özel alan adı uzantıları, dosya eki desteği, reklamsız kullanım ve öncelikli destek dahildir. Daha detaylı bilgi için Premium sayfamızı ziyaret edebilirsiniz."
  },
  {
    question: "Geçici e-postayı kullanırken güvenlik riski var mı?",
    answer: "TempMail Pro, e-postalarınızı güvenli bir şekilde almanızı sağlar. Ancak, her çevrimiçi hizmette olduğu gibi, hassas veya kişisel bilgi içeren e-postalar için kalıcı ve güvenli bir e-posta hizmeti kullanmanızı öneririz. Geçici e-posta hizmetleri genellikle kayıt, doğrulama veya deneme hesapları için idealdir."
  },
  {
    question: "Aldığım e-postaları kalıcı olarak saklayabilir miyim?",
    answer: "Ücretsiz sürümde e-postalar 10 dakika sonra otomatik olarak silinir. Premium ve Kurumsal hesaplarda ise daha uzun süre saklanabilir. Ancak, önemli e-postaları kalıcı olarak saklamak için içeriklerini kopyalayıp kaydetmenizi öneririz."
  },
  {
    question: "Mobil cihazlar için TempMail Pro uygulaması var mı?",
    answer: "Şu an için TempMail Pro'nun mobil uygulaması bulunmamaktadır, ancak web sitemiz tam olarak mobil uyumludur ve tüm cihazlarda sorunsuz çalışır. Gelecekte mobil uygulama geliştirmeyi planlıyoruz."
  },
  {
    question: "Premium üyeliği nasıl iptal edebilirim?",
    answer: "Premium üyeliğinizi hesap ayarlarınızdan kolayca iptal edebilirsiniz. İptal işleminiz onaylandıktan sonra, mevcut ödeme döneminin sonuna kadar premium özellikleri kullanmaya devam edebilirsiniz."
  },
  {
    question: "TempMail Pro ile oluşturulan e-posta adreslerine gönderilen e-postalar gerçek midir?",
    answer: "Evet, oluşturduğunuz geçici e-posta adresleri tamamen gerçektir ve gerçek e-postaları alabilir. Bu e-postalar sistemimiz tarafından gerçek zamanlı olarak görüntülenir."
  },
  {
    question: "Hangi alan adı uzantılarını kullanabiliyorum?",
    answer: "Ücretsiz kullanıcılar temel alan adı uzantılarına erişebilirken (tempmail.pro, temp-box.com, quickmail.org), Premium ve Kurumsal üyeler daha profesyonel görünümlü ve güvenilir uzantılara sahip olabilirler."
  },
  {
    question: "E-posta adresim artık çalışmıyor, ne yapmalıyım?",
    answer: "Ücretsiz sürümde e-posta adresiniz 10 dakika sonra otomatik olarak devre dışı kalır. Yeni bir e-posta adresi oluşturmak için sayfayı yenilemeniz veya 'Yenile' düğmesine tıklamanız yeterlidir."
  }
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sık Sorulan Sorular
              </h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                TempMail Pro hakkında merak ettiğiniz her şey
              </p>
            </div>
          </div>
        </section>

        <section className="container pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-lg border">
              {faqs.map((faq, index) => (
                <details key={index} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium">{faq.question}</h2>
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:-rotate-180" />
                  </summary>
                  <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center space-y-6">
              <p className="text-gray-500 dark:text-gray-400">
                Sorunuza yanıt bulamadınız mı?
              </p>
              <Button asChild>
                <Link href="/iletisim">Bizimle İletişime Geçin</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Geçici E-posta Kullanım İpuçları
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                TempMail Pro hizmetimizden en iyi şekilde faydalanmanız için öneriler
              </p>

              <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 text-left">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Deneme Üyelikleri</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ücretsiz deneme süreleriyle hizmetleri test etmek için geçici e-posta kullanın.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Forum Kayıtları</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Forumlara kayıt olurken spam almamak için geçici e-posta tercih edin.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">İndirim Kuponları</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    E-posta ile gönderilen indirim kuponları için geçici adresleri kullanabilirsiniz.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Tek Seferlik İşlemler</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sadece bir kez kullanacağınız sitelerde kayıt için idealdir.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Button asChild variant="outline">
                  <Link href="/nasil-calisir">
                    Nasıl Çalıştığını Öğrenin
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
