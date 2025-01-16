
import React from 'react'

const MapComp = () => {
    return (
        <div className="lg:w-2/4 sm:w-1/3 mb-6">


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.1909660136207!2d-1.1606105234270534!3d52.620393072087616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760c85a44424f%3A0x6bf3c90990a2d66e!2s303%20Narborough%20Rd%2C%20Leicester%20LE3%202RB%2C%20UK!5e0!3m2!1sen!2sin!4v1736141719827!5m2!1sen!2sin"
                width="100%"
                height="250"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-2 border-gray-500 rounded-md"
            ></iframe>


            <div className="mt-6 text-white">
                <p className="font-bold text-xl">Contact Information</p>
                <p>Email: skfilmproductionsltd@gmail.com</p>
                <p>Mobile:India : +91 9975757144 <br />UK : +44 7440605495</p>
            </div>
        </div>
    )
}

export default MapComp




