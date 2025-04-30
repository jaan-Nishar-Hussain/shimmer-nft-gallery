
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import NFTCard from './NFTCard';
import { motion } from 'framer-motion';

// Mock NFT Data
const trendingNfts = [
  {
    id: 1,
    name: "Abstract Dimensions #28",
    creator: "QuantumArtist",
    price: 1.6,
    currency: "ETH",
    image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Cybernetic Dreams",
    creator: "NeonWave",
    price: 2.3,
    currency: "ETH",
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Ethereal Voyage",
    creator: "CryptoVisions",
    price: 1.2,
    currency: "ETH",
    image: "https://images.unsplash.com/photo-1633186723562-89fc946004f9?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Digital Genesis #48",
    creator: "BlockchainPunk",
    price: 3.5,
    currency: "ETH",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=1365&auto=format&fit=crop"
  }
];

const categories = ["All", "Art", "Collectibles", "Photography", "Music", "Virtual Worlds"];

const TrendingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading when changing categories
  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-2"
            >
              Trending NFTs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground"
            >
              The most popular and sought-after pieces in our marketplace
            </motion.p>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-nft-purple hover:text-nft-purple/90 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
        
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-nft-purple to-nft-blue text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* NFT Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((placeholder) => (
              <div key={placeholder} className="rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-square bg-secondary"></div>
                <div className="p-4 bg-nft-card-bg space-y-3">
                  <div className="h-5 bg-secondary rounded w-3/4"></div>
                  <div className="h-4 bg-secondary rounded w-1/2"></div>
                  <div className="h-8 bg-secondary rounded w-full mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingNfts.map((nft, index) => (
              <motion.div 
                key={nft.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <NFTCard nft={nft} featured={index === 0} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingSection;
