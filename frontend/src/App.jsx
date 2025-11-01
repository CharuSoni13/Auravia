import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SaleSection from "./components/SaleSection.jsx";
import DealsSection from "./components/DealsSection.jsx";
import VisaFreeSection from "./components/VisaFreeSection.jsx";
import HolidayByTheme from "./components/HolidayByTheme.jsx";
import InternationalDestinations from "./components/InternationalDestinations.jsx";
import OffersSection from "./components/OffersSection.jsx";
import PopularDestinations from "./components/PopularDestinations.jsx";
import Footer from "./components/Footer.jsx";
import AIAssistant from "./components/AIAssistant.jsx";
import "./App.css";

// 🌍 Pages
import FlightsPage from "./pages/FlightsPage.jsx";
import HotelsPage from "./pages/HotelsPage.jsx";
import HomestaysPage from "./pages/HomestaysPage.jsx";
import CabPage from "./pages/CabPage.jsx";
import CabResults from "./pages/CabResults.jsx";
import OffersPage from "./pages/OffersPage.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import OfferDetailPage from "./pages/OfferDetailPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

// 🧱 Admin
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";

function App() {
  return (
    <>
      {/* Navbar only on non-admin pages */}
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />

              <Routes>
                {/* 🏠 Home Page */}
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <SaleSection />
                      <DealsSection />
                      <VisaFreeSection />
                      <HolidayByTheme />
                      <InternationalDestinations />
                      <OffersSection />
                      <PopularDestinations />
                      <Footer />
                    </>
                  }
                />

                {/* 🧭 Other Pages */}
                <Route path="/flights" element={<FlightsPage />} />
                <Route path="/hotels" element={<HotelsPage />} />
                <Route path="/homestays" element={<HomestaysPage />} />
                <Route path="/cabs" element={<CabPage />} />
                <Route path="/cab-results" element={<CabResults />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/offers/:id" element={<OfferDetailPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Routes>

              <AIAssistant />
            </>
          }
        />

        {/* 🔒 Admin Protected Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
