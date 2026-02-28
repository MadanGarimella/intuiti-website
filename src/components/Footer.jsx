import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0F] text-gray-300 border-t border-gray-800 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-5 gap-12">

        {/* Brand & Positioning */}
        <div className="md:col-span-2">
          
          {/* Logo */}
          <img 
            src={logo} 
            alt="Intuiti Logo" 
            className="h-12 mb-6"
          />

          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            A performance-driven digital marketing agency helping startups, 
            e-commerce brands, and real estate businesses scale through 
            strategic content, video marketing, and high-converting systems.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Get Free Growth Strategy →
          </Link>
        </div>

        {/* Digital Marketing */}
        <div>
          <h3 className="text-orange-500 text-lg font-medium mb-6">
            Digital Marketing
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Content Marketing</li>
            <li>Video Marketing</li>
            <li>Social Media Growth</li>
            <li>Performance Ads</li>
            {/* <li>Funnel & Landing Pages</li> */}
            <li>Brand Positioning</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-orange-500 text-lg font-medium mb-6">
            Industries
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Tech Startups</li>
            <li>E-Commerce</li>
            <li>Real Estate</li>
            <li>Beauty & Skincare</li>
            <li>Local Businesses</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-orange-500 text-lg font-medium mb-6">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            {/* <li>Case Studies</li>
            <li>Blog</li>
            <li>Careers</li> */}
          </ul>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-800 py-8 px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>
          © {new Date().getFullYear()} Intuiti. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;