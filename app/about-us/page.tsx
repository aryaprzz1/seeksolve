import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Shield, Users, CheckCircle, Calendar } from "lucide-react"
import DetectiveImage from "@/components/detective-images"
import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                About Us
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fadeIn">SeekProof: Our Story</h1>
              <p className="text-muted-foreground md:text-xl">
                Founded in 2013, SeekProof has grown to become one of the most trusted investigative firms in India,
                with a reputation for excellence, integrity, and results.
              </p>
            </div>
            <div className="relative lg:ml-auto">
              <DetectiveImage
                type="mysterious"
                width={500}
                height={500}
                alt="Detective silhouette"
                className="mx-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Our Mission
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Committed to Truth and Justice</h2>
              <p className="text-muted-foreground md:text-xl">
                Our mission is to provide our clients with accurate, actionable intelligence through ethical
                investigative practices, enabling them to make informed decisions and find resolution.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Integrity</h3>
                    <p className="text-muted-foreground">
                      We conduct all investigations with the highest ethical standards, ensuring all evidence is
                      obtained legally and properly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Confidentiality</h3>
                    <p className="text-muted-foreground">
                      We maintain strict confidentiality protocols to protect our clients' privacy and sensitive
                      information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Excellence</h3>
                    <p className="text-muted-foreground">
                      We strive for excellence in every case, utilizing the latest technology and investigative
                      techniques to deliver superior results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <DetectiveImage
                type="magnifying"
                width={600}
                height={600}
                alt="Detective with magnifying glass"
                className="mx-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Our History
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">13 Years of Investigative Excellence</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From our humble beginnings to becoming an industry leader, our journey has been defined by dedication to
                our clients and commitment to the truth.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            {[
              {
                year: "2013",
                title: "Foundation",
                description:
                  "SeekProof was founded by former police officer Rajesh Verma with a small team of three investigators.",
              },
              {
                year: "2015",
                title: "Expansion",
                description:
                  "Opened our second office and expanded our services to include corporate security and digital forensics.",
              },
              {
                year: "2017",
                title: "Technology Integration",
                description:
                  "Pioneered the use of advanced surveillance technology and digital investigation techniques in private detective work.",
              },
              {
                year: "2018",
                title: "National Recognition",
                description:
                  "Received the Indian Association of Private Detectives Award for Excellence in Private Investigation.",
              },
              {
                year: "2021",
                title: "National Reach",
                description:
                  "Established a network of partners across India, allowing us to conduct investigations nationwide.",
              },
              {
                year: "Today",
                title: "Industry Leader",
                description:
                  "Now with operations in major cities across India and a team of over 50 specialized investigators, we continue to set the standard for investigative excellence.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold">{milestone.year}</h3>
                    <div className="h-px flex-1 bg-border" />
                    <span className="font-medium">{milestone.title}</span>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Our Team
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Expert Investigators</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team consists of former law enforcement officers, military specialists, and certified investigators
                with decades of combined experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Pradeep Saini",
                role: "Founder & Chief Investigator",
                bio: "Former police officer with 13+ years of investigative experience. Specializes in complex fraud cases and high-profile investigations.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Anjali Sharma",
                role: "Director of Digital Forensics",
                bio: "Certified Digital Forensics Examiner with expertise in cybercrime investigations and electronic evidence recovery.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dilip Chauhan",
                role: "Head of Surveillance Operations",
                bio: "Former military intelligence officer specializing in covert surveillance and counter-surveillance techniques.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Neha Gupta",
                role: "Corporate Security Specialist",
                bio: "Expert in corporate investigations, background checks, and risk assessment with 15 years of experience.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Rahul Verma",
                role: "Missing Persons Specialist",
                bio: "Former police detective with specialized training in locating missing persons and reuniting families.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Meera Patel",
                role: "Forensic Analyst",
                bio: "Certified forensic specialist with expertise in evidence collection, preservation, and analysis.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  width={150}
                  height={150}
                  alt={member.name}
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Our Credentials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Licensed, Certified, and Trusted
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Ace Elite Detective Service maintains all required state and federal licenses, and our investigators
                hold numerous professional certifications in their specialized fields.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 border rounded-lg bg-background">
                  <Award className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-bold text-center">Licensed Private Investigation Agency</h3>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg bg-background">
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-bold text-center">Certified Fraud Examiners</h3>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg bg-background">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-bold text-center">Professional Investigators Association</h3>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg bg-background">
                  <Award className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-bold text-center">Digital Forensics Certification</h3>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="Agency credentials and awards"
                className="mx-auto rounded-lg object-cover"
              />
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
                Ready to Work with Our Expert Team?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed">
                Contact us today for a confidential consultation. Our investigators are ready to assist with your case.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="tel:7304679756">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  7304679756
                </Button>
              </Link>
              <Link href="https://wa.me/917304679756" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-green-500 text-white hover:bg-green-600">
                  WhatsApp Us
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
