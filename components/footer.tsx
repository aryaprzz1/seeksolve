import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d2.jpeg-4VYRrmVYUFDAn5pPGx4K9GpneI0VDo.png"
                  width={40}
                  height={40}
                  alt="SeekProof Logo"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg">SeekProof</span>
            </Link>
            <p className="text-muted-foreground">
              Professional investigation services with the highest standards of integrity, confidentiality, and results.
            </p>
            <div className="flex space-x-4 animate-fadeIn">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-green-500" asChild>
                <Link href="https://wa.me/919619623730" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/missing-persons" className="text-muted-foreground hover:text-foreground">
                  Missing Persons
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-security" className="text-muted-foreground hover:text-foreground">
                  Corporate Security
                </Link>
              </li>
              <li>
                <Link href="/services/background-checks" className="text-muted-foreground hover:text-foreground">
                  Background Checks
                </Link>
              </li>
              <li>
                <Link href="/services/forensic-analysis" className="text-muted-foreground hover:text-foreground">
                  Forensic Analysis
                </Link>
              </li>
              <li>
                <Link href="/services/surveillance" className="text-muted-foreground hover:text-foreground">
                  Surveillance
                </Link>
              </li>
              <li>
                <Link href="/services/private-investigations" className="text-muted-foreground hover:text-foreground">
                  Private Investigations
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Pradeep Saini: 9619623730
                  <br />
                  Dilip Chauhan: 8850926281
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">seekproof@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  ROOM NO.16, JOSEPH D`SOUZA CHAWL,SHANKARWADI, W E HIGHWAY ROAD, JOGESHWARI (E) , MUMBAI .400060
                </span>
              </li>
            </ul>

            <div className="space-y-2">
              <h4 className="font-medium">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="max-w-lg flex-1" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SeekProof. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">Licensed Private Investigation Agency</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
