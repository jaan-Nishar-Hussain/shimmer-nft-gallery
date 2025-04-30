
import React, { useRef } from 'react';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Mock Collections Data
const collections = [
  {
    id: 1,
    name: "Neon Artifacts",
    creator: "NeonWave",
    itemCount: 43,
    bannerImage: "https://images.unsplash.com/photo-1582574738404-c5a736c7a0f1?q=80&w=1470&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?q=80&w=1480&auto=format&fit=crop&crop=entropy"
  },
  {
    id: 2,
    name: "Quantum Pixels",
    creator: "DigitalDreamer",
    itemCount: 28,
    bannerImage: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1470&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Ethereal Worlds",
    creator: "CryptoVisions",
    itemCount: 62,
    bannerImage: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?q=80&w=1470&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1374&auto=format&fit=crop"
  }
];

const CollectionCard = ({ collection, index }: { collection: any, index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-xl overflow-hidden gradient-border hover:border-nft-purple/30 transition-all duration-500"
      whileHover={{
        boxShadow: "0 0 25px rgba(155, 135, 245, 0.2)"
      }}
    >
      {/* Banner Image with Parallax effect */}
      <div className="h-40 overflow-hidden">
        <motion.img 
          src={collection.bannerImage}
          alt={collection.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nft-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Profile Image */}
      <div className="absolute top-28 left-4">
        <motion.div 
          className="rounded-xl w-20 h-20 border-4 border-nft-card-bg overflow-hidden glow"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img 
            src={collection.profileImage}
            alt={collection.creator}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-4 pt-12 bg-nft-card-bg">
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg group-hover:text-nft-purple transition-colors">{collection.name}</h3>
            <motion.div 
              whileHover={{ rotate: 72, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
              className="text-yellow-400"
            >
              <Star className="h-4 w-4 fill-current" />
            </motion.div>
          </div>
          <p className="text-sm text-muted-foreground">by <span className="text-nft-purple/80">{collection.creator}</span></p>
        </div>
        
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
          <span className="text-xs bg-nft-purple/20 text-nft-purple px-3 py-1 rounded-full">
            {collection.itemCount} items
          </span>
          
          <motion.button 
            className="group/btn flex items-center text-xs text-nft-purple hover:text-nft-vivid-purple transition-colors"
            whileHover={{ x: 3 }}
          >
            View Collection
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ delay: 0.1 }}
              className="ml-1"
            >
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.div>
          </motion.button>
        </div>
      </div>
      
      {/* Shine Effect */}
      <div className="absolute -inset-x-full top-0 h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
      
      {/* Animated gradient border on hover */}
      <motion.div 
        className="absolute inset-0 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ 
          background: ["linear-gradient(45deg, #9b87f5 0%, #0ea5e9 50%, #9b87f5 100%)"],
          backgroundSize: ["200% 200%"],
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.div>
  );
};

const CollectionsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  
  return (
    <section ref={sectionRef} className="py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-nft-blue/10 filter blur-[100px] opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <svg className="absolute bottom-0 left-0 w-full h-32 fill-none opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="stroke-nft-purple/40" />
        </svg>
      </div>
      
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-nft-purple to-nft-blue mx-auto mb-4 rounded-full"
          />
          
          <h2 className="text-3xl font-bold mb-4 animated-gradient-text inline-block">Popular Collections</h2>
          
          <p className="text-muted-foreground">
            Discover the most sought-after collections created by talented artists from around the world
          </p>
        </motion.div>
        
        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard key={collection.id} collection={collection} index={index} />
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <motion.button 
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-nft-purple/20 to-nft-blue/20 border border-nft-purple/30 rounded-xl hover:border-nft-purple/50 transition-all duration-300"
            whileHover={{ boxShadow: "0 0 20px rgba(155, 135, 245, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-glow">Explore All Collections</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
