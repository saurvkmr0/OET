import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission (e.g., send to backend or show an alert)
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="flex justify-center z-20 w-full">
    <form id="signin" onSubmit={handleSubmit} className="">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-gradient text-white text-lg relative  w-[250px] sm:w-[400px] h-[50px] px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your email"
        required
      />
      <button
        type="submit"
        className="relative bottom-[1px] right-[1px] px-4 py-2 bg-[#88D2F2] text-[#024B6A] hover:text-white rounded-r-lg hover:bg-[#024B6A] border-[5px] border-[rgba(69,69,69,1)]"
      >
        Book A Demo
      </button>
    </form>
    </div>
  );
};

export default EmailInput;
