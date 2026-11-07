import React from "react";
import Hero from "../../components/Hero";
import StatsBar from "../../components/StatsBar";
import StudioIntro from "../../components/StudioIntro";
import ServicesSection from "../../components/ServicesSection";
import PortfolioGallery from "../../components/PortfolioGallery";
import PortraitSection from "../../components/PortraitSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import BookingCTA from "../../components/BookingCTA";
import FAQ from "../../components/FAQ";

export default function Home({ onOpenBooking }) {
  return (
    <main id="main">
      <Hero onOpenBooking={onOpenBooking} />
      <StatsBar />
      <div className="bg-wrapper">
        <StudioIntro />
        <ServicesSection />
      </div>
      <PortfolioGallery />
      <PortraitSection />
      <WhyChooseUs />
      <Testimonials />
      <BookingCTA onOpenBooking={onOpenBooking} />
      <FAQ />
    </main>
  );
}
