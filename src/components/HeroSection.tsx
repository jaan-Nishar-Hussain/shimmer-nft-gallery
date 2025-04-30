
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import NFTCard from './NFTCard';
import { motion } from 'framer-motion';

// Mock NFT Data
const featuredNfts = [
  {
    id: 1,
    name: "Cosmic Dreamscape #37",
    creator: "Nebula Arts",
    price: 2.5,
    currency: "ETH",
    image: "https://images.unsplash.com/photo-1645367715294-0004efe102a1?q=80&w=1364&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Digital Genesis #12",
    creator: "CryptoVisions",
    price: 1.8,
    currency: "ETH",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Neon Wilderness",
    creator: "DigitalDreamer",
    price: 3.2,
    currency: "ETH",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1374&auto=format&fit=crop"
  }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-nft-purple/20 rounded-full filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-nft-blue/20 rounded-full filter blur-[100px] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/50 backdrop-blur border border-nft-purple/20 text-sm text-nft-purple font-medium">
              The Future of Digital Collectibles
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Discover <span className="bg-gradient-to-r from-nft-purple to-nft-pink bg-clip-text text-transparent text-glow">Extraordinary</span> Digital Art & Collect NFTs
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Explore the world's best collection of unique digital artwork, created by top artists and secured on the blockchain.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-gradient-to-r from-nft-purple to-nft-blue text-white hover:opacity-90 transition-opacity text-base px-8 py-6">
                Explore Collection
              </Button>
              <Button variant="outline" className="border-nft-purple/40 hover:bg-nft-purple/10 text-base px-8 py-6">
                Start Creating
              </Button>
            </div>
            
            <div className="flex items-center pt-4 space-x-10">
              <div>
                <span className="block text-3xl font-bold bg-gradient-to-r from-nft-purple to-nft-blue bg-clip-text text-transparent">68K+</span>
                <span className="text-muted-foreground text-sm">Artwork</span>
              </div>
              <div>
                <span className="block text-3xl font-bold bg-gradient-to-r from-nft-purple to-nft-blue bg-clip-text text-transparent">25K+</span>
                <span className="text-muted-foreground text-sm">Auctions</span>
              </div>
              <div>
                <span className="block text-3xl font-bold bg-gradient-to-r from-nft-purple to-nft-blue bg-clip-text text-transparent">15K+</span>
                <span className="text-muted-foreground text-sm">Artists</span>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Featured NFTs */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {featuredNfts.map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={index === 2 ? "col-span-2" : ""}
                >
                  <NFTCard nft={nft} featured={index === 0} />
                </motion.div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -top-6 -right-6 w-20 h-20 border border-nft-purple/30 rounded-full"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 border border-nft-blue/30 rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
