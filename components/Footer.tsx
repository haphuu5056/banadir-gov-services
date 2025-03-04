import Image from "next/legacy/image"
import Link from "next/link"
import { Instagram, Linkedin, Send, Twitter, PinIcon as Pinterest, MessageCircle } from "lucide-react"
import logo from '@/public/logo.png'

// Reusable component for column sections
interface FooterColumnProps {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#0B0B41] mb-5">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-gray-500 text-lg hover:text-primary transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Reusable component for social icons
function SocialIcons() {
  const socialLinks = [
    { href: "#", icon: Instagram },
    { href: "#", icon: Linkedin },
    { href: "#", icon: Send },
    { href: "#", icon: Twitter },
    { href: "#", icon: MessageCircle },
    { href: "#", icon: Pinterest },
  ]

  return (
    <div className="flex gap-6 flex-wrap">
      {socialLinks.map(({ href, icon: Icon }, index) => (
        <Link key={index} href={href} className="text-gray-500 hover:text-primary">
          <Icon className="h-6 w-6" />
        </Link>
      ))}
    </div>
  )
}

// Reusable component for the logo and address
function LogoSection() {
  return (
    <div className="lg:col-span-2">
      <Image
        src={logo}
        alt="Banadir Regional Administration"
        width={80}
        height={80}
        objectFit="cover"
        className=" object-cover"
      />
      <div className="text-gray-500 mt-4">
        <h2 className="font-medium text-lg">Aqalka Dowladda Hoose</h2>
        <h2 className="font-medium text-lg">Xamarweyne Mogadishu, Somalia</h2>
      </div>
    </div>
  )
}

// Main Footer Component
export function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <LogoSection />

          <FooterColumn
            title="Service Request"
            links={[
              { label: "Apply for a City Job", href: "#" },
              { label: "Request a 992 Service", href: "#" },
              { label: "Get a Parking Permit", href: "#" },
              { label: "Building Permits", href: "#" },
            ]}
          />

          <FooterColumn
            title="Useful Links"
            links={[
              { label: "Our History", href: "#" },
              { label: "Documentation", href: "#" },
              { label: "Environmental", href: "#" },
              { label: "Town Gallery", href: "#" },
            ]}
          />

          {/* News & Updates Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#0B0B41]">News & Updates</h2>
            <p className="text-gray-500 text-base">
              The latest Egovt news, articles, and resources, sent straight to your inbox every month
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#0B0B41] mb-5">Social Media</h2>
            <SocialIcons />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">Benadir Regional Administration © 2025. All Rights Reserved</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-600 hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
