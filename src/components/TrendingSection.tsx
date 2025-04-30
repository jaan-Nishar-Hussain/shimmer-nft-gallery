
import React from 'react';
import NFTCard from './NFTCard';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

// Sample data for trending NFTs
const trendingNfts = [
  {
    id: 423,
    name: "Monkey #423",
    creator: "Detoxa",
    price: 4.5,
    currency: "ETH",
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
    backgroundColor: "#4EEBC0"
  },
  {
    id: 247,
    name: "Monkey #247",
    creator: "Lewen Thomas",
    price: 2.8,
    currency: "ETH",
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
    backgroundColor: "#A162F7"
  },
  {
    id: 589,
    name: "Monkey #589",
    creator: "mrhankey",
    price: 3.2,
    currency: "ETH",
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
    backgroundColor: "#FF8B8B"
  },
  {
    id: 671,
    name: "Monkey #671",
    creator: "Detoxa",
    price: 5.1,
    currency: "ETH",
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
    backgroundColor: "#FFC700"
  }
];

const TrendingSection = () => {
  return (
    <section className="py-16 bg-[#f8f9fa] container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Find Trending NFT Items</h2>
        <p className="text-sm text-nft-light-text mb-6">
          Add items to your cart at any point while you're browsing. Before you check out, you can edit quantities or remove items from your cart.
        </p>
        
        <div className="flex gap-2 mb-8">
          <Button className="bg-black text-white rounded-lg hover:bg-black/90">
            All NFTs
          </Button>
          <Button variant="outline" className="text-nft-light-text border-nft-light-text/20 hover:bg-transparent hover:border-nft-light-text/40 rounded-lg">
            Art
          </Button>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="grid grid-cols-12 gap-4 mb-8 bg-white rounded-xl p-3 shadow-sm">
          <div className="col-span-8">
            <input 
              type="text" 
              placeholder="Search items, collections, and accounts" 
              className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-nft-yellow"
            />
          </div>
          <div className="col-span-2">
            <select className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-nft-yellow bg-white">
              <option>Recently added</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="col-span-2">
            <select className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-nft-yellow bg-white">
              <option>All items</option>
              <option>Single items</option>
              <option>Bundles</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingNfts.map((nft, index) => (
          <motion.div 
            key={nft.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <NFTCard nft={nft} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
