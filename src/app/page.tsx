"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay navItems={[{ name: '#hero', id: 'hero' }, { name: '#about', id: 'about' }, { name: '#how-to-buy', id: 'how-to-buy' }, { name: '#faq', id: 'faq' }, { name: '#tokenomics', id: 'tokenomics' }, { name: '#footer', id: 'footer' }]} logoSrc="/images/logo.svg" logoWidth={50} logoHeight={50} buttonText="Start free trial" onButtonClick={() => {}} />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero title="Welcome to Mvpblocks" subtitle="wegrwherhrherherherh" primaryButtonText="Join Us" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout title="About Mvpblocks" descriptions={["We provide easy solutions for your transactions.", "Join us in making your financial tasks simpler and fun!"]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D title="How to Buy" steps={[{ title: "Step edqwfegsrhdth1", description: "wrhrhhehrshrehrerhre", image: "/images/placeholder1.avif", position: "left", isCenter: false }, { title: "Step 2", description: "Verify your identity.", image: "/images/placeholder2.avif", position: "center", isCenter: true }, { title: "Step 3", description: "Complete your purchase.", image: "/images/placeholder3.avif", position: "right", isCenter: false }]} />
      </div>
      <div id="faq" data-section="faq">
        <BentoFAQ items={[{ title: "What does Mvpblocks asawdfsa?", content: "Mvpblocks provides a simple platform for transactions across different cryptocurrencies." }, { title: "How secure is my data?", content: "We prioritize your privacy and use top-notch security protocols to ensure your data is safe." }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics title="Tokenomics" description="Understanding our token metrics is crucial for your investments." tokenData={[{ value: "1M", description: "Total Supply" }, { value: "100K", description: "Reserved for Team" }, { value: "500K", description: "Available for Sale" }]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo logoSrc="/images/logo.svg" logoAlt="Mvpblocks Logo" logoText="Mvpblocks" className="footer-logo" />
      </div>
    </SiteThemeProvider>
  );
}
