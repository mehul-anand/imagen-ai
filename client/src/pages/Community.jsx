import React, { useEffect, useState } from "react";
import Components from "../components";
import { Link } from "react-router-dom";

const { FormField, Loader, CardGrid } = Components;

function Community() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [searchedResult, setSearchedResult] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  const searchFunc = (e) => {
    clearTimeout(searchTimeout);
    setSearchedText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const filteredPosts = posts.filter(
          (postObj) =>
            postObj.title.toLowerCase().includes(searchedText.toLowerCase()) ||
            postObj.prompt.toLowerCase().includes(searchedText.toLowerCase())
        );
        setSearchedResult(filteredPosts);
      }, 800)
    );
  };

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://imagen-ai-bqni.onrender.com/api/posts",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const result = await response.json();
        setPosts(result.data.reverse());
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <section className="max-w-7xl mx-auto min-h-screen">
        <div>
          <h1 className="font-extrabold text-white text-[32px]">
            Community Showcase
          </h1>
          <p className="mt-2 text-[#d8dfe6] text-[16px] max-w-[500px]">
            Browse through the collection of stunning images made by the
            community!
          </p>
          <p className="my-2 text-[#d8dfe6] text-[16px] max-w-[500px]">
            Wanna create yours? Well I have a good news for ya
          </p>
          <Link to="/create-post">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Create Art
              </div>
            </button>
          </Link>
        </div>
        <div className="mt-16">
          <FormField
            label="Search a post"
            type="text"
            name="text"
            placeholder="Type your search query here and press enter"
            value={searchedText}
            handleChange={searchFunc}
          />
        </div>
        <div className="mt-10">
          {isLoading ? (
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-300 rounded-lg h-40"
                ></div>
              ))}
            </div>
          ) : (
            <>
              {searchedText && (
                <h2 className="font-medium text-[#d8dfe6] text-xl mb-3">
                  Showing results for{" "}
                  <span className="text-white underline decoration-[#6469ff]">
                    {searchedText}
                  </span>
                </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                {searchedText ? (
                  <CardGrid
                    data={searchedResult} //searchedPosts
                    errorMessage="No search results found"
                  />
                ) : (
                  <>
                    <CardGrid
                      data={posts} //allPosts
                      errorMessage="No posts found"
                    />
                    <button
                      onClick={fetchPosts}
<<<<<<< HEAD
                      className="font-inter inline-flex h-12 sm:min-h-3/5 animate-shimmer items-center justify-center rounded-md border border-[#6469ff] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors"
=======
                      className="font-inter inline-flex h-12 sm:h-3/5 animate-shimmer items-center justify-center rounded-md border border-[#6469ff] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors"
>>>>>>> ce9ef8ad8343227c86deb04e1fd7e293dbc3d014
                    >
                      Refresh
                    </button>
                  </>
                )}
              </div>
            </>
<<<<<<< HEAD
        )}
=======
          )}
>>>>>>> ce9ef8ad8343227c86deb04e1fd7e293dbc3d014
        </div>
      </section>
    </div>
  );
}

export default Community;
