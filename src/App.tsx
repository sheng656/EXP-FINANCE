import { I18nProvider } from './lib/i18n-context';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { Hero } from './components/sections/Hero';
import { AdvantagesSection } from './components/sections/AdvantagesSection';
import { PartnersSection } from './components/sections/PartnersSection';
import { TeamSection } from './components/sections/TeamSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { BlogSection } from './components/sections/BlogSection';
import { ContactSection } from './components/sections/ContactSection';
import { FloatingActionBar } from './components/cta/FloatingActionBar';
import { BackToTop } from './components/cta/BackToTop';
import { ComplianceDisclaimer } from './components/compliance/ComplianceDisclaimer';

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-white">
        
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Advantages Section */}
          <AdvantagesSection />

          {/* Team Section */}
          <TeamSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Blog Section */}
          <BlogSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Partners Section */}
          <PartnersSection />

          {/* Global Compliance Disclaimer */}
          <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
              <ComplianceDisclaimer showDataExample />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Action Bar */}
        <FloatingActionBar />

        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </I18nProvider>
  );
}
