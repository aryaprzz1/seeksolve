import Link from "next/link"
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
              <div className="bg-primary text-primary-foreground p-1 rounded-md">
                <Phone className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg">Ace Elite Detective Service</span>
            </Link>
            <p className="text-muted-foreground">
              Professional investigation services with the highest standards of integrity, confidentiality, and results.
            </p>
            <div className="flex space-x-4">
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
                <span className="text-muted-foreground">aceelitedetectiveservices@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  003, Ground, Building, Shivai, 9, Prabhat Colony Rd,
                  <br />
                  Santacruz East, Mumbai, Maharashtra 400055
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
              &copy; {new Date().getFullYear()} Ace Elite Detective Service. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">Licensed Private Investigation Agency</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

