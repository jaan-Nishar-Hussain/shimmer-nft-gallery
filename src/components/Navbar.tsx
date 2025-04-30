
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ShoppingCart, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleConnect = () => {
    toast({
      title: "Wallet Connection",
      description: "Feature coming soon!",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-nft-dark-bg/80 backdrop-blur-lg border-b border-nft-purple/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-nft-purple to-nft-blue bg-clip-text text-transparent">
              ShimmerNFT
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Explore
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Collections
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Artists
          </a>
          <a href="#" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Community
          </a>
        </nav>

        {/* Search and Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search NFTs..." 
              className="w-[180px] lg:w-[220px] h-9 bg-secondary rounded-full pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-nft-purple"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
            <User className="h-5 w-5" />
          </Button>
          
          <Button 
            onClick={handleConnect}
            className="bg-gradient-to-r from-nft-purple to-nft-blue text-white px-4 hover:opacity-90 transition-opacity"
          >
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-foreground"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-nft-dark-bg/95 backdrop-blur-lg border-b border-nft-purple/10 animate-fade-in">
          <div className="container px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-secondary/50 rounded-md">
                Explore
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-secondary/50 rounded-md">
                Collections
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-secondary/50 rounded-md">
                Artists
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-secondary/50 rounded-md">
                Community
              </a>
            </nav>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search NFTs..." 
                className="w-full h-9 bg-secondary rounded-full pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-nft-purple"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              
              <Button 
                onClick={handleConnect}
                className="bg-gradient-to-r from-nft-purple to-nft-blue text-white px-4 hover:opacity-90 transition-opacity"
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
