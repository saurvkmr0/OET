import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission (e.g., send to backend or show an alert)
    alert(`Email submitted: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center z-20">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-gradient text-white text-lg relative left-[65px] w-[400px] h-[50px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your email"
        required
      />
      <button
        type="submit"
        className="relative right-[65px] px-4 py-2 bg-[#88D2F2] text-[#024B6A] hover:text-white rounded-md hover:bg-[#024B6A] focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Book a Demo
      </button>
    </form>
  );
};

export default EmailInput;
