
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink, Zap } from 'lucide-react';
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
  const cardRef = useRef<HTMLDivElement>(null);
  
  // For 3D card effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative rounded-xl overflow-hidden bg-nft-card-bg border border-nft-purple/10 transition-all duration-300",
        "hover:border-nft-purple/30",
        featured ? "transform-gpu" : "transform-gpu"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        boxShadow: "0 0 30px rgba(155, 135, 245, 0.4)",
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {/* Animated Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-nft-dark-purple/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Hover shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-20 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 ease-in-out" />
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300" style={{ 
          opacity: isHovered ? 1 : 0, 
          transform: isHovered ? 'translateY(0)' : 'translateY(-10px)' 
        }}>
          <motion.button 
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className={`rounded-full p-2 backdrop-blur-md ${liked 
              ? 'bg-pink-500/30 text-pink-500' 
              : 'bg-black/30 text-white/70 hover:text-white'
            } transition-all duration-300 hover:scale-110`}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="h-4 w-4" fill={liked ? "currentColor" : "none"} />
          </motion.button>
          
          <motion.button 
            className="rounded-full p-2 bg-black/30 backdrop-blur-md text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="h-4 w-4" />
          </motion.button>
        </div>
        
        {/* Hot indicator */}
        {featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm text-xs font-medium text-white rounded-md">
            <Zap className="h-3 w-3" />
            <span>Hot</span>
          </div>
        )}
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg truncate group-hover:text-nft-purple transition-colors">{nft.name}</h3>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">by <span className="group-hover:text-nft-purple/80 transition-colors">{nft.creator}</span></span>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium group-hover:text-nft-purple transition-colors">{nft.price}</span>
            <span className="text-sm text-muted-foreground">{nft.currency}</span>
          </div>
        </div>
        
        {/* Bottom Action */}
        <motion.div 
          className="mt-4 overflow-hidden"
          initial={{ opacity: 0, y: 10, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10,
            height: isHovered ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <button className="w-full py-2 text-sm font-medium bg-gradient-to-r from-nft-purple to-nft-blue rounded-lg text-white hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-nft-purple/20">
            Place Bid
          </button>
        </motion.div>
      </div>
      
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 w-24 h-24 overflow-hidden rotate-45">
          <div className="absolute top-0 left-0 w-16 bg-gradient-to-r from-nft-purple to-nft-blue text-xs text-white font-medium py-1 text-center transform translate-x-8 translate-y-4 shadow-md">
            Featured
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default NFTCard;
