
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold">Yojana Yantra</h3>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Empowering citizens through simplified access to government schemes and benefits.
            </p>
            <p className="text-blue-300 text-sm">
              © 2026 Yojana Yantra. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">TERMS OF USE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <p>CALL FOR MORE INFO</p>
              <p className="text-lg font-semibold text-white">+91 8104297967</p>
              <p className="text-lg font-semibold text-white">+91 8180842424</p>
              <p>info@yojanayantra.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
