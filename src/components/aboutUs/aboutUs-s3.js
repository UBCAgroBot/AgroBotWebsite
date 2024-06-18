import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { past_projects } from "../../constant/aboutUs";

const AboutUsS3 = () => {
    return (
        <div className="mt-12 text-center mx-auto p-6">
            <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
                Past projects
            </h1>

            <div className="row mx-auto mt-3 px-6 md:px-12 flex gap-28 scrollbar-hide overflow-x-auto flex-nowrap">
                {past_projects.map((project) => (
                    <div>
                        <MediaCard 
                            imageUrl={project.imageUrl}
                            title={project.title}
                            description={project.description}
                            learnMoreUrl={project.learnMoreUrl}
                        ></MediaCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

function MediaCard(props) {
    const { imageUrl, title, description, learnMoreUrl } = props;
    return (
      <Card sx={{ maxWidth: 345 }} className="!shadow-lg !bg-gradient-to-r from-lime-500 to-lime-200">
        <CardMedia
          sx={{ height: 200, width: 300 }}
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => window.open(learnMoreUrl)} className="!text-green-800 !font-bold" size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

export default AboutUsS3;
