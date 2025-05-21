import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import GenerateVideo from './pages/GenerateVideo';
import SavedVideos from './pages/SavedVideos';
import VideosFromOthers from './pages/VideosFromOthers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import XPBar from './components/XPBar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <XPBar />
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/generate" element={<GenerateVideo />} />
              <Route path="/saved" element={<SavedVideos />} />
              <Route path="/discover" element={<VideosFromOthers />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}