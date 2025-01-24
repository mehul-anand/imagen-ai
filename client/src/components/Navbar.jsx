import React from "react";
import { Link, useMatch } from "react-router-dom";
import logo from "../assets/logo.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const createMatch = useMatch("/create-post");
  // const communityMatch = useMatch("/commmunity")
  return (
    <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#6469ff] mb-10">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="flex justify-between gap-3">
        <SignedIn>
          {createMatch ? (
            <>
              <Link to="/community">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Community
                  </div>
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/create-post">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Create Art
                  </div>
                </button>
              </Link>
            </>
          )}
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="sm:px-8 sm:py-2 px-3 py-2 relative group transition duration-200 text-white">
                Sign In
              </div>
            </button>
          </SignInButton>

          <SignUpButton>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="sm:px-8 sm:py-2 px-3 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Sign Up
              </div>
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
}

export default Navbar;
