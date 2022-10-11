import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const VoteCard = ({ title }) => {
  const [count, setCount] = useState(Math.round(Math.random() * 15));

  return (
    <div className="flex items-center p-5 justify-between gap-4 w-2/6  border-2 border-red-800 rounded-md">
      <div className="w-2/3 whitespace-pre-wrap text-left">
        <h1>{title}</h1>
      </div>
      <div>
        <FaChevronCircleUp onClick={() => setCount((prev) => prev + 1)} />
        {count}
        <FaChevronCircleDown onClick={() => setCount((prev) => prev - 1)} />
      </div>
    </div>
  );
};

export default VoteCard;
