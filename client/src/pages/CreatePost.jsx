import React, { useState } from "react";
import Components from "../components";

const { FormField, Loader } = Components;
import { preview } from "../assets";
import {getRandomPrompt} from "../utils";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function CreatePost() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    prompt: "",
    photo: "",
  });

  const [imgGen, setImgGen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.title && user) {
      setLoading(true);
      try {
        const response = await fetch("https://imagen-ai-bqni.onrender.com/api/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify({title:form.title,prompt:form.prompt,photo:form.photo,userId:user.id})
        });
        await response.json();
        navigate("/")
      } catch (error) {
        alert(error)

      }finally{
        setLoading(false)
      }
    }else{
      alert("Please enter a prompt and generate an image with it's title")
    }
  };
  const formChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const randomPromptHandler = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    console.log(`randomPrompt : ${randomPrompt}`);
    setForm({ ...form, prompt: randomPrompt });
  };
  const generateImg = async () => {
    if (form.prompt) {
      try {
        setImgGen(true);
        const response = await fetch(
          `https://imagen-ai-bqni.onrender.com/api/image/generate?prompt=${encodeURIComponent(
            form.prompt
          )}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }
        );
        const data = await response.json();
        if (response.ok) {
          setForm({
            ...form,
            photo: data.photo,
          });
        } else {
          alert("Can't generate that now");
        }
      } catch (error) {
        console.error("Error in CreatePost: ", error);
        alert("Caught an error lurking");
      } finally {
        setImgGen(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Your lab</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create your own images from your creative prompts
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-16 max-w-3xl">
        <div className="flex flex-col gap-5">
          <FormField
            label="Title"
            type="text"
            name="title"
            placeholder="Enter the name of your masterpiece"
            value={form.title} // useState form above
            handleChange={formChangeHandler}
          />
          <FormField
            label="Prompt"
            type="text"
            name="prompt"
            placeholder="Enter your prompt (eg. a UFO hovering over a serene lavender field at sunset, photography)"
            value={form.prompt}
            handleChange={formChangeHandler}
            isRandom
            handleRandom={randomPromptHandler}
          />
        </div>
        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
          {form.photo ? (
            <>
              <img
                className="w-full h-full object-contain"
                src={form.photo}
                alt={form.prompt}
              />
            </>
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
            />
          )}{" "}
          {/* useState form */}
          {imgGen && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>
          )}
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImg}
            className="text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            disabled={imgGen?true:false}
          >
            {imgGen ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            You can share your images with the community too , you'll find yours
            in the community showcase 🚀
          </p>
          <button
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit"
            disabled={loading?true:false}
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>

      <img src="" alt="" />
    </section>
  );
}

export default CreatePost;
