import * as React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { HiMinus, HiPlus } from "react-icons/hi";

const RecruitmentS5 = (props) => {
    const { title, subTeamDescriptions, id } = props;
    console.log(title);
    console.log(subTeamDescriptions);
    return (
        <div id={id} className="mt-12 text-center mx-auto p-6">
            <div class="col">
                <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
                    {title}
                </h1>
                <SubTeamList subTeamDescriptions={subTeamDescriptions}></SubTeamList>
            </div>
        </div>
    );
};

function SubTeamList(props) {
    const { subTeamDescriptions } = props;
    console.log(subTeamDescriptions);
    const [selectedIndex, setSelectedIndex] = React.useState(true);

    const handleClick = (index) => {
        if (selectedIndex === index) {
            setSelectedIndex("");
        } else {
            setSelectedIndex(index);
        }
    };

    return (
        <div class="mx-auto md:w-[80%]">
            <List
                className="rounded"
                //   sx={{ width: "100%", bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                //   subheader={
                // <ListSubheader component="div" id="nested-list-subheader">
                //   Sub Team Discriptions
                // </ListSubheader>
                //   }
            >
                {subTeamDescriptions.map((subteam, index) => (
                    <React.Fragment key={index}>
                        {/* <ListItemButton onClick={() => handleClick(index)}> */}
                        <div
                            class={`w-[100%] p-3 mt-3 flex items-center bg-lime-500 cursor-pointer rounded-t ${
                                selectedIndex !== index ? "rounded-b  mb-3" : ""
                            }`}
                            onClick={() => handleClick(index)}
                        >
                            <h2 className="flex-grow text-left">{subteam.name}</h2>
                            {selectedIndex === index ? (
                                <HiMinus></HiMinus>
                            ) : (
                                <HiPlus></HiPlus>
                            )}
                        </div>
                        {/* </ListItemButton> */}
                        <Collapse in={selectedIndex === index} timeout="auto" unmountOnExit>
                            <div className="rounded-b p-7 bg-white shadow mb-3">
                                <p className="text-left">{subteam.description}</p>
                                <div
                                className="mt-6 mx-auto px-1 grid md:grid-cols-3"
                                    // className={`mt-6 mx-auto px-1 grid grid-cols-${
                                    //     (subteam.requirements.length > 0 ? 1 : 0) +
                                    //     (subteam.extra_points.length > 0 ? 1 : 0) +
                                    //     (subteam.what_you_will_learn.length > 0 ? 1 : 0)
                                    // }`}
                                >
                                    {renderBullets("Required Skills", subteam.requirements)}
                                    {renderBullets("Extra Points", subteam.extra_points)}
                                    {renderBullets(
                                        "What you'll learn",
                                        subteam.what_you_will_learn
                                    )}
                                </div>
                            </div>
                        </Collapse>
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
}

function renderBullets(title, bulletList) {
    return (
        bulletList.length > 0 && (
            <div className="column px-5 text-left">
                <h2 className="font-bold text-lime-600 text-lg">{title}</h2>
                <ul className="list-disc">
                    {bulletList.map((bulletItem) => (
                        <li key={bulletItem}>{bulletItem}</li>
                    ))}
                </ul>
            </div>
        )
    );
}

export default RecruitmentS5;
