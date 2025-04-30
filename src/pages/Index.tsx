
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import CollectionsSection from '@/components/CollectionsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-nft-dark-bg text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <TrendingSection />
        <CollectionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
