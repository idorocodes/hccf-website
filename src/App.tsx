/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { SearchModal } from './components/layout/SearchModal';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AudioPlayerProvider } from './context/AudioPlayerContext';
import { FloatingAudioPlayer } from './components/media/FloatingAudioPlayer';

// Page Imports
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FellowshipPage } from './pages/FellowshipPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { MinistriesPage } from './pages/MinistriesPage';
import { MinistryDetailPage } from './pages/MinistryDetailPage';
import { SermonsPage } from './pages/SermonsPage';
import { MediaPage } from './pages/MediaPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimoniesPage } from './pages/TestimoniesPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage';
import { AnnouncementDetailPage } from './pages/AnnouncementDetailPage';
import { FirstTimerPage } from './pages/FirstTimerPage';
import { PrayerRequestPage } from './pages/PrayerRequestPage';
import { ContactPage } from './pages/ContactPage';
import { GivePage } from './pages/GivePage';
import { GiveSuccessPage } from './pages/GiveSuccessPage';
import { GiveFailedPage } from './pages/GiveFailedPage';
import { PaymentStatusPage } from './pages/PaymentStatusPage';
import { DevotionalPage } from './pages/DevotionalPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <AudioPlayerProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FAF7F2] text-[#141414] flex flex-col font-sans selection:bg-[#F4D900] selection:text-black">
          {/* Navigation */}
          <Navbar
            onOpenSearch={() => setSearchOpen(true)}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Mobile Menu Drawer */}
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenSearch={() => setSearchOpen(true)}
          />

          {/* Search Modal */}
          <SearchModal
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
          />

          {/* Main Content Area */}
          <main className="flex-1 pb-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/fellowship" element={<FellowshipPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/ministries" element={<MinistriesPage />} />
              <Route path="/ministries/:slug" element={<MinistryDetailPage />} />
              <Route path="/sermons" element={<SermonsPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:slug" element={<EventDetailPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonies" element={<TestimoniesPage />} />
              <Route path="/announcements" element={<AnnouncementsPage />} />
              <Route path="/announcements/:slug" element={<AnnouncementDetailPage />} />
              <Route path="/devotional" element={<DevotionalPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/first-timer" element={<FirstTimerPage />} />
              <Route path="/prayer-request" element={<PrayerRequestPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/give" element={<GivePage />} />
              <Route path="/give/success" element={<GiveSuccessPage />} />
              <Route path="/give/failed" element={<GiveFailedPage />} />
              <Route path="/give/status/:reference" element={<PaymentStatusPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Floating Audio Player */}
          <FloatingAudioPlayer />

          {/* Global Footer */}
          <Footer />
        </div>
      </AudioPlayerProvider>
    </BrowserRouter>
  );
}
