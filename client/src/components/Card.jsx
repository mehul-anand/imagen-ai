import React from "react";
import { download, mail } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ title, prompt, photo, userMail, username }) => {
  return (
    <>
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <img
          className="w-full h-auto object-cover rounded-xl"
          src={photo}
          alt={prompt}
          loading="lazy"
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 m-2 p-4 rounded-md">
          <p className="text-white text-sm overflow-y-auto prompt underline decoration-white decoration-2">
            {title}
          </p>

          <div className="mt-5 flex justify-between items-center gap-2 ">
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <p className="text-white text-sm">{prompt}</p>
                <div className="flex">
                  <p className="text-white text-sm">- {username}</p>
                  <div className="flex ml-auto gap-3 sm:gap-5">
                    <button
                      type="button"
                      onClick={() => downloadImage(title, photo)}
                      className="outline-none bg-transparent border-none"
                    >
                      <img
                        src={download}
                        alt="download"
                        className="w-6 h-6 object-contain invert"
                      />
                    </button>
                    <a
                      href={`mailto:${userMail}?subject=ImagenAI&body=Hello%2C%20I%20saw%20your%20work%20on%20ImagenAI.%20I%20wanted%20to%20discuss%20regarding%20the%20same...`}
                      target="_blank"
                      rel="noopener noreferrer" // Security measure for external links
                      className="text-white"
                    >
                      <img
                        src={mail}
                        alt="Email the artist"
                        className="w-6 h-6 object-contain invert"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
