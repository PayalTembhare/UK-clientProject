import React from 'react';

const ImageGallery = (props) => {
    const { SerData } = props;
    

    // console.log(ServicesData)
    // Function to render rows dynamically for each type of service
    const renderRows = () => {
        return SerData.map((data, index) => (
            <div className='p-3 mt-16' key={index}>
                <h2 className="lg:text-5xl text-4xl font-semibold text-start lg:ml-10 mx-1 mt-4 text-yellow-300 border-b-4 pb-4">{data.title}</h2>

                {/* Iterate through each service in the data */}
                {Object.keys(data.data).map((key) => {
                    const service = data.data[key];
                    return (
                        <div key={key}>
                            <h3 className=" text-center font-extrabold pt-11 pb-4 w-full lg:text-4xl text-3xl">{service.name}</h3>
                            <p className="text-center text-gray-500 mb-4">{service.description}</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 justify-center items-center  border-b-4  pb-7">
                                {/* Map through the images for each service */}
                                {service.imgs.map((img, imgIndex) => (
                                    <div className="relative group overflow-hidden rounded-lg" key={imgIndex}>
                                        <img
                                            src={img}
                                            alt={`Gallery ${imgIndex + 1}`}
                                            className="w-full h-auto rounded-lg shadow-lg transition-transform transform group-hover:scale-105 z-10"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        ));
    };

    return (
        <div className="container mx-auto py-8 relative ">
            {renderRows()}
        </div>
    );
};

export default ImageGallery;
