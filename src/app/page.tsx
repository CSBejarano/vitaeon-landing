import {
  Header,
  HeroSection,
  TrustBadges,
  SymptomsSection,
  ProcessSection,
  DoctorSection,
  ServicesSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
  Footer,
} from '@/components/sections';

export default function VitaeonPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950">
        <HeroSection />
        <TrustBadges />
        <SymptomsSection />
        <ProcessSection />
        <DoctorSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
