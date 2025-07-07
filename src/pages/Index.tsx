
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MarketTicker from '../components/MarketTicker';
import PromotionalPosterSlider from '../components/PromotionalPosterSlider';
import EnhancedAboutSection from '../components/EnhancedAboutSection';
import AccountHandlingSection from '../components/AccountHandlingSection';
import FranchiseSection from '../components/FranchiseSection';
import UpdatedPremiumSection from '../components/UpdatedPremiumSection';
import ContactSection from '../components/ContactSection';
import UpdatedFooter from '../components/UpdatedFooter';
import EnquireNowButton from '../components/EnquireNowButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PromotionalPosterSlider />
        <EnhancedAboutSection />
        <AccountHandlingSection />
        <FranchiseSection />
        <UpdatedPremiumSection />
        <MarketTicker />
        <ContactSection />
      </main>
      <UpdatedFooter />
      <EnquireNowButton />
    </div>
  );
};

export default Index;
