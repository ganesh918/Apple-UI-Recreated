import { GlobalNav } from './components/layout/GlobalNav';
import { ChapterNav } from './components/layout/ChapterNav';
import { PromoBanner } from './components/layout/PromoBanner';
import { Footer } from './components/layout/Footer';
import { HeroProducts } from './sections/HeroProducts';
import { GuidedTour } from './sections/GuidedTour';
import { IphoneCompare } from './sections/IphoneCompare';
import { WaysToSave } from './sections/WaysToSave';
import { FeaturedAccessories } from './sections/FeaturedAccessories';
import { ServiceHighlights } from './sections/ServiceHighlights';
import { WhatMakesIphone } from './sections/WhatMakesIphone';
import { GetMoreOut } from './sections/GetMoreOut';

export default function App() {
  return (
    <div className="page">
      <GlobalNav />
      <ChapterNav />
      <PromoBanner />
      <main id="main">
        <HeroProducts />
        <GuidedTour />
        <IphoneCompare />
        <WaysToSave />
        <FeaturedAccessories />
        <ServiceHighlights />
        <WhatMakesIphone />
        <GetMoreOut />
      </main>
      <Footer />
    </div>
  );
}
