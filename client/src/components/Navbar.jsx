import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] mb-10">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="flex justify-between gap-3">
        <SignedIn>
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">Sign In</button>
          </SignInButton>
          <SignUpButton >
            <button className="text-[#6469ff] bg-white font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-[#6469ff]">Sign Up</button>
            </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
}

export default Navbar;
