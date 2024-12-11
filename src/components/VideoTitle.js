import React from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-24 w-full absolute translate-y-56">
      <h1 className="text-4xl font-bold pb-4 text-white">{title}</h1>
      <p className="pb-6 w-1/4 text-white">{overview} </p>
      <div className="gap-2.5 flex">
        <Button
          btnIcon={<FaPlay aria-label="Play Video" />}
          labelClassName="gap-2.5"
          label="Play"
          buttonClassName="hover:bg-opacity-80 bg-white"
        />
        <Button
          label="More Info"
          btnIcon={<BsInfoCircle aria-label="Play Video" />}
          labelClassName="gap-2.5"
          buttonClassName="bg-gray-300"
        />
      </div>
    </div>
  );
};

export default VideoTitle;
