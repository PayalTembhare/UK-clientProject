import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField'; // Import Material-UI TextField
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const Contact = ({ isPopupVisible = false, setIsPopupVisible = () => { } }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        message: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [sentMessage, setSentMessage] = useState({
        message: '',
        fulfilled: false,
        success: null,
    });
    const [btnDisabled, setBtnDisabled] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) errors.email = "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email format";
        if (!formData.contactNumber) errors.contactNumber = "Contact Number is required";
        if (!formData.message) errors.message = "Message is required";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("Please fix the form errors before submitting.");
            return;
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            contact_number: formData.contactNumber,
            message: formData.message,
        };

        setBtnDisabled(true);

        emailjs
            .send(
                "service_7b48mza", // Replace with your EmailJS service ID
                "template_2bu1fl9", // Replace with your EmailJS template ID
                templateParams,
                "uSwtqdhz72UbQAQX9" // Replace with your EmailJS  key
            )
            .then(
                () => {
                    setFormData({ name: "", email: "", contactNumber: "", message: "" });
                    setBtnDisabled(false);
                    setSentMessage({
                        fulfilled: true,
                        message: "Message sent successfully!",
                        success: true,
                    });
                },
                () => {
                    setBtnDisabled(false);
                    setSentMessage({
                        fulfilled: true,
                        message: "Failed to send the message. Please try again.",
                        success: false,
                    });
                }
            );
    };

    useEffect(() => {
        if (sentMessage.fulfilled) {
            const timer = setTimeout(() => {
                setSentMessage({ message: '', fulfilled: false, success: null });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [sentMessage]);

    const handlePopupToggle = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div>
            {isPopupVisible && (
                <div
                    className="fixed h-screen inset-0 bg-black opacity-50 z-10"
                    onClick={handlePopupToggle}
                ></div>
            )}

            {isPopupVisible && (
                <div
                    className="fixed top-[400px] w-[350px] mx-auto inset-0 flex justify-center items-center z-20"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="w-full max-w-md p-6 sm:p-4 rounded-lg shadow-lg bg-gray-800 relative">
                        <p className="text-2xl font-bold text-center text-white">Contact Us</p>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-6 text-white">
                            {["name", "email", "contactNumber", "message"].map((field, idx) => (
                                <div key={idx}>
                                    <TextField
                                        type={field === "email" ? "email" : "text"}
                                        label={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                        value={formData[field]}
                                        name={field}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        InputProps={{ style: { color: "white" } }}
                                        InputLabelProps={{ style: { color: "white" } }}
                                        className="bg-gray-700 p-4 rounded-lg"
                                        required
                                        multiline={field === "message"}
                                        rows={field === "message" ? 4 : 1}
                                        error={!!formErrors[field]}
                                        helperText={formErrors[field] || ""}
                                    />
                                </div>
                            ))}
                            <div>
                                <button
                                    type="submit"
                                    className={`w-full px-4 py-2 ${btnDisabled ? "bg-gray-600" : "bg-blue-500"} text-white rounded-md hover:bg-blue-700`}
                                    disabled={btnDisabled}
                                >
                                    Submit
                                </button>
                                {sentMessage.fulfilled && (
                                    <h1 className={sentMessage.success ? "text-green-500" : "text-red-500"}>
                                        {sentMessage.message}
                                    </h1>
                                )}
                            </div>
                        </form>
                        <button
                            onClick={handlePopupToggle}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
