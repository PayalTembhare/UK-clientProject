import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import NavbarWithSolidBackground from './Component/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import BlogsPage from './Pages/BlogsPage';
import Services from './Pages/Services';
import MapComponent from './Footer/MapComponent';
import Toparrow from './ArrowTop/Toparrow';
import WhatsAppChatButton from './WhatsApp/WhatsAppChatButton';
import { MasonryGridGallery } from './Pages/Gallery';
import ScrollToTop from './Component/ScrollToTop';
import Purchases from './Purchases/Purchases';
import ImageGallery from './Component/ImageGallery';
import { Advertisement, Album, Construction, Drone, Marrager, Offical, Social } from './ServicesData/ServicesData';
import { CombinedComponent } from './Pages/AnimationCont';
import ErrorSection7 from './Pages/ErrornotFound';
import { OtherService } from './Pages/OtherService';

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Redirect to the homepage when the page is loaded or refreshed
  //   navigate('/');
  // }, []);

  return (

    <Router>
      <ScrollToTop />  {/* Add the ScrollToTop component here */}
      <NavbarWithSolidBackground />
      <WhatsAppChatButton />
      {/* <CameraFollower/> */}
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<BlogsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<MasonryGridGallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/animation" element={<CombinedComponent />} />
        <Route path="/ResinArtwork" element={<OtherService />} />
        <Route path="/marriage" element={<ImageGallery SerData={Marrager} />} />
        <Route path="/album" element={<ImageGallery SerData={Album} />} />
        <Route path="/offical" element={<ImageGallery SerData={Offical} />} />
        <Route path="/social" element={<ImageGallery SerData={Social} />} />
        <Route path="/drone" element={<ImageGallery SerData={Drone} />} />
        <Route path="/construction" element={<ImageGallery SerData={Construction} />} />
        <Route path="/advertisement" element={<ImageGallery SerData={Advertisement} />} />
        <Route path="*" element={<ErrorSection7 />} />
      </Routes>
      <Toparrow />
      <MapComponent />
    </Router>
  );
}

export default App;
