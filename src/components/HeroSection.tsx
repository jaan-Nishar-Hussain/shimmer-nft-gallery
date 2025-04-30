
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col space-y-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Rare Collections Of Art & NFT
          </motion.h1>
          
          <motion.p 
            className="text-sm text-nft-light-text max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The largest NFT marketplace. Authentic and truly unique digital creation. 
            Signed and issued by the creator, made possible by blockchain technology.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="bg-nft-yellow text-nft-dark-text hover:bg-nft-yellow/90 rounded-full">
              Explore
            </Button>
            <Button variant="outline" className="border-nft-dark-text/20 hover:bg-transparent hover:border-nft-dark-text/40 rounded-full">
              Create
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center pt-8 space-x-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <span className="block text-3xl font-bold">1.6K+</span>
              <span className="text-xs text-nft-light-text">Artwork</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">125K+</span>
              <span className="text-xs text-nft-light-text">Auction</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">2.8K+</span>
              <span className="text-xs text-nft-light-text">Artist</span>
            </div>
          </motion.div>
        </div>
        
        {/* Right Content - Monkey NFT Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img 
              src="/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png" 
              alt="Featured NFT" 
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute top-0 right-0 bg-white rounded-full p-2 flex items-center justify-center shadow-md">
              <div className="text-xs bg-[#ECFDF3] text-[#00C48C] font-semibold rounded-full px-3 py-1 flex items-center">
                <span className="w-2 h-2 bg-[#00C48C] rounded-full mr-1"></span>
                Live Auction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Trusted By Section */}
      <div className="mt-16 border-t border-gray-100 pt-8">
        <p className="text-xs text-nft-light-text mb-4">Trusted By Top Industry Leaders</p>
        <div className="flex flex-wrap justify-between items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg" alt="Binance" className="h-6 opacity-60" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Coinbase_logo_2013.svg" alt="Coinbase" className="h-4 opacity-60" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1920px-Walmart_logo.svg.png" alt="Walmart" className="h-4 opacity-60" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Trainline_logo.svg/2560px-Trainline_logo.svg.png" alt="Trainline" className="h-4 opacity-60" />
        </div>
      </div>
      
      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="feature-icon mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 className="font-bold text-lg mb-2">Strong Security</h3>
          <p className="text-xs text-nft-light-text">Strong Security: Secure wallet & rigorous safety standards to protect investors from scams.</p>
        </div>
        
        <div className="flex flex-col items-start">
          <div className="feature-icon mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
          </div>
          <h3 className="font-bold text-lg mb-2">Easy Organization</h3>
          <p className="text-xs text-nft-light-text">Easy organization: AI-NFT insights, efficient portfolio management and modern interface.</p>
        </div>
        
        <div className="flex flex-col items-start">
          <div className="feature-icon mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
          </div>
          <h3 className="font-bold text-lg mb-2">Market Updated</h3>
          <p className="text-xs text-nft-light-text">Market Updated: AI-NFT insights deliver real-time updates to optimize your network.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
