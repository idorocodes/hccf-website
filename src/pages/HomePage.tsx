import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { Welcome } from '../components/home/Welcome';
import { ScriptureOfWeek } from '../components/home/ScriptureOfWeek';
// import { FeaturedEvent } from '../components/home/FeaturedEvent';
import { MinistriesPreview } from '../components/home/MinistriesPreview';
import { SermonsPreview } from '../components/home/SermonsPreview';
import { TestimoniesSection } from '../components/home/TestimoniesSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { GiveCTA } from '../components/home/GiveCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="HCCF FUOYE | His Coming Campus Fellowship"
        description="Official website for His Coming Campus Fellowship (HCCF) at the Federal University Oye-Ekiti (FUOYE). Raising students for Christ and preparing for His coming."
      />
      <div className="flex flex-col">
        <Hero />
        <Welcome />
        <ScriptureOfWeek />
        
        {/* <FeaturedEvent /> */}
        <MinistriesPreview />
        <SermonsPreview />
        <TestimoniesSection />
        <GalleryPreview />
        <GiveCTA />
      </div>
    </>
  );
};
