"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Users,
  Snowflake,
  Shield,
  Armchair,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Stagger, StaggerItem } from "@/components/animations/Stagger"

export default function VehiclesPage() {
  const vehicles = [
    {
      name: "Tourist Bus",
      type: "Large Capacity Bus",
      capacity: "45-55 Passengers",
      image: "/images/bus/625979127_1306720961480161_8544487686052931471_n.webp",
      description: "Our flagship tourist buses are perfect for large groups, offering maximum comfort and amenities for long-distance travel.",
      features: [
        "Spacious reclining seats",
        "Air conditioning system",
        "Entertainment system",
        "Onboard restroom",
        "Large luggage compartment",
        "PA system",
        "Safety features & seat belts",
        "Professional driver"
      ],
      idealFor: [
        "Corporate events and conventions",
        "Large tour groups",
        "School field trips",
        "Long-distance travel",
        "Wedding parties"
      ]
    },
    {
      name: "Minibus",
      type: "Medium Capacity",
      capacity: "20-25 Passengers",
      image: "/images/bus/564786079_1217936803691911_7210666512014403462_n.webp",
      description: "Perfect for medium-sized groups, our minibuses provide comfort and convenience for city tours and regional trips.",
      features: [
        "Comfortable seating",
        "Air conditioning",
        "Audio system",
        "Ample luggage space",
        "Large windows for sightseeing",
        "Safety equipment",
        "Experienced driver"
      ],
      idealFor: [
        "Team building activities",
        "Family gatherings",
        "Airport transfers (groups)",
        "City tours",
        "Corporate shuttles"
      ]
    },
    {
      name: "Coaster",
      type: "Compact & Versatile",
      capacity: "15-20 Passengers",
      image: "/images/coaster/597401089_1263300352488889_6599512331355614023_n.webp",
      description: "Ideal for smaller groups, our coasters offer flexibility and ease of navigation while maintaining comfort and safety.",
      features: [
        "Ergonomic seating",
        "Climate control",
        "Music system",
        "Storage compartments",
        "Easy maneuverability",
        "Safety features",
        "Professional driver"
      ],
      idealFor: [
        "Small corporate groups",
        "Family outings",
        "Airport transfers",
        "Local tours",
        "Special events"
      ]
    }
  ]

  const commonFeatures = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All vehicles equipped with safety features and regularly inspected"
    },
    {
      icon: Snowflake,
      title: "Climate Control",
      description: "Fully air-conditioned for your comfort in any weather"
    },
    {
      icon: Armchair,
      title: "Comfortable Seating",
      description: "Ergonomic seats designed for long-distance comfort"
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Experienced, licensed drivers committed to your safety"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/bus/481181248_1028539465964980_5120187088983977998_n.webp"
          alt="Crystal Tourist Bus fleet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="down">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Our Fleet</p>
            </FadeIn>
            <FadeIn direction="down" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
                Our Fleet
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                Modern, well-maintained vehicles to suit every group size and travel need. From intimate gatherings to large events, we have the perfect vehicle for your journey.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24 max-w-6xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <FadeIn key={index}>
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Vehicle Image */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative rounded-2xl aspect-[4/3] overflow-hidden shadow-xl">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-primary text-sm font-semibold rounded-full shadow-sm">
                          {vehicle.capacity}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                      {vehicle.type}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{vehicle.name}</h2>
                    <div className="flex items-center gap-2 mb-5">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold text-primary">{vehicle.capacity}</span>
                    </div>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {vehicle.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {vehicle.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2.5 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Ideal For</h3>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.idealFor.map((use, uIndex) => (
                          <span
                            key={uIndex}
                            className="px-3 py-1.5 bg-slate-50 text-sm rounded-full border border-slate-100"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button asChild size="lg" className="text-base px-8 py-6">
                      <Link href="/contact">
                        Book This Vehicle
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Common Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Standard Amenities</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What All Our Vehicles Offer
                </h2>
                <div className="section-divider mx-auto mt-4" />
              </div>
            </FadeIn>

            <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <StaggerItem key={index}>
                    <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>

            <FadeIn>
              <div className="mt-12 bg-white p-10 rounded-2xl text-center shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-3">Maintenance & Safety</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  All our vehicles undergo regular maintenance checks and thorough inspections. We sanitize each vehicle before and after every trip to ensure your safety and peace of mind.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  {["Regular maintenance", "Pre-trip inspection", "Deep cleaning & sanitization", "Licensed & insured"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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
                Ready to Choose Your Vehicle?
              </h2>
              <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
                Contact us today to discuss your transportation needs and get a customized quote for your trip
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 shadow-xl" asChild>
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 text-white border-white/30 hover:bg-white/10" asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
