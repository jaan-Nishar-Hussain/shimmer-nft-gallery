
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import NFTCard from './NFTCard';
import { motion, useInView } from 'framer-motion';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  
  useEffect(() => {
    // Reveal elements as they scroll into view
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Simulate loading when changing categories
  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 800);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} className="py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-nft-purple/10 filter blur-[80px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-nft-blue/10 filter blur-[100px] opacity-30"></div>
      </div>

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          ref={headingRef}
          className="flex justify-between items-end mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-2 relative">
              Trending NFTs
              <span className="absolute -bottom-1 left-0 w-1/3 h-[3px] bg-gradient-to-r from-nft-purple to-nft-blue rounded-full"></span>
            </h2>
            <p className="text-muted-foreground">
              The most popular and sought-after pieces in our marketplace
            </p>
          </div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2 text-nft-purple hover:text-nft-purple/90 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
        
        {/* Category Filters - Animated tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8 relative"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all overflow-hidden ${
                selectedCategory === category
                ? "text-white"
                : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1 * i,
                    duration: 0.4
                  }
                })
              }}
            >
              {selectedCategory === category && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-nft-purple to-nft-blue -z-10"
                  layoutId="activeCategoryBackground"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </motion.button>
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
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {trendingNfts.map((nft, index) => (
              <motion.div 
                key={nft.id}
                variants={itemVariants}
                custom={index}
                className="will-change-transform"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 } 
                }}
              >
                <NFTCard nft={nft} featured={index === 0} />
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Scroll indicator */}
        <motion.div 
          className="mt-12 flex justify-center items-center gap-2 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span>Scroll for more</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-6 bg-gradient-to-b from-transparent via-nft-purple to-transparent"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingSection;
