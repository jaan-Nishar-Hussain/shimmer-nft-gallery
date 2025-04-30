
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden bg-nft-card-bg border border-nft-purple/10 hover:border-nft-purple/30 transition-all"
      whileHover={{
        boxShadow: "0 0 25px rgba(155, 135, 245, 0.2)"
      }}
    >
      {/* Banner Image */}
      <div className="h-40 overflow-hidden">
        <img 
          src={collection.bannerImage}
          alt={collection.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      {/* Profile Image */}
      <div className="absolute top-32 left-4">
        <motion.div 
          className="rounded-xl w-16 h-16 border-4 border-nft-card-bg overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={collection.profileImage}
            alt={collection.creator}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-4 pt-10">
        <div className="mb-1">
          <h3 className="font-bold text-lg group-hover:text-nft-purple transition-colors">{collection.name}</h3>
          <p className="text-sm text-muted-foreground">by {collection.creator}</p>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs bg-nft-purple/20 text-nft-purple px-2 py-1 rounded-full">
            {collection.itemCount} items
          </span>
          
          <motion.button 
            whileHover={{ x: 3 }}
            className="text-nft-purple hover:text-nft-vivid-purple"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
      
      {/* Shine Effect */}
      <div className="absolute -inset-x-full top-0 h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
    </motion.div>
  );
};

const CollectionsSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-[20rem] h-[20rem] bg-nft-blue/10 rounded-full filter blur-[100px] opacity-30 -z-10"></div>
      
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Popular Collections</h2>
          <p className="text-muted-foreground">
            Discover the most sought-after collections created by talented artists from around the world
          </p>
        </motion.div>
        
        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          className="flex justify-center mt-10"
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-nft-card-bg border border-nft-purple/30 rounded-xl hover:bg-nft-purple/10 transition-colors">
            <span>Explore All Collections</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
