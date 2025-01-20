import React, { useEffect, useState } from "react";
import Components from "../components";

const { FormField, Loader, CardGrid } = Components;

function Home() {
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

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://imagen-ai-bqni.onrender.com/api/posts", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
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
    fetchPosts();
  }, []);

  return (
    <div>
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">
            Community Showcase
          </h1>
          <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
            Browse through the collection of stunning images made by the
            community!
          </p>
        </div>
        <div className="mt-16">
          <FormField label="Search a post" type="text" name="text" placeholder="Type your search query here and press enter" value={searchedText} handleChange={searchFunc} />
        </div>
        <div className="mt-10">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {searchedText && (
                <h2 className="font-medium text-[#666e75] text-xl mb-3">
                  Showing results form{" "}
                  <span className="text-[#222328]">{searchedText}</span>
                </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xd:grid-cols-2 grid-cols-1 gap-3">
                {searchedText ? (
                  <CardGrid
                    data={searchedResult} //searchedPosts
                    errorMessage="No search results found"
                  />
                ) : (
                  <CardGrid
                    data={posts} //allPosts
                    errorMessage="No posts found"
                  />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
