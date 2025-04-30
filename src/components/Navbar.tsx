
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold">Detoxa</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#" className="px-3 py-2 text-sm font-medium text-nft-dark-text hover:text-nft-yellow transition-colors">
            Home
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-nft-light-text hover:text-nft-dark-text transition-colors">
            Discover
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-nft-light-text hover:text-nft-dark-text transition-colors">
            Activity
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-nft-light-text hover:text-nft-dark-text transition-colors">
            Blog
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-nft-light-text hover:text-nft-dark-text transition-colors">
            Contact
          </a>
        </nav>

        {/* Search and Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-nft-light-text" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-[180px] h-9 bg-gray-100 rounded-full pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-nft-yellow"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="text-nft-light-text hover:text-nft-dark-text">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-nft-light-text hover:text-nft-dark-text">
            <User className="h-5 w-5" />
          </Button>
          
          <Button 
            className="bg-nft-yellow text-nft-dark-text hover:bg-nft-yellow/90 rounded-full text-sm px-4"
          >
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-nft-dark-text"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">
                Home
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">
                Discover
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">
                Activity
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">
                Blog
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">
                Contact
              </a>
            </nav>
            
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              
              <Button 
                className="bg-nft-yellow text-nft-dark-text hover:bg-nft-yellow/90 rounded-full"
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
