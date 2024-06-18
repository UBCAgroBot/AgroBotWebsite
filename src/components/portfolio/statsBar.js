import React from "react";
import { stats } from "../../constant/Projects";

function StatsBar() {
  return (
    <div className="max-w-[80%] mx-auto bg-white rounded-lg shadow-lg mt-[120px] md:mt-0 py-4 px-12 mx-20">
      <div className="flex justify-between">
        {stats.map((stat, index) => (
          <div className="flex items-center justify-center" key={index}>
            <div className="flex flex-col items-center">
                <div className="inline-block rounded bg-gradient-to-r from-lime-500 to-lime-200 p-4">
                  {stat.icon}
                </div>
                <h3 className="my-3 text-lime-600 font-bold">{stat.heading}</h3>
                <p>{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
