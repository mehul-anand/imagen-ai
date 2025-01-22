import React from "react";
import { Vortex } from "../components/Vortex";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-100% mx-auto h-screen overflow-hidden bg-black">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h3 className="text-white text-2xl md:text-6xl font-bold text-center mb-2">
          Welcome to
        </h3>
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center underline decoration-[#6469ff]">
          Imagen AI
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Unleash creativity with AI-driven diffusion art—generate, showcase,
          and connect with fellow creators.
        </p>
        <div className="flex justify-between gap-3 mt-2 ">
          <Link to="/community">
            <button className="font-inter inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#6469ff] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors">
              Community Showcase
            </button>
          </Link>
          <Link to="/create-post">
            <button className="font-inter inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#6469ff] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors">
              Create Art
            </button>
          </Link>
        </div>
      </Vortex>
    </div>
  );
}

export default Home;
