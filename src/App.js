import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ReferralModal from "./components/ReferralModal";
import Programs from "./components/Programs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <Header openModal={openModal} />
      <HeroSection openModal={openModal} />
      <Features openModal={openModal} />
      <Programs />
      <FAQ />
      <Footer />
      <ReferralModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;
