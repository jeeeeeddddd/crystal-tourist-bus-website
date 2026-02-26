import Link from "next/link"
import { Bus, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white">
                <Bus className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Crystal Tourist Bus
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for comfortable and safe tourist bus rentals.
              Making every journey memorable since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/vehicles", label: "Vehicles" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Corporate Events</li>
              <li>School Trips</li>
              <li>Tourist Packages</li>
              <li>Airport Transfers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 flex-shrink-0 mt-0.5">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 flex-shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-slate-400">info@crystalbus.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-slate-400">123 Bus Terminal St, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Crystal Tourist Bus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
