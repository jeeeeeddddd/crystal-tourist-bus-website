import Link from "next/link"
import { Bus, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t bg-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bus className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">Crystal Tourist Bus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for comfortable and safe tourist bus rentals.
              Making every journey memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-muted-foreground hover:text-foreground transition-colors">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Corporate Events</li>
              <li>School Trips</li>
              <li>Tourist Packages</li>
              <li>Airport Transfers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">info@crystalbus.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">123 Bus Terminal St, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Crystal Tourist Bus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
