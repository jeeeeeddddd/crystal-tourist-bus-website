"use client"

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
    // Handle form submission here
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get in touch with us today. We're here to help plan your perfect journey and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border rounded-lg p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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

                  <div className="grid md:grid-cols-2 gap-4">
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
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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

                  <div className="grid md:grid-cols-2 gap-4">
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

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@crystalbus.com" className="text-sm text-muted-foreground hover:text-primary">
                        info@crystalbus.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Bus Terminal Street<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Hours</p>
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
              <div className="bg-white border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                  <h3 className="font-bold">Quick Response</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
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
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="font-bold mb-2">24/7 Emergency Support</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For immediate assistance or emergencies during your trip, contact our 24/7 support line:
                </p>
                <a href="tel:+15551234999" className="text-lg font-bold text-primary hover:underline">
                  +1 (555) 123-4999
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-muted-foreground">
                Stop by our office to discuss your transportation needs in person
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Map integration coming soon</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Find us at: 123 Bus Terminal Street, City, State 12345
              </p>
              <Button variant="outline" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">
              Looking for quick answers? Check out our frequently asked questions
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">How far in advance should I book?</h3>
                <p className="text-sm text-muted-foreground">
                  We recommend booking at least 2-4 weeks in advance, especially for peak seasons or large groups.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">What is your cancellation policy?</h3>
                <p className="text-sm text-muted-foreground">
                  Cancellations made 7+ days in advance receive a full refund. Contact us for specific details.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Do you provide drivers?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, all our rentals include professional, licensed, and experienced drivers.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Can you customize our itinerary?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We work with you to create custom routes and schedules that fit your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
