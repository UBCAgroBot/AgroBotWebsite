import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { past_publications } from "../../constant/Projects";
import useMediaQuery from "@mui/material/useMediaQuery";

const Publications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalPublications = past_publications.length;

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 3) % totalPublications);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 3 + totalPublications) % totalPublications);
  };

  const slideIndexes = [
    currentSlide,
    (currentSlide + 1) % totalPublications,
    (currentSlide + 2) % totalPublications,
  ];
  
  const isMobile = useMediaQuery("(max-width:600px)");
  const displayItems = isMobile ? 1 : 3;

  return (
    <div className="mt-20 mx-auto p-6">
      <div className="flex justify-between items-end">
        <h1 className="text-4xl mb-[1%] text-[#3A3A3A] text-left md:ml-24 ml-12">Publications</h1>
        <div className="max-w-[70%]">
          <div className="max-w-[80%] text-xs">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex gap-4 items-center justify-center">
        <MdChevronLeft onClick={prevSlide} size={48} className="cursor-pointer" />
        <div className="flex gap-4">
          {slideIndexes.map((index) => (
            <PublicationTile
              key={index}
              imageUrl={past_publications[index].imageUrl}
              title={past_publications[index].title}
              description={past_publications[index].description}
              learnMoreUrl={past_publications[index].learnMoreUrl}
            />
          ))}
        </div>
        <MdChevronRight onClick={nextSlide} size={48} className="cursor-pointer" />
      </div>
      <div className='flex justify-center items-center mt-4'>
        {Array(Math.ceil(totalPublications / displayItems)).fill(0).map((_, idx) => (
          <div key={idx} className={`h-2 w-6 m-1 rounded-sm ${idx * displayItems === currentSlide ? 'bg-lime-600' : 'bg-gray-300'}`}></div>
        ))}
      </div>
    </div>
  );
};

function PublicationTile({ imageUrl, title, description, learnMoreUrl }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="!shadow-lg !bg-[#3a3a3a] !text-white">
      <CardMedia
        className="!p-2"
        sx={{ height: 200, width: 300 }}
        image={imageUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom className="text-lime-500" variant="h5" component="div">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <button
          className="mx-auto mb-2 bg-lime-600 text-white px-4 py-2 rounded-[14px] flex items-center justify-center font-bold"
          onClick={() => (window.location.href = learnMoreUrl)}
        >
          Learn More <MdChevronRight />
        </button>
      </CardActions>
    </Card>
  );
}

export default Publications;
