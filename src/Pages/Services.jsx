import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlbumShoot from '../Wedding Services/AlbumShoot';
import OfficalShoot from '../Wedding Services/OfficialShoot';
import SocialGatheringShoot from '../Wedding Services/SocialGrathingShoot';
import DroneServices from '../Wedding Services/DroneServices';
import ConstructionServices from '../Wedding Services/ConstructionServices';
import Advertisement from '../Wedding Services/Advertisement';
import MarragerServices from '../Wedding Services/MarragerServices';

const Services = () => {
  const navigate = useNavigate();

  // Navigate to the gallery
  const goToGallery = (e) => {
    navigate('/gallery');
  };

  return (
    <div className="w-11/12 font-extrabold m-auto mt-16">
      {/* When a service is clicked, navigate to the gallery */}
      <div className='border-b-4 pb-5 ' ><MarragerServices /></div>
      <div className='border-b-4  pb-5 ' ><AlbumShoot /></div>
      <div className='border-b-4  pb-5 ' ><OfficalShoot /></div>
      <div className='border-b-4  pb-5 ' ><SocialGatheringShoot /></div>
      <div className='border-b-4  pb-5 ' ><DroneServices /></div>
      <div className='border-b-4  pb-5 ' ><ConstructionServices /></div>
      <div className='border-b-4  pb-5 ' ><Advertisement /></div>
    </div>
  );
};

export default Services;
