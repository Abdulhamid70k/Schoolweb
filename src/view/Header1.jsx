import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      onLogin();
      onClose();
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-sm">
        <h2 className="text-lg sm:text-xl mb-4">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full mb-2 p-2 border rounded text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 p-2 border rounded text-sm"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
          Login
        </button>
        <button onClick={onClose} className="ml-2 text-gray-600 text-sm">
          Cancel
        </button>
      </div>
    </div>
  );
};

const Header1 = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className='w-full bg-[#175b8d] text-white py-2 sm:py-3 lg:py-4'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <div className='hidden lg:flex items-center space-x-4'>
              <span className='flex items-center text-sm'><Phone size={14} className="mr-1" />+91 8943787378</span>
              <span className='flex items-center text-sm'><Mail size={14} className="mr-1" />admission.example.com</span>
            </div>
            <div className='flex items-center space-x-4'>
              <a href="#" className='hidden lg:inline-block text-sm hover:underline'>Career</a>
              {isLoggedIn ? (
                <button onClick={handleLogout} className='text-sm hover:underline'>Logout</button>
              ) : (
                <button onClick={() => setIsLoginModalOpen(true)} className='text-sm border px-3 py-2 rounded-full hover:text-black hover:bg-slate-400 '>Admin Login</button>
              )}
              <div className='flex items-center space-x-2'>
                <Facebook size={16} />
                <Instagram size={16} />
                <Twitter size={16} />
                <Linkedin size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header1;