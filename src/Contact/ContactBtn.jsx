import React, { useState } from 'react'

const ContactBtn = () => {
  const [Name, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (!Name || !email || !contactNumber || !message) {
      alert("Please fill out all fields before submitting!");
      return; // Don't submit if any field is empty
    }

    // If all fields are filled, submit the information
    alert(`Message Sent! \nName: ${Name} \nEmail: ${email} \nPhone: ${contactNumber} \nMessage: ${message}`);
  };

  return (
   
         
      <div className="w-full max-w-md p-6 sm:p-4 text-white">
        <p className="text-xl font-bold text-center">Contact Us</p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={Name}  // Binding the Name state to input field
              onChange={(e) => setYourName(e.target.value)}  // Update Name state on change
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  )
}

export default ContactBtn
