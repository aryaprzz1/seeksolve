import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Search,
  Shield,
  UserSearch,
  FileSearch,
  Fingerprint,
  Camera,
  Building,
  Briefcase,
  Eye,
  Lock,
  Map,
  AlertCircle,
  Users,
  HeartPulse,
  Banknote,
  FileText,
  User,
  Home,
  Gavel,
  Glasses,
  Headphones,
  Landmark,
  ShieldAlert,
} from "lucide-react"
import DetectiveImage from "@/components/detective-images"

export default function Services() {
  // Organize services into categories for better navigation
  const serviceCategories = [
    {
      title: "Personal Investigations",
      services: [
        {
          icon: <UserSearch className="h-10 w-10 text-primary" />,
          title: "Missing Persons",
          description:
            "Our specialized team uses advanced techniques and resources to locate missing individuals quickly and discreetly.",
          slug: "missing-persons",
        },
        {
          icon: <User className="h-10 w-10 text-primary" />,
          title: "Personal Investigation",
          description:
            "Tailored investigative services for personal matters requiring discretion and professional expertise.",
          slug: "personal-investigation",
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Marital Investigations",
          description:
            "Discreet and thorough investigations for marital concerns with sensitivity and professionalism.",
          slug: "marital-investigations",
        },
        {
          icon: <HeartPulse className="h-10 w-10 text-primary" />,
          title: "Post Matrimonial Investigations",
          description:
            "Comprehensive investigations for issues arising after marriage, including infidelity and asset concealment.",
          slug: "post-matrimonial-investigations",
        },
        {
          icon: <Glasses className="h-10 w-10 text-primary" />,
          title: "Lady Detectives",
          description: "Female investigators specializing in cases requiring a woman's perspective and approach.",
          slug: "lady-detectives",
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Women Detective",
          description: "Professional female investigators for sensitive cases requiring specialized expertise.",
          slug: "women-detective",
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Child Monitoring",
          description: "Professional monitoring services to ensure the safety and well-being of children.",
          slug: "child-monitoring",
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Child Custody Issues",
          description: "Investigative support for child custody disputes, providing evidence for legal proceedings.",
          slug: "child-custody-issues",
        },
        {
          icon: <AlertCircle className="h-10 w-10 text-primary" />,
          title: "Blackmailing Investigation",
          description: "Expert investigation of blackmail attempts to identify perpetrators and gather evidence.",
          slug: "blackmailing-investigation",
        },
      ],
    },
    {
      title: "Corporate Services",
      services: [
        {
          icon: <Shield className="h-10 w-10 text-primary" />,
          title: "Corporate Security",
          description: "Comprehensive security solutions to protect your business interests and assets.",
          slug: "corporate-security",
        },
        {
          icon: <Building className="h-10 w-10 text-primary" />,
          title: "Corporate Cases",
          description: "Specialized investigations for corporate matters requiring professional expertise.",
          slug: "corporate-cases",
        },
        {
          icon: <Building className="h-10 w-10 text-primary" />,
          title: "Corporate Due Diligence",
          description: "Thorough background research and verification for business transactions and partnerships.",
          slug: "corporate-due-diligence",
        },
        {
          icon: <AlertCircle className="h-10 w-10 text-primary" />,
          title: "Corporate Fraud Investigation",
          description: "Specialized investigations to uncover and document corporate fraud and misconduct.",
          slug: "corporate-fraud-investigation",
        },
        {
          icon: <Building className="h-10 w-10 text-primary" />,
          title: "Corporate Legal",
          description: "Legal support services specifically tailored for corporate clients and their unique needs.",
          slug: "corporate-legal",
        },
        {
          icon: <FileSearch className="h-10 w-10 text-primary" />,
          title: "Background Checks",
          description: "Thorough investigation of personal and professional histories for informed decision-making.",
          slug: "background-checks",
        },
        {
          icon: <FileSearch className="h-10 w-10 text-primary" />,
          title: "Background Investigation",
          description:
            "In-depth investigations into individuals' histories, verifying information and uncovering potential issues.",
          slug: "background-investigation",
        },
        {
          icon: <FileSearch className="h-10 w-10 text-primary" />,
          title: "Background Verification",
          description: "Verification services for employment, education, and professional credentials.",
          slug: "background-verification",
        },
        {
          icon: <FileSearch className="h-10 w-10 text-primary" />,
          title: "Pre/Post Employment Verifications",
          description: "Comprehensive verification services for potential and current employees.",
          slug: "employment-verifications",
        },
        {
          icon: <Banknote className="h-10 w-10 text-primary" />,
          title: "Financial Background",
          description: "Detailed investigations into financial histories and current financial status.",
          slug: "financial-background",
        },
      ],
    },
    {
      title: "Legal & Forensic Services",
      services: [
        {
          icon: <Fingerprint className="h-10 w-10 text-primary" />,
          title: "Analysis",
          description: "Expert examination of evidence using cutting-edge technology for legal proceedings.",
          slug: "forensic-analysis",
        },
        {
          icon: <Fingerprint className="h-10 w-10 text-primary" />,
          title: "Services",
          description: "Comprehensive forensic services including digital, document, and physical evidence analysis.",
          slug: "forensic-services",
        },
        {
          icon: <Gavel className="h-10 w-10 text-primary" />,
          title: "Legal Assistance",
          description: "Professional support for legal matters requiring investigative expertise.",
          slug: "legal-assistance",
        },
        {
          icon: <Gavel className="h-10 w-10 text-primary" />,
          title: "Legal Cases",
          description: "Investigative support for various types of legal cases and proceedings.",
          slug: "legal-cases",
        },
        {
          icon: <Gavel className="h-10 w-10 text-primary" />,
          title: "Legal Consultancy",
          description: "Expert consultation services for legal matters requiring investigative insight.",
          slug: "legal-consultancy",
        },
        {
          icon: <Briefcase className="h-10 w-10 text-primary" />,
          title: "Legal Support",
          description: "Comprehensive investigative support for attorneys and legal professionals.",
          slug: "legal-support",
        },
        {
          icon: <Briefcase className="h-10 w-10 text-primary" />,
          title: "Litigation Support",
          description: "Specialized investigative services to support litigation processes and outcomes.",
          slug: "litigation-support",
        },
        {
          icon: <Gavel className="h-10 w-10 text-primary" />,
          title: "Criminal Law",
          description: "Investigative support for criminal law cases, providing crucial evidence and insights.",
          slug: "criminal-law",
        },
        {
          icon: <AlertCircle className="h-10 w-10 text-primary" />,
          title: "Criminal Cases",
          description: "Professional investigation services for criminal cases requiring expert analysis.",
          slug: "criminal-cases",
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Divorce Cases",
          description: "Specialized investigations for divorce proceedings, gathering evidence with discretion.",
          slug: "divorce-cases",
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Divorce Investigations",
          description: "Thorough investigations to uncover relevant information for divorce proceedings.",
          slug: "divorce-investigations",
        },
        {
          icon: <Home className="h-10 w-10 text-primary" />,
          title: "Property Cases",
          description: "Investigative services for property-related disputes and verification.",
          slug: "property-cases",
        },
        {
          icon: <Home className="h-10 w-10 text-primary" />,
          title: "Property Disputes",
          description: "Professional investigation of property ownership disputes and related issues.",
          slug: "property-disputes",
        },
        {
          icon: <AlertCircle className="h-10 w-10 text-primary" />,
          title: "Murder Investigation",
          description: "Expert investigation services to assist in solving murder cases and gathering evidence.",
          slug: "murder-investigation",
        },
      ],
    },
    {
      title: "Surveillance & Security",
      services: [
        {
          icon: <Camera className="h-10 w-10 text-primary" />,
          title: "Surveillance",
          description: "Discreet monitoring and documentation of activities and behaviors.",
          slug: "surveillance",
        },
        {
          icon: <Search className="h-10 w-10 text-primary" />,
          title: "Private Investigations",
          description: "Customized investigative services for personal and legal matters.",
          slug: "private-investigations",
        },
        {
          icon: <Search className="h-10 w-10 text-primary" />,
          title: "Private Detective Agency",
          description: "Full-service detective agency providing comprehensive investigative solutions.",
          slug: "private-detective-agency",
        },
        {
          icon: <Search className="h-10 w-10 text-primary" />,
          title: "Private Detective Company",
          description: "Professional detective services with a team of experienced investigators.",
          slug: "private-detective-company",
        },
        {
          icon: <Eye className="h-10 w-10 text-primary" />,
          title: "Undercover Operations",
          description:
            "Covert investigations to gather intelligence on internal theft, fraud, or other illicit activities.",
          slug: "undercover-operations",
        },
        {
          icon: <Eye className="h-10 w-10 text-primary" />,
          title: "Sting Operations",
          description: "Carefully planned operations to catch perpetrators in the act and gather evidence.",
          slug: "sting-operations",
        },
        {
          icon: <ShieldAlert className="h-10 w-10 text-primary" />,
          title: "Executive Protection",
          description: "Specialized security services for executives and high-profile individuals.",
          slug: "executive-protection",
        },
        {
          icon: <ShieldAlert className="h-10 w-10 text-primary" />,
          title: "Personal Security",
          description: "Tailored security solutions to protect individuals and their families.",
          slug: "personal-security",
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Security Officers",
          description: "Professional security personnel for various security needs and situations.",
          slug: "security-officers",
        },
        {
          icon: <Lock className="h-10 w-10 text-primary" />,
          title: "Bug Sweep",
          description: "Technical surveillance countermeasures to detect and remove electronic eavesdropping devices.",
          slug: "bug-sweep",
        },
        {
          icon: <Camera className="h-10 w-10 text-primary" />,
          title: "Spy Gadgets",
          description: "Advanced surveillance equipment for legal investigative purposes.",
          slug: "spy-gadgets",
        },
        {
          icon: <Map className="h-10 w-10 text-primary" />,
          title: "Skip Tracing",
          description: "Specialized techniques to locate individuals who have disappeared or are avoiding contact.",
          slug: "skip-tracing",
        },
      ],
    },
    {
      title: "Specialized Services",
      services: [
        {
          icon: <Building className="h-10 w-10 text-primary" />,
          title: "Due Diligence",
          description: "Comprehensive background research for business decisions and partnerships.",
          slug: "due-diligence",
        },
        {
          icon: <FileText className="h-10 w-10 text-primary" />,
          title: "Insurance Claims Investigation",
          description: "Thorough investigation of insurance claims to verify legitimacy and detect fraud.",
          slug: "insurance-claims-investigation",
        },
        {
          icon: <Landmark className="h-10 w-10 text-primary" />,
          title: "Counterfeit/Copyright Investigation",
          description: "Specialized investigations to identify and document intellectual property violations.",
          slug: "counterfeit-copyright-investigation",
        },
        {
          icon: <Landmark className="h-10 w-10 text-primary" />,
          title: "IPR Investigation",
          description: "Comprehensive investigations of intellectual property rights violations and infringements.",
          slug: "ipr-investigation",
        },
        {
          icon: <Headphones className="h-10 w-10 text-primary" />,
          title: "Counseling Services",
          description: "Professional counseling services to support clients through difficult situations.",
          slug: "counseling-services",
        },
        {
          icon: <Building className="h-10 w-10 text-primary" />,
          title: "Management Services",
          description: "Professional management services for various organizational needs.",
          slug: "management-services",
        },
        {
          icon: <Glasses className="h-10 w-10 text-primary" />,
          title: "Invigilation Services",
          description: "Professional supervision services for examinations and testing environments.",
          slug: "invigilation-services",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Our Services
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fadeIn">
                SeekProof Professional Services
              </h1>
              <p className="text-muted-foreground md:text-xl">
                SeekProof offers a comprehensive range of investigative services for individuals, businesses, and legal
                professionals. Each service is delivered with the highest standards of professionalism, discretion, and
                ethical conduct.
              </p>
            </div>
            <div className="relative lg:ml-auto">
              <DetectiveImage
                type="magnifying"
                width={600}
                height={400}
                alt="Detective investigating"
                className="mx-auto rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`w-full py-12 md:py-24 lg:py-32 ${categoryIndex % 2 === 1 ? "bg-muted" : ""}`}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-primary hover:bg-primary" variant="secondary">
                  {category.title}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{category.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our specialized {category.title.toLowerCase()} delivered with precision and confidentiality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/5"
                >
                  <div className="p-6 bg-muted flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Our Process
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our systematic approach ensures thorough investigations and clear communication throughout the process.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl space-y-8 py-12">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "We begin with a confidential consultation to understand your needs, objectives, and the specific details of your case.",
              },
              {
                step: "2",
                title: "Case Assessment",
                description:
                  "Our team evaluates your case, develops a strategic investigation plan, and provides a clear outline of services and costs.",
              },
              {
                step: "3",
                title: "Investigation",
                description:
                  "Our investigators execute the plan using appropriate techniques and resources, adapting as needed based on findings.",
              },
              {
                step: "4",
                title: "Documentation & Analysis",
                description: "All evidence and information is meticulously documented and analyzed by our expert team.",
              },
              {
                step: "5",
                title: "Reporting",
                description:
                  "We provide comprehensive reports detailing our findings, supported by evidence and documentation suitable for legal proceedings if required.",
              },
              {
                step: "6",
                title: "Follow-up Support",
                description:
                  "Our team remains available for clarification, testimony, or additional investigation as needed.",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="font-bold">{step.step}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our services and investigative process.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 py-12">
            {[
              {
                question: "Are your services confidential?",
                answer:
                  "Absolutely. We maintain strict confidentiality for all clients and cases. Our investigators are bound by professional ethics and confidentiality agreements.",
              },
              {
                question: "Are your investigators licensed?",
                answer:
                  "Yes, all our investigators are licensed in accordance with state regulations and many hold additional professional certifications in their specialized fields.",
              },
              {
                question: "How much do your services cost?",
                answer:
                  "Our fees vary depending on the complexity of the case, resources required, and time frame. We provide detailed cost estimates during the initial consultation.",
              },
              {
                question: "How long will my investigation take?",
                answer:
                  "The duration depends on the nature and complexity of your case. Some investigations can be completed in days, while others may take weeks or months. We provide timeline estimates during your consultation.",
              },
              {
                question: "Can the evidence you collect be used in court?",
                answer:
                  "Yes, we conduct all investigations in accordance with legal requirements to ensure evidence is admissible in court. Our investigators can also provide expert testimony when needed.",
              },
              {
                question: "Do you work with attorneys?",
                answer:
                  "Yes, we frequently collaborate with legal professionals to provide investigative support for various types of cases, from civil litigation to criminal defense.",
              },
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
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
                Ready to Begin Your Investigation?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed">
                Contact us today for a confidential consultation. Our expert investigators are standing by to assist
                with your case.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="tel:9619623730">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Call Pradeep: 9619623730
                </Button>
              </Link>
              <Link href="https://wa.me/919619623730" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-green-500 text-white hover:bg-green-600">
                  WhatsApp Us
                </Button>
              </Link>
              <Link href="/about-us">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
