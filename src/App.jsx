import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Footer from './components/layout/Footer';
import ScrollBackground from './components/ui/ScrollBackground';

/* Scroll to top on every route change (no hash) */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/* Scroll to hash after route change (e.g. navigating from /ai-workstations to /#budget) */
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hash, pathname]);

  return null;
};

const ProductsOverview = lazy(() => import('./sections/ProductsOverview'));
const BudgetDashboard = lazy(() => import('./sections/BudgetDashboard/BudgetDashboard'));
const VsmeDashboard = lazy(() => import('./sections/VsmeDashboard'));
const WhySection = lazy(() => import('./sections/WhySection'));
const CTASection = lazy(() => import('./sections/CTASection'));

const AIWorkstationsPage = lazy(() => import('./pages/AIWorkstationsPage'));
const EdgeSolutionsPage = lazy(() => import('./pages/EdgeSolutionsPage'));
const FormazioneAIPage = lazy(() => import('./pages/FormazioneAIPage'));
const ChiSiamoPage = lazy(() => import('./pages/ChiSiamoPage'));
const SocialPage = lazy(() => import('./pages/SocialPage'));
const EcaiBudgetPage = lazy(() => import('./pages/EcaiBudgetPage'));
const VsmeReportPage = lazy(() => import('./pages/VsmeReportPage'));

const SectionFallback = () => <div className="min-h-[50vh]" />;

/* ─── Landing Page (Home) ─── */
const LandingPage = () => (
  <>
    <ScrollBackground />
    <header>
      <Navbar />
    </header>

    <main className="relative z-10">
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <ProductsOverview />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <BudgetDashboard />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <VsmeDashboard />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <WhySection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
    </main>

    <div className="relative z-10">
      <Footer />
    </div>
  </>
);

export default function App() {
  return (
    <div className="bg-white">
      <ScrollToTop />
      <ScrollToHash />
      <Suspense fallback={<SectionFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ai-workstations" element={<AIWorkstationsPage />} />
          <Route path="/edge-solutions" element={<EdgeSolutionsPage />} />
          <Route path="/formazione-ai" element={<FormazioneAIPage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/ecai-budget" element={<EcaiBudgetPage />} />
          <Route path="/vsme-report" element={<VsmeReportPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
