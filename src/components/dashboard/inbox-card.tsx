"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MoreHorizontal,
  RefreshCw,
  Trash
} from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface InboxCardProps {
  id: string;
  email: string;
  messageCount: number;
  created: string;
  expiresIn: string;
  isPremium?: boolean;
  isEnglish?: boolean;
}

export function InboxCard({
  id,
  email,
  messageCount,
  created,
  expiresIn,
  isPremium = false,
  isEnglish = false
}: InboxCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const langPrefix = isEnglish ? "/en" : ""

  // Dil bağlamına göre metinleri ayarlama
  const texts = {
    copy: isEnglish ? "Copy" : "Kopyala",
    copied: isEnglish ? "Email address copied!" : "E-posta adresi kopyalandı!",
    open: isEnglish ? "Open" : "Aç",
    refresh: isEnglish ? "Refresh" : "Yenile",
    delete: isEnglish ? "Delete" : "Sil",
    premium: isEnglish ? "Premium" : "Premium",
    messages: isEnglish ? "messages" : "mesaj",
    created: isEnglish ? "Created" : "Oluşturulma",
    expiresIn: isEnglish ? "Expires in" : "Geçerlilik süresi",
    view: isEnglish ? "View Inbox" : "Gelen Kutusu"
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    toast.success(texts.copied)
  }

  const handleRefresh = () => {
    setIsLoading(true)
    // Gerçek uygulamada API çağrısı yapılacak
    setTimeout(() => {
      setIsLoading(false)
      toast.success(isEnglish ? "Inbox refreshed!" : "Gelen kutusu yenilendi!")
    }, 1000)
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="truncate text-base font-medium">
              {email}
            </CardTitle>
            <CardDescription>
              {messageCount} {texts.messages}
            </CardDescription>
          </div>
          {isPremium && (
            <Badge variant="outline" className="ml-2 bg-primary/10">
              {texts.premium}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-sm pb-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{texts.created}: {created}</span>
          </div>
          <div className="flex items-center">
            <RefreshCw className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{texts.expiresIn}: {expiresIn}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`${langPrefix}/dashboard/inbox/${id}`}>
          <Button variant="secondary" size="sm">
            <Mail className="mr-2 h-4 w-4" />
            {texts.view}
          </Button>
        </Link>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopyEmail}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                <span>{texts.copy}</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ExternalLink className="mr-2 h-4 w-4" />
                <span>{texts.open}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                <span>{texts.delete}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  )
}
