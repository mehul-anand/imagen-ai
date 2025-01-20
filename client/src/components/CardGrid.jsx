import React from "react";
import Card from "./Card";

const CardGrid = ({ data, errorMessage }) => {
  if (data && data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{errorMessage}</h2>
  );
};

export default CardGrid;
