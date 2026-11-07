import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingRail from "./components/FloatingRail";
import BookingModal from "./components/BookingModal";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WeddingPhotography from "./pages/ServiceDetails/WeddingPhotography";
import PreWeddingPhotography from "./pages/ServiceDetails/PreWeddingPhotography";
import EngagementPhotography from "./pages/ServiceDetails/EngagementPhotography";
import CandidPhotography from "./pages/ServiceDetails/CandidPhotography";
import MaternityPhotography from "./pages/ServiceDetails/MaternityPhotography";
import BabyBirthdayPhotography from "./pages/ServiceDetails/BabyBirthdayPhotography";
import CorporatePhotography from "./pages/ServiceDetails/CorporatePhotography";
import Portrait from "./pages/Portrait";
import Restoration from "./pages/Restoration";
import Blog from "./pages/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const location = useLocation();

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  // Auto-open enquiry modal once on homepage load (matching original Perfect Studio site behavior)
  useEffect(() => {
    if (location.pathname === "/") {
      const hasSeenModal = sessionStorage.getItem("perfect_studio_modal_shown");
      if (!hasSeenModal) {
        const timer = setTimeout(() => {
          setBookingModalOpen(true);
          sessionStorage.setItem("perfect_studio_modal_shown", "true");
        }, 1800);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname]);

  return (
    <div className="site-wrapper">
      <ScrollToTop />
      
      {/* Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Routes */}
      <Routes>
        <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
        <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
        <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
        
        {/* Service Details */}
        <Route path="/services/wedding-photography" element={<WeddingPhotography onOpenBooking={handleOpenBooking} />} />
        <Route path="/wedding-photography" element={<WeddingPhotography onOpenBooking={handleOpenBooking} />} />
        
        <Route path="/services/pre-wedding-photography" element={<PreWeddingPhotography onOpenBooking={handleOpenBooking} />} />
        <Route path="/pre-wedding-photography" element={<PreWeddingPhotography onOpenBooking={handleOpenBooking} />} />
        
        <Route path="/services/engagement-photography" element={<EngagementPhotography onOpenBooking={handleOpenBooking} />} />
        <Route path="/engagement-photography" element={<EngagementPhotography onOpenBooking={handleOpenBooking} />} />
        
        <Route path="/services/candid-photography" element={<CandidPhotography onOpenBooking={handleOpenBooking} />} />
        <Route path="/candid-photography" element={<CandidPhotography onOpenBooking={handleOpenBooking} />} />
        
        <Route path="/services/maternity-photography" element={<MaternityPhotography onOpenBooking={handleOpenBooking} />} />
        <Route path="/maternity-shoot" element={<MaternityPhotography onOpenBooking={handleOpenBooking} />} />
        
        <Route path="/services/baby-birthday-photography" element={<BabyBirthdayPhotography onOpenBooking={handleOpenBooking} />} />
        <Route path="/baby-photoshoot" element={<BabyBirthdayPhotography onOpenBooking={handleOpenBooking} />} />
        <Route path="/birthday-photoshoot" element={<BabyBirthdayPhotography onOpenBooking={handleOpenBooking} />} />
        
        <Route path="/services/corporate-photography" element={<CorporatePhotography onOpenBooking={handleOpenBooking} />} />
        <Route path="/corporate-events" element={<CorporatePhotography onOpenBooking={handleOpenBooking} />} />
        
        <Route path="/services/portrait-photography" element={<Portrait onOpenBooking={handleOpenBooking} />} />
        <Route path="/portrait-photography" element={<Portrait onOpenBooking={handleOpenBooking} />} />
        
        <Route path="/services/photo-restoration" element={<Restoration onOpenBooking={handleOpenBooking} />} />
        <Route path="/photo-restoration" element={<Restoration onOpenBooking={handleOpenBooking} />} />
        
        {/* Blog */}
        <Route path="/blog" element={<Blog onOpenBooking={handleOpenBooking} />} />
        <Route path="/blog/:id" element={<BlogPost onOpenBooking={handleOpenBooking} />} />
        
        {/* Contact & Booking */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<Booking />} />
      </Routes>

      {/* Floating Action Rail */}
      <FloatingRail onOpenEnquiry={handleOpenBooking} />

      {/* Global Booking & Enquiry Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
