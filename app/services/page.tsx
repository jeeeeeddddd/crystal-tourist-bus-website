"use client"

import Link from "next/link"
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
  Camera
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn direction="down">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our Services
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
                Comprehensive transportation solutions tailored to your needs. From corporate events to family outings, we've got you covered.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <StaggerItem key={index}>
                  <div className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 bg-white card-hover group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{service.category}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">✓</span>
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
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Crystal Tourist Bus?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Professional Service
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our experienced drivers and staff ensure a smooth, professional experience from booking to destination.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Modern Fleet
                </h3>
                <p className="text-sm text-muted-foreground">
                  Well-maintained, modern buses equipped with comfortable seating, air conditioning, and safety features.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Flexible Scheduling
                </h3>
                <p className="text-sm text-muted-foreground">
                  We work around your schedule with flexible booking options and customizable itineraries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Safety First
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your safety is our priority. All vehicles are regularly inspected and sanitized before every trip.
                </p>
              </div>
            </div>

            <div className="text-center bg-white p-8 rounded-lg">
              <p className="text-lg mb-4">
                <strong>Your safety is our priority.</strong> We maintain strict protocols by disinfecting all vehicles before and after each trip.
              </p>
              <p className="text-muted-foreground mb-6">
                We service routes across major destinations, ensuring reliable transportation wherever your journey takes you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Service?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with us today for a free quote and let us help plan your perfect journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/vehicles">View Our Fleet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
