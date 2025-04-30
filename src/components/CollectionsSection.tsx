
import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    name: "Cosmic Genesis",
    creator: "Taylor Georgina",
    items: 7.4,
    price: 8.5,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 2,
    name: "Crypto Punks",
    creator: "Alexis Martinez",
    items: 5.9,
    price: 4.8,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 3,
    name: "Mooncatcher",
    creator: "Sid Constantine",
    items: 9.2,
    price: 12.8,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 4,
    name: "Bored Ape YC",
    creator: "Peter Davidson",
    items: 8.8,
    price: 15.2,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 5,
    name: "Neo Genesis",
    creator: "Emma Thompson",
    items: 7.1,
    price: 9.5,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 6,
    name: "Azuki NFT",
    creator: "Alan Cooper",
    items: 10.5,
    price: 7.8,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 7,
    name: "Loopy Donut",
    creator: "Samira Al-Hariri",
    items: 4.2,
    price: 3.8,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 8,
    name: "Hyperion NFT",
    creator: "Johny Zhang",
    items: 8.9,
    price: 10.2,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 9,
    name: "Cool Cats",
    creator: "Nina DeVoss",
    items: 6.8,
    price: 5.4,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 10,
    name: "Moonbirds",
    creator: "Craig Wilson",
    items: 9.3,
    price: 11.6,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 11,
    name: "Clone X",
    creator: "Sophia Da Silva",
    items: 7.6,
    price: 8.9,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  },
  {
    id: 12,
    name: "Doodles",
    creator: "Marcus Young",
    items: 5.8,
    price: 6.2,
    image: "/lovable-uploads/126efc54-339a-48ab-be46-5d87f5ca358c.png",
  }
];

const CollectionsSection = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Top Collection In This Week</h2>
        <a href="#" className="text-sm font-medium text-nft-yellow">
          Show Ranking
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        {collections.map((collection, index) => (
          <motion.div 
            key={collection.id} 
            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-sm font-medium text-nft-light-text w-5">
              {index + 1}
            </span>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm">{collection.name}</h4>
              <p className="text-xs text-nft-light-text">by {collection.creator}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm">{collection.price}k</p>
              <p className={`text-xs ${index % 3 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                {index % 3 === 0 ? '+' : '-'}{Math.floor(Math.random() * 10) + 1}.{Math.floor(Math.random() * 10)}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsSection;
