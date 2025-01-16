import React from "react";
import WhatsAppChatButton from "./WhatsAppChatButton";


const Layout = ({ children }) => {
    return (
        <div>
            {children}
            <WhatsAppChatButton />
        </div>
    );
};

export default Layout;
