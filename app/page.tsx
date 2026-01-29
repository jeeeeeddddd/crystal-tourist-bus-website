"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Shield, Clock } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Stagger, StaggerItem } from "@/components/animations/Stagger"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn direction="down">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Explore the World in Comfort
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Premium tourist bus rentals for your perfect journey. Comfortable, safe, and reliable transportation for groups of all sizes.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Book Your Trip</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/vehicles">View Our Fleet</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Crystal Tourist Bus?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide exceptional service and memorable travel experiences for every journey
              </p>
            </div>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Users className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Comfortable Seating</h3>
                <p className="text-sm text-muted-foreground">
                  Spacious and comfortable seats for a relaxing journey
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Shield className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Safe & Secure</h3>
                <p className="text-sm text-muted-foreground">
                  Professional drivers and well-maintained vehicles for your safety
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <MapPin className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Flexible Routes</h3>
                <p className="text-sm text-muted-foreground">
                  Customizable itineraries to match your travel plans
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Clock className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold mb-2">On-Time Service</h3>
                <p className="text-sm text-muted-foreground">
                  Punctual and reliable service for stress-free travel
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to book your tourist bus and experience premium travel
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
