import React from "react";
import {
    LEARN_MORE_LINK,
    LEARN_MORE_LINK_TEXT,
} from "../../constant/recruitment";
import { ConcentricOctagons, TeamDiscussion } from "../../assets";
import { HiArrowSmRight } from "react-icons/hi";
import NotificationBanner from "../common/NotificationBanner";
import { Avatar } from "@mui/material";

const founders = [
    { name: 'Rick Astley', imageUrl: 'https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2016/10/rickastley.jpg?quality=90&strip=all&ssl=1' },
    { name: 'Tharun Pranav', imageUrl: 'https://media.licdn.com/dms/image/D5603AQEm49IKoW2uCA/profile-displayphoto-shrink_400_400/0/1696730002451?e=1714003200&v=beta&t=69wJsz-R4F1hJ6WqrVFJjE6NnMp3WqJnwTV6JKzWE5I' },
    { name: 'King Charles', imageUrl: 'https://th.bing.com/th/id/R.f954e42c3626f6a046c16fd7797c6ad3?rik=EQ2BvVDj7rUXPw&pid=ImgRaw&r=0' },
    { name: 'Steve', imageUrl: 'https://static.turbosquid.com/Preview/2019/09/24__07_14_04/render004.jpgE6E6CDF8-D2E0-4F8F-A035-81A31CDEABACDefault.jpg' },
];

const AboutUsS2 = () => {
    return (
        <div className="mt-10 text-center mx-auto p-6">
            <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
                Founders
            </h1>

            <div className="row mx-auto mt-3 px-6 md:px-12 flex flex-wrap gap-4 justify-around">
                {founders.map((founder, index) => (
                    <div>
                        <Avatar
                            className="shadow-lg"
                            sx={{
                                width: [150, 200, 200], // 150 on small devices, 200 on medium and large devices
                                height: [150, 200, 200]
                            }}
                            key={index}
                            alt={founder.name}
                            src={founder.imageUrl}
                        />
                        <h2 className="text-lg mt-1 md:mt-3">{founder.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUsS2;
