import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Users,
  Snowflake,
  Wifi,
  Music,
  Shield,
  Armchair,
  Monitor,
  CheckCircle
} from "lucide-react"

export const metadata = {
  title: "Our Fleet - Crystal Tourist Bus",
  description: "Explore our modern fleet of buses, minibuses, and coasters. Comfortable, safe, and reliable vehicles for every group size.",
}

export default function VehiclesPage() {
  const vehicles = [
    {
      name: "Tourist Bus",
      type: "Large Capacity Bus",
      capacity: "45-55 Passengers",
      image: "/placeholder-bus.jpg",
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
      image: "/placeholder-minibus.jpg",
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
      image: "/placeholder-coaster.jpg",
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Fleet
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Modern, well-maintained vehicles to suit every group size and travel need. From intimate gatherings to large events, we have the perfect vehicle for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Vehicle Image Placeholder */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-16 w-16 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">{vehicle.name}</p>
                    </div>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    {vehicle.type}
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{vehicle.name}</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-primary">{vehicle.capacity}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {vehicle.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Features:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {vehicle.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Ideal For:</h3>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.idealFor.map((use, uIndex) => (
                        <span
                          key={uIndex}
                          className="px-3 py-1 bg-blue-50 text-sm rounded-full"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">Book This Vehicle</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Features Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What All Our Vehicles Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every vehicle in our fleet is maintained to the highest standards and equipped with essential features for your comfort and safety
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-lg text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3">Maintenance & Safety</h3>
              <p className="text-muted-foreground mb-4">
                All our vehicles undergo regular maintenance checks and thorough inspections. We sanitize each vehicle before and after every trip to ensure your safety and peace of mind.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Regular maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Pre-trip inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Deep cleaning & sanitization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Licensed & insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Choose Your Vehicle?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss your transportation needs and get a customized quote for your trip
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
