
import React from 'react';
import { motion } from 'framer-motion';

interface NFT {
  id: number;
  name: string;
  creator: string;
  price: number;
  currency: string;
  image: string;
  backgroundColor?: string;
}

interface NFTCardProps {
  nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Image with colored background */}
      <div 
        className="aspect-square overflow-hidden"
        style={{ backgroundColor: nft.backgroundColor || '#4EEBC0' }}
      >
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-base">{nft.name}</h3>
          <span className="text-xs bg-nft-light-yellow rounded-full px-2 py-1 font-semibold text-nft-orange">#{nft.id}</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-nft-light-text">By {nft.creator}</span>
          <div className="flex items-center">
            <span className="text-xs font-bold mr-1">{nft.price}</span>
            <span className="text-xs text-nft-light-text">{nft.currency}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCard;
