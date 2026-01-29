import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Heart, Users, Target } from "lucide-react"

export const metadata = {
  title: "About Us - Crystal Tourist Bus",
  description: "Learn more about Crystal Tourist Bus and our commitment to providing exceptional travel experiences.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Crystal Tourist Bus
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Connecting people to their destinations since 2010. We're more than just a bus rental company – we're your trusted travel partner.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Founded in 2010, Crystal Tourist Bus began with a simple vision: to provide safe, comfortable, and reliable transportation for groups exploring the world. What started as a small fleet of three buses has grown into a comprehensive transportation service trusted by thousands of satisfied customers.
              </p>
              <p>
                Over the years, we've expanded our services to cater to a wide variety of needs – from corporate events and educational field trips to wedding parties and tourist excursions. Our commitment to excellence has remained unchanged, and we continue to invest in modern, well-maintained vehicles and professional drivers who prioritize your safety and comfort.
              </p>
              <p>
                Today, Crystal Tourist Bus operates a fleet of over 25 vehicles, ranging from intimate mini-buses to spacious charter coaches. We're proud to be the preferred choice for organizations, schools, and families who value quality service and memorable travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We strive for excellence in every journey, ensuring the highest standards of service and vehicle maintenance.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Care</h3>
              <p className="text-sm text-muted-foreground">
                Your comfort and satisfaction are our top priorities. We treat every passenger like family.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-sm text-muted-foreground">
                We're proud to serve our local community and support various charitable and educational initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-sm text-muted-foreground">
                Count on us to be on time, every time. We understand the importance of punctuality to your plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Behind every successful journey is a dedicated team of professionals. Our drivers are carefully selected, extensively trained, and committed to making your travel experience safe and enjoyable. With an average of 10+ years of driving experience, our team brings expertise, professionalism, and a friendly attitude to every trip.
            </p>
            <p className="text-lg text-muted-foreground">
              Our customer service team is available around the clock to assist with bookings, answer questions, and ensure your complete satisfaction. When you choose Crystal Tourist Bus, you're choosing a team that genuinely cares about your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Modern Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-sm text-muted-foreground">On-Time Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Travel With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the Crystal Tourist Bus difference. Book your journey today and discover why thousands of travelers trust us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Quote</Link>
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
