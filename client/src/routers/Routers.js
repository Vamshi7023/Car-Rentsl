import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Aos from 'aos';
import 'aos/dist/aos.css';
import CarTypes from "../components/UI/CarTypes"
import Suv from "../components/UI/Suv"
import SedanPage from "../components/UI/SedanPage";
import SportsCarPage from '../components/UI/SportsCarPage'
const LazyAbout = React.lazy(() => import('../pages/About'));
const LazyCars = React.lazy(() => import('../pages/CarListing'));
const LazyBlog = React.lazy(() => import('../pages/Blog'));
const LazyContact = React.lazy(() => import('../pages/Contact'));

const Routers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<React.Suspense><LazyAbout /></React.Suspense>} />
      <Route path="/carTypes" element={<CarTypes />} />
      <Route path="/sedan" element={<SedanPage />} />
      <Route path="/suv" element={<Suv />} />
      <Route path="/sports-car" element={<SportsCarPage />} />      <Route path="/cars" element={<React.Suspense><LazyCars /></React.Suspense>} />
      <Route path="/cars/:slug" element={<React.Suspense><CarDetails /></React.Suspense>} />
      <Route path="/blogs" element={<React.Suspense><LazyBlog /></React.Suspense>} />
      <Route path="/blogs/:slug" element={<React.Suspense><BlogDetails /></React.Suspense>} />
      <Route path="/contact" element={<React.Suspense><LazyContact /></React.Suspense>} />
      <Route path="*" element={<React.Suspense><NotFound /></React.Suspense>} />
    </Routes>
  );
};

export default Routers;