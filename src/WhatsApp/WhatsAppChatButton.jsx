import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Tooltip.css";

const WhatsAppChatButton = () => {
    const phoneNumber = "+44 7440605495"; // Replace with your WhatsApp number, including country code
    const message = "Hi! I need assistance.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <div className="container">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-16 right-4 transform -translate-y-1/2 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition flex items-center justify-center z-50"
                title="For inquiry, contact here"
            >
                <FaWhatsapp className="w-6 h-6" />
                
            </a>
        </div>
    );
};

export default WhatsAppChatButton;
