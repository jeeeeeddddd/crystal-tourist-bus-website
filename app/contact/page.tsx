"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send
} from "lucide-react"
import { useState } from "react"
import { FadeIn } from "@/components/animations/FadeIn"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    passengers: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/coaster/591752549_1255654426586815_897480663939479910_n.webp"
          alt="Contact Crystal Tourist Bus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="down">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Get In Touch</p>
            </FadeIn>
            <FadeIn direction="down" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
                Contact Us
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                Get in touch with us today. We&apos;re here to help plan your perfect journey and answer any questions you may have.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you as soon as possible
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="corporate">Corporate Events</option>
                        <option value="school">School Trips</option>
                        <option value="tour">Tours & Excursions</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="wedding">Wedding & Events</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passengers">Number of Passengers</Label>
                      <Input
                        id="passengers"
                        name="passengers"
                        type="number"
                        value={formData.passengers}
                        onChange={handleChange}
                        placeholder="25"
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your transportation needs..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto text-base px-8 py-6">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn direction="right">
              <div className="space-y-6">
                {/* Contact Details Card */}
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                      { icon: Mail, label: "Email", value: "info@crystalbus.com", href: "mailto:info@crystalbus.com" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{item.label}</p>
                          <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Address</p>
                        <p className="text-sm text-muted-foreground">
                          123 Bus Terminal Street<br />
                          City, State 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 5:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Card */}
                <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold mt-1.5">Quick Response</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    We typically respond to inquiries within 24 hours during business days. For urgent requests, please call us directly.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+15551234567">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>

                {/* Emergency Contact Card */}
                <div className="bg-gradient-to-br from-primary/5 to-indigo-50 border border-primary/10 rounded-2xl p-8">
                  <h3 className="font-bold mb-3">24/7 Emergency Support</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    For immediate assistance or emergencies during your trip, contact our 24/7 support line:
                  </p>
                  <a href="tel:+15551234999" className="text-lg font-bold text-primary hover:underline">
                    +1 (555) 123-4999
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Location</p>
                <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                <div className="section-divider mx-auto mt-4" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl aspect-video flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Map integration coming soon</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Find us at: 123 Bus Terminal Street, City, State 12345
                </p>
                <Button variant="outline" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="section-divider mx-auto mt-4" />
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { q: "How far in advance should I book?", a: "We recommend booking at least 2-4 weeks in advance, especially for peak seasons or large groups." },
                { q: "What is your cancellation policy?", a: "Cancellations made 7+ days in advance receive a full refund. Contact us for specific details." },
                { q: "Do you provide drivers?", a: "Yes, all our rentals include professional, licensed, and experienced drivers." },
                { q: "Can you customize our itinerary?", a: "Absolutely! We work with you to create custom routes and schedules that fit your needs." },
              ].map((faq, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-semibold mb-3">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
