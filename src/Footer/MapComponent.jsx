import React from 'react';
import MapComp from './MapComp';
import BottomFooter from './BottomFooter';
import InfoFooter from './InfoFooter';

function MapComponent() {
    return (
        <div className="text-center overflow-hidden w-full py-2 flex flex-col bg-black items-start">
            <div className="h-auto w-full max-w-screen-xl m-auto flex flex-col justify-between py-8 px-4">
                <div className="flex flex-col md:flex-row justify-around items-center w-full">
                    {/* Map and InfoFooter are stacked on small screens, side by side on larger screens */}
                    <MapComp />
                    <InfoFooter />
                </div>

                {/* Border at the bottom */}
            </div>
            <div className="w-full m-auto border-t-4 border-gray-700 py-6  rounded-sm flex  ">
               <div className="w-full lg:px-16 px-0">
                    <BottomFooter />
                </div>
                </div>
        </div>
    );
}

export default MapComponent;
