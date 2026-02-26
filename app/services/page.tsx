"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Plane,
  Users,
  Calendar,
  Building,
  Heart,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Stagger, StaggerItem } from "@/components/animations/Stagger"

export default function ServicesPage() {
  const services = [
    {
      category: "Corporate Services",
      icon: Briefcase,
      description: "Professional transportation solutions for your business needs",
      items: [
        "Company Outings",
        "Corporate Tours",
        "Outreach Programs",
        "Business Seminars",
        "Conventions & Conferences",
        "Team Building Events",
      ]
    },
    {
      category: "School & Educational",
      icon: GraduationCap,
      description: "Safe and reliable transportation for educational institutions",
      items: [
        "Educational Field Trips",
        "School Tours",
        "Graduation Ceremonies",
        "Campus Transfers",
        "Student Activities",
        "Academic Conferences",
      ]
    },
    {
      category: "Tour & Excursions",
      icon: MapPin,
      description: "Discover destinations with comfort and style",
      items: [
        "Local Tours",
        "Domestic Tours",
        "Historical Sites Visits",
        "Cultural Tours",
        "Nature Trips",
        "Pilgrimage Tours",
      ]
    },
    {
      category: "Airport Transfers",
      icon: Plane,
      description: "Convenient and timely airport transportation services",
      items: [
        "Airport Pickup",
        "Airport Drop-off",
        "Group Transfers",
        "International Arrivals",
        "Domestic Flights",
        "VIP Services",
      ]
    },
    {
      category: "Events & Celebrations",
      icon: Calendar,
      description: "Make your special occasions memorable",
      items: [
        "Weddings",
        "Birthday Parties",
        "Anniversaries",
        "Reunions",
        "Religious Events",
        "Festival Attendance",
      ]
    },
    {
      category: "Special Services",
      icon: Heart,
      description: "Customized transportation for unique requirements",
      items: [
        "Medical Transport",
        "Charity Events",
        "Government Functions",
        "Sports Events",
        "Concert & Shows",
        "Custom Packages",
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/bus/571505261_1228671029285155_1848797191845082775_n.webp"
          alt="Crystal Tourist Bus services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="down">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">What We Offer</p>
            </FadeIn>
            <FadeIn direction="down" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
                Our Services
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                Comprehensive transportation solutions tailored to your needs. From corporate events to family outings, we&apos;ve got you covered.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Offerings</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transportation Solutions</h2>
              <div className="section-divider mx-auto mt-4" />
            </div>
          </FadeIn>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <StaggerItem key={index}>
                  <div className="border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 bg-white card-hover group">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{service.category}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">The Crystal Advantage</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Crystal Tourist Bus?</h2>
                <div className="section-divider mx-auto mt-4" />
              </div>
            </FadeIn>

            <Stagger className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Users, title: "Professional Service", desc: "Our experienced drivers and staff ensure a smooth, professional experience from booking to destination." },
                { icon: Building, title: "Modern Fleet", desc: "Well-maintained, modern buses equipped with comfortable seating, air conditioning, and safety features." },
                { icon: Calendar, title: "Flexible Scheduling", desc: "We work around your schedule with flexible booking options and customizable itineraries." },
                { icon: Heart, title: "Safety First", desc: "Your safety is our priority. All vehicles are regularly inspected and sanitized before every trip." },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeIn>
              <div className="text-center bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-lg mb-4">
                  <strong>Your safety is our priority.</strong> We maintain strict protocols by disinfecting all vehicles before and after each trip.
                </p>
                <p className="text-muted-foreground">
                  We service routes across major destinations, ensuring reliable transportation wherever your journey takes you.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to Book Your Service?
              </h2>
              <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
                Get in touch with us today for a free quote and let us help plan your perfect journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 shadow-xl" asChild>
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 text-white border-white/30 hover:bg-white/10" asChild>
                  <Link href="/vehicles">View Our Fleet</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
