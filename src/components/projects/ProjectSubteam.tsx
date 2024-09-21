import React from 'react'

type ProjectSubteamArgs = {title:string, text:string};
function ProjectSubteam({title, text}:ProjectSubteamArgs) {
  return (
    <div className="w-full h-[100vh] flex px-[5%] items-start justify-between">
      <h2 className="text-mobile-header lg:text-header font-bold mb-4">{title}</h2>
				<p className="text-mobile-body">{text}</p>
    </div>
  )
}

export default ProjectSubteam;
