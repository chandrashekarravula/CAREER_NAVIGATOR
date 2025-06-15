import React, { useState, useEffect } from 'react';
import { googlepro, auth } from '../config/firebaseConfig';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const NavBar = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googlepro);
      setUser(result.user);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  useEffect(() => {
    // Use onAuthStateChanged to listen for changes in the user's login state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-black bg-opacity- p-4 pb-3 mb-0 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/55/81/35/1000_F_555813573_TOPLgVTydcbC0CqyPAGbJpgoXuYcDnMh.jpg" // Replace with your logo URL
          alt="Logo"
          className="w-8 h-8 mr-4 rounded-full"
        />
        <ul className="flex space-x-4 text-white">
          <li className="nav-item hover:underline cursor-pointer"><a href='/Home'> Home</a></li>
          <li className="nav-item hover:underline cursor-pointer"><a href ='About'> About</a></li>
          <li className="nav-item hover:underline cursor-pointer"><a href='Contact'> Contact</a></li>
        </ul>
      </div>
      <div className="google">
        {user ? (
          <div className="flex items-center space-x-4">
            <p className="text-white">Welcome, {user.displayName}!</p>
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
            <button
              className="bg-white text-white-500 px-4 py-2 rounded focus:outline-none"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white text-black-500 px-4 py-2 rounded focus:outline-none"
            onClick={handleGoogleSignIn}
          >
            Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
