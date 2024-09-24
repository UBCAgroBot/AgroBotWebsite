import React from 'react'

type ProjectSubteamArgs = {title:string, text:string, text_pos: "left" | "right"};
function ProjectSubteam({title, text, text_pos}:ProjectSubteamArgs) {
  return (
    <div className={`w-full px-[10%] py-[124px] flex flex-col lg:flex-row items-start justify-between ${text_pos === "right" ? 'flex-col lg:flex-row-reverse' : ''}`}>
      <div className="w-full lg:w-[50%]">
        <h2 className="text-mobile-header lg:text-header font-semibold mb-4">{title}</h2>
        <p className="text-mobile-body">{text}</p>
			</div>
		  <div className="w-full lg:w-[40%] h-[300px] bg-red-400 mt-[4em]">
		  </div>
    </div>
  )
}

export default ProjectSubteam;
