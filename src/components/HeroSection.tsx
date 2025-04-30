
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import NFTCard from './NFTCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Particle effect for canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }> = [];
    
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 0.5 - 0.25;
        const speedY = Math.random() * 0.5 - 0.25;
        const brightness = Math.floor(Math.random() * 60) + 50;
        const color = `rgba(155, 135, 245, ${brightness / 100})`;
        
        particles.push({
          x,
          y,
          radius,
          color,
          speedX,
          speedY
        });
      }
    };
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Connect particles if they're close enough
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 135, 245, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animateParticles);
    };
    
    createParticles();
    animateParticles();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      }
    })
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div 
          className="absolute rounded-full opacity-60 filter blur-[120px]"
          style={{
            top: '25%',
            left: '25%',
            width: '30rem',
            height: '30rem',
            background: 'radial-gradient(circle, rgba(155, 135, 245, 0.3) 0%, rgba(155, 135, 245, 0.1) 70%, rgba(155, 135, 245, 0) 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute rounded-full opacity-50 filter blur-[100px]"
          style={{
            bottom: '25%',
            right: '25%',
            width: '25rem',
            height: '25rem',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0.1) 70%, rgba(14, 165, 233, 0) 100%)',
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              custom={0}
              variants={fadeInUp}
              className="inline-block px-4 py-1 rounded-full bg-secondary/50 backdrop-blur border border-nft-purple/20 text-sm text-nft-purple font-medium"
            >
              <span className="pulse-subtle inline-block">The Future of Digital Collectibles</span>
            </motion.div>
            
            <motion.h1 
              custom={1}
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Discover <span className="animated-gradient-text">Extraordinary</span> Digital Art & Collect NFTs
            </motion.h1>
            
            <motion.p 
              custom={2}
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Explore the world's best collection of unique digital artwork, created by top artists and secured on the blockchain.
            </motion.p>
            
            <motion.div 
              custom={3}
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button className="bg-gradient-to-r from-nft-purple to-nft-blue text-white hover:opacity-90 transition-opacity text-base px-8 py-6 group">
                <span>Explore Collection</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-nft-purple/40 hover:bg-nft-purple/10 text-base px-8 py-6 vibrate-on-hover">
                Start Creating
              </Button>
            </motion.div>
            
            <motion.div 
              custom={4}
              variants={fadeInUp}
              className="flex items-center pt-4 space-x-10"
            >
              <div className="floating animate-delay-100">
                <span className="block text-3xl font-bold bg-gradient-to-r from-nft-purple to-nft-blue bg-clip-text text-transparent">68K+</span>
                <span className="text-muted-foreground text-sm">Artwork</span>
              </div>
              <div className="floating animate-delay-300">
                <span className="block text-3xl font-bold bg-gradient-to-r from-nft-purple to-nft-blue bg-clip-text text-transparent">25K+</span>
                <span className="text-muted-foreground text-sm">Auctions</span>
              </div>
              <div className="floating animate-delay-500">
                <span className="block text-3xl font-bold bg-gradient-to-r from-nft-purple to-nft-blue bg-clip-text text-transparent">15K+</span>
                <span className="text-muted-foreground text-sm">Artists</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Featured NFTs */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {featuredNfts.map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className={index === 2 ? "col-span-2" : ""}
                  style={{ 
                    transform: `translateY(${index % 2 === 0 ? '10px' : '-10px'})`,
                    animation: `floating ${4 + index}s ease-in-out infinite ${index * 0.5}s`
                  }}
                >
                  <NFTCard nft={nft} featured={index === 0} />
                </motion.div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360], 
                opacity: [0.3, 0.7, 0.3] 
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" }, 
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
              }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-nft-purple/30 rounded-full"
            ></motion.div>
            
            <motion.div
              animate={{ 
                rotate: [0, -360], 
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" }, 
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 } 
              }}
              className="absolute -bottom-8 -left-8 w-24 h-24 border border-nft-blue/30 rounded-full"
            ></motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-nft-purple/10 to-nft-blue/10 filter blur-[50px] -z-10"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
