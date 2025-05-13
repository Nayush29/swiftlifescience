'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/manufacturing', label: 'Manufacturing' },
    { href: '/products', label: 'Products' },
    { href: '/career', label: 'Career' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="w-full shadow-md border-b border-gray-200">
      {/* Top Contact Bar */}
      <div className="bg-[#003366] text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-[#66CCFF]" />
              <span>D-1 Sara Industrial Estate, Dehradun, UK</span>
            </span>
            <span className="flex items-center gap-1">
              <FaPhoneAlt className="text-[#66CCFF]" />
              <span>+91-135-2699975</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-white text-base">
            <Link href="https://www.facebook.com/ayurmaxhospital" target="_blank" aria-label="Facebook">
              <FaFacebookF className="hover:text-[#66CCFF] transition" />
            </Link>
            <Link href="https://www.instagram.com/ayurmaxhospital" target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:text-[#66CCFF] transition" />
            </Link>
            <Link href="https://twitter.com/ayurmaxhospital" target="_blank" aria-label="Twitter">
              <FaTwitter className="hover:text-[#66CCFF] transition" />
            </Link>
            <Link href="https://www.linkedin.com/company/ayurmaxhospital" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-[#66CCFF] transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 relative">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="text-xl font-bold text-[#003366] hidden md:inline">Swift Life Sciences</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 text-[#003366] font-medium text-md">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-[#66CCFF] transition-all duration-300"
                aria-label={label}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-3xl text-[#003366]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden px-4 pb-4 bg-white flex flex-col gap-4 border-t text-[#003366] transition-all duration-300`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[#66CCFF] transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={label}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
