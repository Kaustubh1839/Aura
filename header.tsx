"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings, MessageCircle, User, LogOut, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    // Simulate logout
    setTimeout(() => {
      router.push("/")
    }, 500)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 border-b border-lightBlue-200 dark:border-slate-700 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/chat" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-lightBlue-500 dark:bg-lightBlue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">AM</span>
          </div>
          <span className="font-bold text-lightBlue-600 dark:text-lightBlue-300">AuraMind</span>
        </Link>

        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8 bg-lightBlue-100 dark:bg-lightBlue-800">
                <span className="text-lightBlue-600 dark:text-lightBlue-200 text-xs font-bold">JD</span>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/settings")}>
              <User className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/chat")}>
              <MessageCircle className="mr-2 h-4 w-4" />
              <span>Chat</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleTheme}>
              {theme === "dark" ? (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark Mode</span>
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-500 dark:text-red-400">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
