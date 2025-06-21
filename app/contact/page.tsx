"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import DetectiveImage from "@/components/detective-images"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Contact Us
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fadeIn">
                Get in Touch with SeekProof
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Whether you have a specific case in mind or just want to learn more about our services, our team is
                ready to assist you with a confidential consultation.
              </p>
            </div>
            <div className="relative lg:ml-auto">
              <DetectiveImage
                type="mysterious"
                width={500}
                height={500}
                alt="Detective office"
                className="mx-auto rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us directly using the information below for a confidential consultation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">7304679756</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for urgent cases</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">seekproof47@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Main Office</h3>
                    <p className="text-muted-foreground">Office number -16 ,Joseph D'Souza compound, Mogra metro station ,shankarwadi Jogeshwari East , Near Western Express Highway ,Mumbai - 400060</p>
                    <p className="text-sm text-muted-foreground">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-muted-foreground">24/7 emergency services available</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-muted">
                <h3 className="text-xl font-bold mb-4">Service Locations</h3>
                <p className="text-muted-foreground mb-4">We provide services across all of India, including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="p-2 bg-background rounded">Mumbai</div>
                  <div className="p-2 bg-background rounded">Goa</div>
                  <div className="p-2 bg-background rounded">Surat</div>
                  <div className="p-2 bg-background rounded">Kolkata</div>
                  <div className="p-2 bg-background rounded">Indore</div>
                  <div className="p-2 bg-background rounded">Delhi</div>
                  <div className="p-2 bg-background rounded">Bangalore</div>
                  <div className="p-2 bg-background rounded">Chennai</div>
                  <div className="p-2 bg-background rounded">Hyderabad</div>
                  <div className="p-2 bg-background rounded">UP</div>
                  <div className="p-2 bg-background rounded">Bihar</div>
                </div>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-muted-foreground">
                  For a confidential consultation about your case, contact us through any of these methods:
                </p>
              </div>

              <div className="space-y-6">
                <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/5">
                  <h3 className="text-xl font-bold mb-4">Call Us Directly</h3>
                  <p className="text-muted-foreground mb-4">
                    Speak with one of our investigators immediately for urgent matters.
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="tel:7304679756">7304679756</Link>
                  </Button>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/5">
                  <h3 className="text-xl font-bold mb-4">WhatsApp Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us a message on WhatsApp for a quick response to your inquiry.
                  </p>
                  <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                    <Link href="https://wa.me/917304679756" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </Link>
                  </Button>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/5">
                  <h3 className="text-xl font-bold mb-4">Email Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us details about your case for a prompt response within 24 hours.
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="mailto:seekproof47@gmail.com">seekproof47@gmail.com</Link>
                  </Button>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/5">
                  <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule an in-person consultation at our office location.
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="tel:9619623730">Schedule Appointment</Link>
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Confidentiality Guarantee</h3>
                <p className="mb-4">
                  At SeekProof, we understand the sensitive nature of your case. All consultations and investigations
                  are conducted with the utmost confidentiality and discretion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Secure communication channels</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Non-disclosure agreements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Private meeting facilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-5 w-5 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Discreet investigation methods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Uncover the Truth?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed">
                Our team of expert investigators is standing by to assist with your case. Contact us today for a
                confidential consultation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="tel:7304679756">Call Now: 7304679756</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-green-500 text-white hover:bg-green-600" asChild>
                <Link href="https://wa.me/917304679756" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="mailto:seekproof47@gmail.com">Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
