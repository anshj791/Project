import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Links',
    links: ['About US', 'Contact US', 'Customer care', 'Free listing', 'Media']
  },
  {
    title: 'OC Expert',
    links: ['Doctors', 'Contact US', 'Customer care', 'Free listing', 'Media']
  },
  {
    title: 'Services',
    links: ['Doctors', 'Contact US', 'Customer care', 'Free listing', 'Media']
  },
  {
    title: 'Support',
    links: ['Doctors', 'Contact US', 'Customer care', 'Free listing', 'Media']
  }
];

const categories = [
  'Travel & Tourism', 'Beauty', 'Job', 'Education', 'Food', 'Home& Decor',
  'Fitness', 'Health', 'Real Estate', 'Banking', 'Finance', 'Shopping'
];

export function Footer() {
  return (
    <footer className="bg-white border-t">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
        <div>
          <a href="/" className="text-2xl font-bold text-gray-900">
            <span className="text-emerald-500">One</span>Click
          </a>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
  
      {/* Categories and Social Links Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        <div className="md:col-span-3">
          <div className="text-sm text-gray-600 flex gap-2">
            {categories.map((category, index) => (
              <React.Fragment key={category}>
                <a href="#" className="hover:text-gray-900">{category}</a>
                {index < categories.length - 1 && <span className="text-gray-400">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <div className=" align-top flex flex-wrap">
            <h3 className="font-semibold">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <Twitter size={24} />
              </a>
              </div>
            <div className="">
              <a href="#" className="block">
                <img 
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png" 
                  alt="Download on the App Store" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  
      {/* Copyright Section */}
      <div className="mt-8 pt-8 border-t text-sm text-gray-600 text-center">
        <p>
          © 2008-2013. All rights reserved{' '}
          <a href="#" className="hover:text-gray-900">Privacy</a> |{' '}
          <a href="#" className="hover:text-gray-900">Help</a> |{' '}
          <a href="#" className="hover:text-gray-900">FAQs</a>
        </p>
      </div>
    </div>
  </footer>
  
  );
}