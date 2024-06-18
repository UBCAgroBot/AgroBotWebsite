import React from "react";
import { projects } from "../../constant/Projects";
import { MdChevronRight } from "react-icons/md";
import { projectButton } from "../../constant/Projects";

function Img(props) {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h3 className="p-2 text-center font-bold text-[18px]">
        {props.children}
      </h3>
      <img src={props.imgSrc} className="h-[90%] rounded-[14px]"></img>
    </div>
  );
}

function Project({ title, description, learnMoreNavigationUrl, images, index }) {
  const imageStyle = {
    width: '100%', 
    height: '200px', 
    objectFit: 'cover',
    borderRadius: '3%',
  };
  return (
    <div className="w-[49%] bg-[#3a3a3a] rounded-[16px] p-8 mr-[2%] max-md:w-full max-md:mr-0 max-md:mb-[2%] text-white">
    <div className="flex items-center justify-end mb-5">
        <div className="bg-[#88BE22] rounded-[5px] text-white w-[22%] text-center flex justify-center items-center mr-auto py-1.5">
          <p>{projectButton}{index + 1}</p>
        </div>
        <button
          className="border border-[#88BE22] text-white px-4 py-2 rounded-[14px] flex items-center justify-center font-bold"
          onClick={() => (window.location.href = learnMoreNavigationUrl)}
        >
          {"More about " + title} <MdChevronRight />
        </button>
      </div>
      <div className="flex w-full max-md:flex-col">
        <h2 className="mx-[5%] text-[32px] font-bold">{title}</h2>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex bg-gradient-to-b from-lime-900 to-[#3a3a3a] border border-white rounded-lg flex-wrap w-full mt-8">
        {images.map((image, index) => (
          <div
            className="w-[45%] mx-[2.5%] my-[2.5%] rounded-lg p-1 bg-white bg-opacity-30 border border-white"
            key={index}
          >
            <p className="text-center mt-2">{image.label}</p>
            <img src={image.src} alt={image.label} style={imageStyle}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioProjects() {
  return (
    <div className="w-full">
      <div className="w-[80vw] mx-auto">
        <h1 className="text-4xl py-8">Projects</h1>
        <div className="flex w-full max-md:flex-col">
          {projects.map((project, index) => (
            <Project {...project} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioProjects;
