"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-lg font-medium ${
                      isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full" asChild onClick={() => setIsSheetOpen(false)}>
                    <Link href="/contact">Get a Free Consultation</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-1 rounded-md">
              <Search className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl">Ace Elite Detective Service</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium ${
                isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="hidden md:flex items-center gap-2 border rounded-md px-2 py-1">
              <input type="text" placeholder="Search..." className="outline-none bg-transparent w-40" />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
            <Link href="tel:9619623730">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Call us</span>
            </Link>
          </Button>

          <Button className="hidden md:inline-flex" asChild>
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

