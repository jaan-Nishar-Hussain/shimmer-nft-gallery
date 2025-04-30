
import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12 border-t border-gray-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Subscribe To Get Updates News About NFTs</h3>
          <p className="text-sm text-nft-light-text mb-6">
            Uncover exciting NFT revelations with our newsletter - join us to get the news as soon as possible and enjoy it.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address here" 
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-nft-yellow"
            />
            <Button className="bg-black text-white hover:bg-black/90 rounded-r-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Detoxa</h2>
            <p className="text-sm text-nft-light-text mb-4">
              Ready to get started with your NFT journey? Join our community and start collecting or creating your unique digital assets today!
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-nft-light-text hover:text-nft-dark-text transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-nft-light-text hover:text-nft-dark-text transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-nft-light-text hover:text-nft-dark-text transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-nft-light-text hover:text-nft-dark-text transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">All NFTs</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Art</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Gaming</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Memberships</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">PFPs</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Photography</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">About Us</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Careers</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Ventures</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Grants</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Help Center</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Platform Status</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Partners</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Blog</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-nft-light-text hover:text-nft-dark-text transition-colors">Suggestions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-6 text-center">
          <p className="text-sm text-nft-light-text">
            &copy; 2025 Detoxa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
