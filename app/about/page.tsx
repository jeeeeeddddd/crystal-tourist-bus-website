"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Heart, Users, Target, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Stagger, StaggerItem } from "@/components/animations/Stagger"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/bus/632280791_1313584104127180_226774400709536380_n.webp"
          alt="Crystal Tourist Bus fleet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="down">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">About Us</p>
            </FadeIn>
            <FadeIn direction="down" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
                About Crystal Tourist Bus
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                Connecting people to their destinations since 2010. We&apos;re more than just a bus rental company &ndash; we&apos;re your trusted travel partner.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
                <div className="section-divider mb-8" />
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, Crystal Tourist Bus began with a simple vision: to provide safe, comfortable, and reliable transportation for groups exploring the world. What started as a small fleet of three buses has grown into a comprehensive transportation service trusted by thousands of satisfied customers.
                  </p>
                  <p>
                    Over the years, we&apos;ve expanded our services to cater to a wide variety of needs &ndash; from corporate events and educational field trips to wedding parties and tourist excursions. Our commitment to excellence has remained unchanged, and we continue to invest in modern, well-maintained vehicles and professional drivers who prioritize your safety and comfort.
                  </p>
                  <p>
                    Today, Crystal Tourist Bus operates a fleet of over 25 vehicles, ranging from intimate mini-buses to spacious charter coaches. We&apos;re proud to be the preferred choice for organizations, schools, and families who value quality service and memorable travel experiences.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-5">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/bus/626301539_1306721104813480_1640149407543358822_n.webp"
                    alt="Crystal Tourist Bus exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/coaster/592831153_1255654619920129_5956950425556272994_n.webp"
                    alt="Crystal Coaster"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What We Stand For</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <div className="section-divider mx-auto mt-4" />
            </div>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "Excellence", desc: "We strive for excellence in every journey, ensuring the highest standards of service and vehicle maintenance." },
              { icon: Heart, title: "Care", desc: "Your comfort and satisfaction are our top priorities. We treat every passenger like family." },
              { icon: Users, title: "Community", desc: "We're proud to serve our local community and support various charitable and educational initiatives." },
              { icon: Target, title: "Reliability", desc: "Count on us to be on time, every time. We understand the importance of punctuality to your plans." },
            ].map((value, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our People</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <div className="section-divider mx-auto mt-4 mb-10" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Behind every successful journey is a dedicated team of professionals. Our drivers are carefully selected, extensively trained, and committed to making your travel experience safe and enjoyable. With an average of 10+ years of driving experience, our team brings expertise, professionalism, and a friendly attitude to every trip.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our customer service team is available around the clock to assist with bookings, answer questions, and ensure your complete satisfaction. When you choose Crystal Tourist Bus, you&apos;re choosing a team that genuinely cares about your journey.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "15+", label: "Years of Service" },
              { value: "25+", label: "Modern Vehicles" },
              { value: "50K+", label: "Happy Travelers" },
              { value: "99%", label: "On-Time Rate" },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Travel With Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Experience the Crystal Tourist Bus difference. Book your journey today and discover why thousands of travelers trust us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-base px-8 py-6">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 py-6">
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
