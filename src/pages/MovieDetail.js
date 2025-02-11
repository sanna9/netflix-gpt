import React from "react";

const MovieDetail = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-lightblue text-center p-4">30% Width</div>
      <div className="col-span-2 bg-lightcoral text-center p-4">70% Width</div>
    </div>
  );
};

export default MovieDetail;
