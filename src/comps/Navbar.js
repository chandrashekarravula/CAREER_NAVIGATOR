import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

// Firebase config (do not modify on logout)
const firebaseConfig = {
  apiKey: "AIzaSyBzj4qu-Gwq0GiNnH4VpouXvuMskQ5Pel4",
  authDomain: "appmy-28bf8.firebaseapp.com",
  projectId: "appmy-28bf8",
  storageBucket: "appmy-28bf8.appspot.com",
  messagingSenderId: "1010049580716",
  appId: "1:1010049580716:web:3f360f62fbb8dfb009e909",
  measurementId: "G-6T1BNRL2QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const NavBar = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-black p-4 pb-3 mb-0 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/55/81/35/1000_F_555813573_TOPLgVTydcbC0CqyPAGbJpgoXuYcDnMh.jpg"
          alt="Logo"
          className="w-8 h-8 mr-4 rounded-full"
        />
        <ul className="flex space-x-4 text-white">
          <li className="hover:underline cursor-pointer"><a href="/Home">Home</a></li>
          <li className="hover:underline cursor-pointer"><a href="/About">About</a></li>
          <li className="hover:underline cursor-pointer"><a href="/Contact">Contact</a></li>
        </ul>
      </div>
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <p className="text-white">Welcome, {user.displayName}!</p>
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
            <button
              className="bg-white text-black px-4 py-2 rounded focus:outline-none"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white text-black px-4 py-2 rounded focus:outline-none"
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