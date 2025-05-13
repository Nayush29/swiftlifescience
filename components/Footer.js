'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-300 pt-8 px-5 md:px-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Swift Life Sciences Pvt Ltd</h3>
          <p className="mb-2">D-1 Sara Industrial Estate Ltd,</p>
          <p className="mb-2">Rampur, Dehradun - 248197</p>
          <p className="mb-2">Uttarakhand, India</p>
          <p className="mt-4"><strong>Phone:</strong> +91-135-2699975</p>
          <p><strong>Email:</strong>{' '}
            <a href="mailto:info@swiftlifesciences.com" className="text-blue-400 hover:underline">
              info@swiftlifesciences.com
            </a>
          </p>
          <p><strong>Website:</strong>{' '}
            <a href="https://www.swiftlifesciences.com" className="text-blue-400 hover:underline">
              www.swiftlifesciences.com
            </a>
          </p>
        </div>

        {/* Column 2: Business Hours & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
          <p>Monday – Saturday: 9:00 AM – 5:00 PM</p>
          <p>Sunday: Closed</p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
            <div className="flex gap-5 text-xl">
              <a href="https://www.facebook.com/ayurmaxhospital" target="_blank" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/ayurmaxhospital" target="_blank" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/ayurmaxhospital" target="_blank" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/ayurmaxhospital" target="_blank" className="hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Map Embed */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-600">
            <iframe
              src="https://www.google.com/maps?q=D-1%20Sara%20Industrial%20Estate%20Ltd,%20Rampur,%20Dehradun%20-%20248197%20Uttarakhand&output=embed"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 mt-5 p-3">
        <p>© 2025 Swift Life Sciences Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
