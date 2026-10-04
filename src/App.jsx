import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ReferralsPage from './pages/ReferralsPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollDownButton from './components/ScrollDownButton';
import { SmoothScrollProvider } from './context/SmoothScrollContext';
import backgroundImg from './pictures/background/background.jpg';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SmoothScrollProvider>
          <ScrollToTop />
          {/* Fixed background image — stays in place while content scrolls */}
          <div
            className="fixed-bg"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          />
          <div className="fixed-bg-overlay" />
          <ScrollDownButton />
          <div className="min-h-screen font-sans relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/referrals" element={<ReferralsPage />} />
            </Routes>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
