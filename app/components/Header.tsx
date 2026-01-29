import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bus } from "lucide-react"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Bus className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Crystal Tourist Bus</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Our Services
          </Link>
          <Link href="/vehicles" className="text-sm font-medium transition-colors hover:text-primary">
            Vehicles
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="default" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
