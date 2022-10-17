import React, { useState } from "react";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaRegCommentDots,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";

const VoteCard = ({ title }) => {
  const [count, setCount] = useState(Math.round(Math.random() * 15));

  return (
    <div className="flex flex-col p-5  border-2 border-red-800 rounded-md  w-2/6">
      <div className="flex items-center w-full mb-2 justify-start gap-4 ">
        <div>
          <FaArrowAltCircleUp onClick={() => setCount((prev) => prev + 1)} />
          {count}
          <FaArrowAltCircleDown onClick={() => setCount((prev) => prev - 1)} />
        </div>
        <div className="w-2/3 whitespace-pre-wrap text-left">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <FaRegCommentDots onClick={() => {}} />
          <p>Comments</p>
        </div>
        <div className="flex items-center gap-1">
          <FiShare onClick={() => {}} />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default VoteCard;
