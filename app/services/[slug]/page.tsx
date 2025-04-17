import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
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
  CheckCircle,
  Clock,
  ArrowLeft,
  AlertCircle,
} from "lucide-react"

// Update the case studies with Indian names and contexts
const services = [
  {
    icon: <UserSearch className="h-10 w-10 text-primary" />,
    title: "Missing Persons",
    description:
      "Our specialized team uses advanced techniques and resources to locate missing individuals quickly and discreetly. We work with families, legal representatives, and organizations to reunite loved ones.",
    longDescription:
      "When someone goes missing, time is of the essence. Our Missing Persons investigations combine traditional detective work with cutting-edge technology to locate individuals who have disappeared, whether voluntarily or involuntarily. We understand the emotional toll these situations take on families and loved ones, which is why we approach each case with sensitivity and urgency. Our investigators have extensive experience working with law enforcement, social services, and other relevant agencies to coordinate search efforts and maximize the chances of a successful resolution.",
    features: [
      "Comprehensive search strategies",
      "Digital footprint analysis",
      "Witness interviews and location canvassing",
      "Coordination with relevant authorities",
      "Regular progress updates",
    ],
    benefits: [
      "Faster resolution than waiting for official channels",
      "Access to resources and databases not available to the public",
      "Professional documentation for legal proceedings",
      "Confidential handling of sensitive personal information",
      "Peace of mind knowing every avenue is being explored",
    ],
    caseStudy: {
      title: "Reuniting a Family After 10 Years",
      description:
        "A client from Mumbai approached us to locate their sibling who had lost contact with the family 10 years prior. Through a combination of social media analysis, public records searches, and field investigation, we were able to locate the individual in Bangalore. After confirming their identity and current situation, we facilitated a reunion between the family members.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "missing-persons",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Corporate Security",
    description:
      "Protect your business with our comprehensive corporate security services. We help identify vulnerabilities, investigate internal issues, and implement security protocols to safeguard your assets and reputation.",
    longDescription:
      "In today's complex business environment, protecting your company's assets, information, and personnel requires a multifaceted approach. Our Corporate Security services provide businesses with comprehensive protection strategies that address both internal and external threats. From conducting thorough background checks on potential employees to investigating suspected fraud or theft within your organization, our team works discreetly to identify and mitigate security risks before they can impact your bottom line. We also offer security assessments to identify vulnerabilities in your physical locations and digital infrastructure.",
    features: [
      "Security vulnerability assessments",
      "Employee background investigations",
      "Internal theft and fraud investigations",
      "Competitive intelligence",
      "Executive protection services",
    ],
    benefits: [
      "Reduced risk of internal theft and fraud",
      "Protection of intellectual property and trade secrets",
      "Enhanced workplace safety",
      "Mitigation of legal and financial liabilities",
      "Preservation of company reputation",
    ],
    caseStudy: {
      title: "Uncovering Internal Theft Ring",
      description:
        "A retail client in Delhi was experiencing unexplained inventory shrinkage across multiple locations. Our undercover operatives identified a coordinated theft ring involving employees from several stores. Our investigation provided documentation that led to the termination of the involved employees and criminal charges, resulting in a 30% reduction in inventory loss.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "corporate-security",
  },
  {
    icon: <FileSearch className="h-10 w-10 text-primary" />,
    title: "Background Checks",
    description:
      "Our thorough background investigations provide detailed insights into personal and professional histories. Perfect for pre-employment screening, tenant verification, or personal relationships.",
    longDescription:
      "Our comprehensive Background Check services go far beyond the basic searches available to the public. We conduct in-depth investigations into an individual's history, verifying information and uncovering potential red flags that might not appear in standard background checks. Whether you're screening potential employees, vetting a business partner, or conducting due diligence before a significant personal or professional relationship, our background investigations provide the detailed information you need to make informed decisions. All our background checks are conducted legally and ethically, with full compliance with relevant privacy laws and regulations.",
    features: [
      "Criminal history verification",
      "Employment and education verification",
      "Credit and financial history analysis",
      "Professional license verification",
      "Social media and online presence review",
    ],
    benefits: [
      "Reduced hiring risks",
      "Protection against fraud and misrepresentation",
      "Verification of credentials and qualifications",
      "Identification of potential liability issues",
      "Informed decision-making for important relationships",
    ],
    caseStudy: {
      title: "Preventing a Fraudulent Executive Hire",
      description:
        "A client in Mumbai was preparing to hire a C-level executive who had impressive credentials and references. Our background investigation revealed that the candidate had falsified their educational background and had been involved in financial improprieties at a previous employer that hadn't been disclosed. This information allowed our client to avoid a potentially costly hiring mistake.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "background-checks",
  },
  {
    icon: <Fingerprint className="h-10 w-10 text-primary" />,
    title: "Forensic Analysis",
    description:
      "Our forensic specialists use cutting-edge technology to analyze evidence and digital data, providing crucial information for legal proceedings and investigations.",
    longDescription:
      "Our Forensic Analysis services employ scientific methods and advanced technology to examine and interpret evidence for legal and investigative purposes. Our team includes specialists in digital forensics, document examination, and audio/video analysis who can recover, analyze, and document evidence that might otherwise remain hidden. Whether you need to recover deleted data from a device, authenticate a document, or enhance surveillance footage, our forensic experts provide thorough analysis and clear documentation that can stand up to scrutiny in legal proceedings. We maintain strict chain-of-custody protocols to ensure the integrity of all evidence we handle.",
    features: [
      "Digital device forensics",
      "Document examination",
      "Audio/video enhancement and analysis",
      "Data recovery services",
      "Expert witness testimony",
    ],
    benefits: [
      "Recovery of crucial evidence",
      "Scientific verification of facts",
      "Court-admissible documentation",
      "Technical expertise for complex cases",
      "Objective third-party analysis",
    ],
    caseStudy: {
      title: "Recovering Critical Evidence from Damaged Device",
      description:
        "An attorney client in Bangalore needed to recover potentially case-changing evidence from a water-damaged mobile phone. Our digital forensics team was able to extract and restore the data, revealing text messages and photos that proved crucial to establishing the timeline in a civil litigation case, ultimately leading to a favorable settlement for our client.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "forensic-analysis",
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Surveillance",
    description:
      "Our discreet surveillance operations provide legal documentation of activities and behaviors. We employ both traditional and electronic surveillance methods tailored to your specific needs.",
    longDescription:
      "Our Surveillance services provide legal, ethical observation and documentation of individuals, activities, or locations. Using a combination of traditional techniques and advanced technology, our investigators can monitor subjects discreetly while gathering video, photographic, and written evidence. Whether you need documentation for legal proceedings, want to verify suspicious activity, or require monitoring of a specific location, our surveillance specialists can design and implement an effective strategy. We are well-versed in the legal limitations of surveillance activities and ensure that all operations are conducted within the bounds of the law, producing evidence that is admissible in court when needed.",
    features: [
      "Covert physical surveillance",
      "Electronic monitoring",
      "GPS tracking (where legally permitted)",
      "Photographic and video documentation",
      "Detailed activity reports",
    ],
    benefits: [
      "Legal documentation of activities",
      "Verification of suspicions",
      "Court-admissible evidence collection",
      "Professional objectivity",
      "Discreet operations that maintain privacy",
    ],
    caseStudy: {
      title: "Documenting Insurance Fraud",
      description:
        "An insurance company client in Kolkata suspected a claimant of exaggerating injuries from a workplace accident. Our surveillance team documented the subject engaging in physical activities that directly contradicted their claimed limitations. The video evidence we provided allowed our client to successfully challenge the fraudulent claim, saving them over ₹15 lakhs in potential payouts.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "surveillance",
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Private Investigations",
    description:
      "Our private investigation services are tailored to address personal and legal matters with the utmost discretion and professionalism. We handle a wide range of cases from infidelity to complex fraud.",
    longDescription:
      "Our Private Investigation services cover a wide range of personal and legal matters that require professional investigative expertise. Whether you're dealing with suspected infidelity, need to locate assets in a divorce proceeding, or are concerned about potential fraud, our investigators bring experience, objectivity, and discretion to your case. We understand that personal matters can be emotionally charged, which is why we approach each case with sensitivity and professionalism. Our goal is to uncover the facts you need while minimizing disruption to your life and maintaining strict confidentiality throughout the process.",
    features: [
      "Infidelity investigations",
      "Asset searches",
      "Insurance fraud investigations",
      "Child custody case support",
      "Skip tracing and debtor location",
    ],
    benefits: [
      "Peace of mind through factual clarity",
      "Professional objectivity in emotional situations",
      "Legal documentation for court proceedings",
      "Confidential handling of sensitive matters",
      "Expert guidance throughout the process",
    ],
    caseStudy: {
      title: "Resolving Suspicions and Saving a Marriage",
      description:
        "A client from Hyderabad suspected their spouse of infidelity based on unusual behavior patterns. Rather than confirming the suspicion, our investigation revealed that the spouse was actually planning a surprise anniversary celebration and had been meeting with event planners and family members. This information allowed our client to avoid confronting their spouse with false accusations and potentially damaging their relationship.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "private-investigations",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Due Diligence",
    description:
      "Before making significant business decisions, our due diligence investigations provide comprehensive insights into companies, individuals, and investment opportunities.",
    longDescription:
      "Our Due Diligence services provide thorough background research and verification for business transactions, investments, and partnerships. Before committing to a significant business decision, it's essential to have complete and accurate information about the parties involved, the assets in question, and any potential risks or liabilities. Our investigators conduct comprehensive examinations of financial records, business histories, litigation records, and the backgrounds of key individuals to identify any red flags or concerns. This information allows you to enter negotiations or agreements with confidence, knowing that you have a complete picture of what you're getting into.",
    features: [
      "Business partner vetting",
      "Investment opportunity verification",
      "Merger and acquisition research",
      "Vendor and supplier screening",
      "Regulatory compliance verification",
    ],
    benefits: [
      "Risk mitigation for business decisions",
      "Identification of undisclosed liabilities",
      "Verification of assets and claims",
      "Enhanced negotiating position",
      "Protection against fraud and misrepresentation",
    ],
    caseStudy: {
      title: "Preventing a Disastrous Business Partnership",
      description:
        "A client in Surat was considering a significant investment in a startup company with promising technology. Our due diligence investigation revealed that one of the company's founders had previously been involved in securities fraud and that key patents claimed by the company were actually under dispute. This information allowed our client to avoid a potentially disastrous investment and protect their capital.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "due-diligence",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Legal Support",
    description:
      "We provide comprehensive investigative support for attorneys and legal professionals, helping to build stronger cases with factual evidence and expert testimony.",
    longDescription:
      "Our Legal Support services provide attorneys and legal professionals with the investigative resources they need to build stronger cases. From locating and interviewing witnesses to gathering and analyzing evidence, our investigators work as an extension of your legal team to uncover the facts that can make a difference in your case. We understand the requirements for admissible evidence and proper documentation, ensuring that our findings can withstand scrutiny in legal proceedings. Our investigators can also provide expert testimony when needed, explaining complex investigative techniques or findings to judges and juries in clear, compelling terms.",
    features: [
      "Witness location and interviews",
      "Evidence gathering and documentation",
      "Accident scene investigation",
      "Timeline reconstruction",
      "Expert witness testimony",
    ],
    benefits: [
      "Stronger case building with factual evidence",
      "Access to investigative expertise and resources",
      "Time savings for legal teams",
      "Objective third-party findings",
      "Professional testimony for complex matters",
    ],
    caseStudy: {
      title: "Turning the Tide in a Personal Injury Case",
      description:
        "A law firm client in Delhi was representing a plaintiff in a personal injury case with conflicting witness accounts. Our investigators located additional witnesses who had not come forward initially and secured statements that corroborated their client's version of events. We also conducted a detailed scene investigation that identified physical evidence overlooked in the initial police report. This new evidence significantly strengthened the case, leading to a favorable settlement.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "legal-support",
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: "Undercover Operations",
    description:
      "Our trained undercover investigators can infiltrate environments to gather intelligence on internal theft, fraud, or other illicit activities within organizations.",
    longDescription:
      "Our Undercover Operations services provide a unique solution for situations where traditional investigative methods may not be effective. Our specially trained investigators can assume roles within organizations or social groups to observe and document activities from the inside. This approach is particularly effective for investigating workplace theft, fraud, drug use, or policy violations that may be hidden from external observation. All our undercover operatives are thoroughly trained in legal and ethical guidelines to ensure that their activities remain within the bounds of the law and that any evidence gathered will be admissible in court or administrative proceedings.",
    features: [
      "Employee misconduct investigations",
      "Workplace drug use detection",
      "Policy violation documentation",
      "Intellectual property theft investigation",
      "Detailed reporting for management action",
    ],
    benefits: [
      "Inside access to otherwise hidden activities",
      "First-hand documentation of violations",
      "Identification of all involved parties",
      "Understanding of methods and patterns",
      "Legally obtained evidence for termination or prosecution",
    ],
    caseStudy: {
      title: "Exposing Widespread Inventory Theft",
      description:
        "A manufacturing client in Chennai was experiencing significant inventory losses despite enhanced security measures. Our undercover operative, placed as a warehouse employee, identified a sophisticated theft operation involving multiple employees across different shifts and a fence who was purchasing the stolen goods. The documentation provided by our investigator led to the termination of the involved employees and criminal charges, resulting in a complete elimination of the inventory shrinkage problem.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "undercover-operations",
  },
  // Add the blackmailing investigation service
  {
    icon: <AlertCircle className="h-10 w-10 text-primary" />,
    title: "Blackmailing Investigation",
    description:
      "Expert investigation of blackmail attempts to identify perpetrators and gather evidence for legal action or resolution.",
    longDescription:
      "Our Blackmailing Investigation services are designed to help individuals and organizations who are being threatened or extorted. Blackmail is a serious crime that can cause significant emotional distress and financial damage. Our team of experienced investigators works discreetly to identify the source of blackmail, gather evidence, and develop strategies to resolve the situation. We understand the sensitive nature of these cases and maintain the highest levels of confidentiality throughout the investigation process. Our goal is to help you regain control of the situation and find a path to resolution that protects your interests and well-being.",
    features: [
      "Source identification and tracking",
      "Digital forensics to trace online threats",
      "Evidence collection and documentation",
      "Coordination with law enforcement when necessary",
      "Strategic planning for resolution",
    ],
    benefits: [
      "Professional handling of sensitive situations",
      "Reduced emotional stress through expert support",
      "Legal-quality evidence for potential prosecution",
      "Strategic approach to neutralize threats",
      "Confidential management of personal information",
    ],
    caseStudy: {
      title: "Resolving a Digital Blackmail Case",
      description:
        "A business executive in Mumbai was being blackmailed with manipulated digital content that threatened both personal reputation and professional standing. Our digital forensics team traced the source of the threats, identified the perpetrator, and gathered conclusive evidence of the blackmail attempt. Working with the client and legal counsel, we developed a strategy that led to the cessation of threats and the secure removal of the manipulated content, all while maintaining the client's privacy and reputation.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "blackmailing-investigation",
  },
  // Add a generic template for other services
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Generic Service",
    description: "This is a placeholder for services that don't have specific details yet.",
    longDescription:
      "At Ace Elite Detective Service, we offer a wide range of specialized investigative services tailored to meet the unique needs of our clients. This particular service is part of our comprehensive suite of professional detective solutions designed to provide you with accurate information, legal evidence, and peace of mind. Our team of experienced investigators brings decades of combined experience to every case, ensuring thorough, ethical, and effective results.",
    features: [
      "Professional investigation by experienced detectives",
      "Comprehensive documentation and reporting",
      "Legal and ethical evidence gathering",
      "Regular updates throughout the process",
      "Confidential handling of all case details",
    ],
    benefits: [
      "Access to professional investigative expertise",
      "Legally obtained evidence for potential proceedings",
      "Peace of mind through factual clarity",
      "Time and resource savings compared to self-investigation",
      "Professional objectivity in complex situations",
    ],
    caseStudy: {
      title: "Successful Case Resolution",
      description:
        "Our team has successfully handled numerous cases in this area, providing clients with the information and evidence they needed to make informed decisions and resolve their situations favorably. Due to the confidential nature of our work, specific details are protected, but our track record demonstrates our effectiveness and professionalism.",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "generic-service",
  },
]

// Function to convert a string to title case
function toTitleCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  // Add error handling for missing slug parameter
  if (!params?.slug) {
    notFound()
  }

  // Find the service by slug
  let service = services.find((s) => s.slug === params.slug)

  // If the service is not found, use the generic service template with the slug's title
  if (!service) {
    const genericService = services.find((s) => s.slug === "generic-service")
    if (genericService) {
      service = {
        ...genericService,
        title: toTitleCase(params.slug),
        slug: params.slug,
      }
    } else {
      notFound()
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/services" className="flex items-center text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Seek&Solve Services
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{service.title}</h1>
              <p className="text-muted-foreground md:text-xl">{service.description}</p>
              <Link href="/contact">
                <Button size="lg" className="mt-4">
                  Request a Consultation
                </Button>
              </Link>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src={service.image || "/placeholder.svg"}
                width={600}
                height={400}
                alt={service.title}
                className="mx-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground">{service.longDescription}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="grid gap-3 md:grid-cols-2 animate-fadeIn">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <ul className="grid gap-3 md:grid-cols-2 animate-fadeIn">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Case Study: {service.caseStudy.title}</h2>
                <p className="text-muted-foreground">{service.caseStudy.description}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Seek&Solve</h3>
                <ul className="space-y-3">
                  {[
                    "Licensed & insured professionals",
                    "Former law enforcement & military specialists",
                    "Cutting-edge technology & resources",
                    "Strict confidentiality protocols",
                    "Court-admissible documentation",
                    "25+ years of investigative experience",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Request Information</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us today to discuss your specific needs and how our {service.title.toLowerCase()} services can
                  help you.
                </p>
                <Link href="/contact">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Typical Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Initial Consultation</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Investigation Start</p>
                      <p className="text-sm text-muted-foreground">1-3 business days after approval</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Progress Updates</p>
                      <p className="text-sm text-muted-foreground">Regular intervals throughout</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Case Completion</p>
                      <p className="text-sm text-muted-foreground">Varies by case complexity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-primary hover:bg-primary" variant="secondary">
                Explore More
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Related Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover other investigative services that complement {service.title.toLowerCase()}.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug && s.slug !== "generic-service")
              .slice(0, 3)
              .map((relatedService, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full border rounded-lg overflow-hidden bg-background hover:shadow-md transition-shadow"
                >
                  <div className="p-6 bg-muted flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">{relatedService.icon}</div>
                    <h3 className="text-xl font-bold">{relatedService.title}</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-muted-foreground mb-4">{relatedService.description}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href={`/services/${relatedService.slug}`}>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed">
                Contact us today for a confidential consultation about your {service.title.toLowerCase()} needs.
              </p>
            </div>
            {/* Update the CTA section to include WhatsApp button */}
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
