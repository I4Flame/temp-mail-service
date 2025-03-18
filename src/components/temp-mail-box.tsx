"use client"

import { useState } from "react"
import { Copy, RefreshCw } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mesaj tipini tanımlama
interface Message {
  sender: string;
  subject: string;
  time: string;
  preview: string;
}

// Props tipini tanımlama
interface TempMailBoxProps {
  isEnglish?: boolean;
}

// Gerçek uygulamada bu işlem API üzerinden yapılacak
const generateRandomEmail = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890"
  const usernameLength = 10
  const username = Array(usernameLength)
    .fill("")
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join("")

  // Farklı alan adı örnekleri
  const domains = ["tempmail.pro", "temp-box.com", "quickmail.org"]
  const domain = domains[Math.floor(Math.random() * domains.length)]

  return `${username}@${domain}`
}

export default function TempMailBox({ isEnglish = false }: TempMailBoxProps) {
  const [email, setEmail] = useState(generateRandomEmail())
  const [messages, setMessages] = useState<Message[]>([])
  const [activeTab, setActiveTab] = useState("inbox")
  const [isLoading, setIsLoading] = useState(false)

  // Dil metinleri
  const texts = {
    title: isEnglish ? "Your Temporary Email Address" : "Geçici E-posta Adresiniz",
    description: isEnglish
      ? "This email address is valid for 10 minutes. You can extend this time with a premium membership."
      : "Bu e-posta adresi 10 dakika boyunca geçerlidir. Premium üyelik ile bu süreyi uzatabilirsiniz.",
    copied: isEnglish ? "Email address copied!" : "E-posta adresi kopyalandı!",
    newEmailCreated: isEnglish ? "New email address created!" : "Yeni e-posta adresi oluşturuldu!",
    noNewMessages: isEnglish ? "No new messages found." : "Yeni bir mesaj bulunamadı.",
    inbox: isEnglish ? "Inbox" : "Gelen Kutusu",
    settings: isEnglish ? "Settings" : "Ayarlar",
    noMessages: isEnglish ? "You have no messages yet." : "Henüz mesajınız yok.",
    checkMessages: isEnglish ? "Check Messages" : "Mesajları Kontrol Et",
    checking: isEnglish ? "Checking..." : "Kontrol Ediliyor...",
    premiumFeatures: isEnglish ? "Premium Features" : "Premium Özellikler",
    premiumDescription: isEnglish
      ? "Get more features with a premium account"
      : "Premium hesap ile daha fazla özelliğe sahip olun",
    upgradeToPremium: isEnglish ? "Upgrade to Premium" : "Premium'a Yükselt",
    emailSettings: isEnglish ? "Email Settings" : "E-posta Ayarları",
    validityPeriod: isEnglish ? "Validity Period" : "Geçerlilik Süresi",
    maxMessages: isEnglish ? "Maximum Messages" : "Maksimum Mesaj Sayısı",
    maxSize: isEnglish ? "Maximum Size" : "Maksimum Boyut"
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    toast.success(texts.copied)
  }

  const handleRefreshEmail = () => {
    setIsLoading(true)
    // Gerçek uygulamada bu işlem API üzerinden yapılacak
    setTimeout(() => {
      setEmail(generateRandomEmail())
      setMessages([])
      setIsLoading(false)
      toast.success(texts.newEmailCreated)
    }, 500)
  }

  const handleCheckMessages = () => {
    setIsLoading(true)
    // Gerçek uygulamada bu işlem API üzerinden yapılacak
    setTimeout(() => {
      setIsLoading(false)
      toast(texts.noNewMessages)
    }, 500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{texts.title}</CardTitle>
        <CardDescription>
          {texts.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input value={email} readOnly className="font-medium" />
          <Button variant="outline" size="icon" onClick={handleCopyEmail}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleRefreshEmail}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
        </div>

        <Tabs defaultValue="inbox" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="inbox">{texts.inbox}</TabsTrigger>
            <TabsTrigger value="settings">{texts.settings}</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox" className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4">{texts.noMessages}</p>
                <Button
                  variant="outline"
                  onClick={handleCheckMessages}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      {texts.checking}
                    </>
                  ) : (
                    texts.checkMessages
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                {messages.map((message, index) => (
                  <div key={index} className="border rounded-md p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">{message.sender}</p>
                        <p className="text-sm text-muted-foreground">{message.subject}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm">{message.preview}</p>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="settings">
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{texts.premiumFeatures}</h4>
                    <p className="text-sm text-muted-foreground">{texts.premiumDescription}</p>
                  </div>
                  <Button size="sm" variant="default">
                    {texts.upgradeToPremium}
                  </Button>
                </div>
              </div>
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2">{texts.emailSettings}</h4>
                <div className="text-sm text-muted-foreground">
                  <p>{texts.validityPeriod}: <span className="font-medium">10 {isEnglish ? "minutes" : "dakika"}</span></p>
                  <p>{texts.maxMessages}: <span className="font-medium">10</span></p>
                  <p>{texts.maxSize}: <span className="font-medium">10MB</span></p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
