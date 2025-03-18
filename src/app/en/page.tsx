import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import TempMailBox from "@/components/temp-mail-box"

export default function HomePage() {
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
                  Secure and Fast Temporary Email Service
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Protect yourself from spam and unwanted emails without sharing your real email address.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/en/kayit">
                  <Button size="lg" className="font-medium">
                    Start Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/en/premium">
                  <Button size="lg" variant="outline">
                    Explore Premium
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <div className="w-full max-w-md rounded-lg border bg-background p-4 shadow-sm">
                <TempMailBox isEnglish={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why TempMail Pro?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Meet all your needs with our user-friendly and secure temporary email service.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-background p-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Fast and Easy</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Start using instantly without registration. Get a new temporary email address with just one click.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">100% Secure</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Protect your privacy. Sign up for online services without sharing your real email address.
                </p>
              </div>

              <div className="rounded-lg border bg-background p-6">
                <Check className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Premium Features</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Enjoy premium benefits with custom extensions, longer retention period, and unlimited inbox.
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
                  More with Premium
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Get more control and features with TempMail Pro Premium.
                </p>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Custom domain extensions</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Unlimited temporary email addresses</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Longer email retention period</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>File attachments support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Ad-free experience</span>
                </li>
              </ul>

              <div>
                <Link href="/en/premium">
                  <Button size="lg" className="font-medium">
                    Go Premium
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
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Find answers to all your questions about our temporary email service.
            </p>
            <div className="pt-4">
              <Link href="/en/s-s-s">
                <Button size="lg" variant="outline">
                  View All Questions
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
