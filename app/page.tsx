"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Shield, Clock, ArrowRight, Star } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Stagger, StaggerItem } from "@/components/animations/Stagger"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/images/bus/625956718_1306721031480154_6897176329189957869_n.webp"
          alt="Crystal Tourist Bus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Star className="h-3.5 w-3.5 text-yellow-400" />
                Trusted by 50,000+ travelers
              </div>
            </FadeIn>
            <FadeIn direction="down" delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
                Explore the World
                <span className="block text-primary/90">in Comfort</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
                Premium tourist bus rentals for your perfect journey. Comfortable, safe, and reliable transportation for groups of all sizes.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base px-8 py-6">
                  <Link href="/contact">
                    Book Your Trip
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 text-white border-white/30 hover:bg-white/10 backdrop-blur-sm" asChild>
                  <Link href="/vehicles">View Our Fleet</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Crystal Tourist Bus?</h2>
              <div className="section-divider mx-auto mt-4" />
            </div>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Comfortable Seating", desc: "Spacious and comfortable seats for a relaxing journey" },
              { icon: Shield, title: "Safe & Secure", desc: "Professional drivers and well-maintained vehicles for your safety" },
              { icon: MapPin, title: "Flexible Routes", desc: "Customizable itineraries to match your travel plans" },
              { icon: Clock, title: "On-Time Service", desc: "Punctual and reliable service for stress-free travel" },
            ].map((feature, i) => (
              <StaggerItem key={i}>
                <div className="text-center group cursor-pointer p-6 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-100">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Fleet</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern, Comfortable Vehicles</h2>
              <div className="section-divider mx-auto mt-4" />
            </div>
          </FadeIn>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { src: "/images/bus/640154203_1320758976743026_535174777596574685_n.webp", name: "Tourist Bus", cap: "45-55 Passengers" },
              { src: "/images/bus/564526651_1217940400358218_3072245591458806610_n.webp", name: "Minibus", cap: "20-25 Passengers" },
              { src: "/images/coaster/591745919_1255654523253472_5021819174523074416_n.webp", name: "Coaster", cap: "15-20 Passengers" },
            ].map((v, i) => (
              <StaggerItem key={i}>
                <Link href="/vehicles" className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-lg">
                    <Image
                      src={v.src}
                      alt={v.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{v.name}</h3>
                      <p className="text-sm text-muted-foreground">{v.cap}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <ArrowRight className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
                Contact us today to book your tourist bus and experience premium travel
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 shadow-xl" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
