
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NFT {
  id: number;
  name: string;
  creator: string;
  price: number;
  currency: string;
  image: string;
}

interface NFTCardProps {
  nft: NFT;
  featured?: boolean;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative rounded-xl overflow-hidden bg-nft-card-bg border border-nft-purple/10",
        featured ? "transform-gpu hover:scale-[1.02]" : "transform-gpu hover:scale-[1.03]"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        boxShadow: "0 0 20px rgba(155, 135, 245, 0.3)"
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-nft-dark-purple/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className={`rounded-full p-2 ${liked 
              ? 'bg-pink-500/20 text-pink-500' 
              : 'bg-black/20 backdrop-blur-sm text-white/70 hover:text-white'
            } transition-colors`}
          >
            <Heart className="h-4 w-4" fill={liked ? "currentColor" : "none"} />
          </button>
          
          <button className="rounded-full p-2 bg-black/20 backdrop-blur-sm text-white/70 hover:text-white transition-colors">
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg truncate">{nft.name}</h3>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">by {nft.creator}</span>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium">{nft.price}</span>
            <span className="text-sm text-muted-foreground">{nft.currency}</span>
          </div>
        </div>
        
        {/* Bottom Action */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="w-full py-2 text-sm font-medium bg-gradient-to-r from-nft-purple to-nft-blue rounded-lg text-white hover:opacity-90 transition-opacity">
            Place Bid
          </button>
        </div>
      </div>
      
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 left-3 px-2 py-1 bg-nft-purple/90 backdrop-blur-sm text-xs font-medium text-white rounded-md">
          Featured
        </div>
      )}
    </motion.div>
  );
};

export default NFTCard;
