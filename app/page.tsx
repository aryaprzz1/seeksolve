import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Shield, UserSearch, FileSearch, Fingerprint, Camera, ChevronRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary hover:bg-primary text-white" variant="secondary">
                Professional & Confidential
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Elite Detective Services
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Uncovering the truth with precision and discretion. Our team of expert investigators are ready to solve
                your most complex cases.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get a Free Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src=""
                width={500}
                height={500}
                alt="Detective at work"
                className="mx-auto rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Our Expertise
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Detective Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From private investigations to corporate security, our team delivers results with the highest level of
                professionalism and confidentiality.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                icon: <UserSearch className="h-10 w-10 text-primary" />,
                title: "Missing Persons",
                description: "Specialized techniques to locate missing individuals with speed and discretion.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Corporate Security",
                description: "Comprehensive security solutions to protect your business interests.",
              },
              {
                icon: <FileSearch className="h-10 w-10 text-primary" />,
                title: "Background Checks",
                description: "Thorough investigation of personal and professional histories.",
              },
              {
                icon: <Fingerprint className="h-10 w-10 text-primary" />,
                title: "Forensic Analysis",
                description: "Expert examination of evidence using cutting-edge technology.",
              },
              {
                icon: <Camera className="h-10 w-10 text-primary" />,
                title: "Surveillance",
                description: "Discreet monitoring and documentation of activities and behaviors.",
              },
              {
                icon: <Search className="h-10 w-10 text-primary" />,
                title: "Private Investigations",
                description: "Customized investigative services for personal and legal matters.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="p-2 rounded-full bg-primary/10">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground text-center">{service.description}</p>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                25+ Years of Investigative Excellence
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Our team of former law enforcement professionals, military specialists, and certified investigators
                brings unparalleled expertise to every case.
              </p>
              <ul className="space-y-2">
                {[
                  "Licensed & Insured Professionals",
                  "Cutting-edge Technology & Resources",
                  "Strict Confidentiality Protocols",
                  "24/7 Availability for Urgent Cases",
                  "Detailed Documentation & Reporting",
                  "Court-admissible Evidence Collection",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about-us">
                <Button className="mt-4">About Our Agency</Button>
              </Link>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src=""
                width={600}
                height={600}
                alt="Detective team"
                className="mx-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Client Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've helped hundreds of clients find answers and resolution. Here's what they have to say about our
                services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[
              {
                quote:
                  "Ace Elite Detective Service helped me locate a long-lost family member when all other avenues had failed. Their persistence and professionalism were outstanding.",
                author: "Rajesh Sharma",
                role: "Private Client",
              },
              {
                quote:
                  "As a corporate security director, I've worked with many agencies, but none match the thoroughness and discretion of Ace Elite. They've become our go-to resource for sensitive matters.",
                author: "Vikram Mehta",
                role: "Corporate Security Director",
              },
              {
                quote:
                  "The background checks provided by Ace Elite Detective Service saved our company from a potentially disastrous hire. Their attention to detail uncovered information others missed.",
                author: "Priya Patel",
                role: "HR Executive",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between space-y-4 border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
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
                Contact us today for a confidential consultation. Our expert investigators are standing by to assist
                with your case.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="tel:9619623730">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Call Now: 9619623730
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

