import React from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const VideoTitle = ({
  title,
  overview,
  releaseDate,
  reviewStar,
  originalLang,
  voteCount,
}) => {
  return (
    <div className="px-24 w-full absolute pt-56 bg-gradient-to-r from-black aspect-video">
      <h1 className="text-4xl font-bold pb-4 text-white">{title}</h1>
      <div>
        <span className="flex items-center gap-1 text-white text-sm mb-4 capitalize">
          <FaStar className="text-yellow-500" /> {reviewStar} | {voteCount}{" "}
          <span className="pl-8">
            {" "}
            {releaseDate?.split("-")[0]} | {originalLang}
          </span>
        </span>
      </div>
      <p className="mb-6 w-1/4 text-white line-clamp-4">{overview} </p>
      <div className="gap-2.5 flex">
        <Button
          btnIcon={<FaPlay aria-label="Play Video" />}
          labelClassName="gap-2.5"
          label="Play"
          buttonClassName="hover:bg-opacity-80 bg-white"
        />
        <Button
          label="More Info"
          btnIcon={<BsInfoCircle aria-label="More Info" />}
          labelClassName="gap-2.5"
          buttonClassName="bg-transparent border border-white text-white"
        />
      </div>
    </div>
  );
};

export default VideoTitle;
