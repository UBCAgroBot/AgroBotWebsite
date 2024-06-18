export const AgroBotHeader = "Agrobot";
export const agroBotIntroText = "We are building a fully autonomous robot capable of analyzing its environment to perform targeted weeding, fertilizing, and data collection. Precision applications and automation will help reduce agrochemical use and manual labour. The project is currently divided into four sub-teams: Chassis, Extermination, Navigation, and Image Recognition.";

// AgroBotKeyFeatures
export const KF_Title = "Key Features";
export const KF_box1_title = "Targeted Action";
export const KF_box2_title = "Automation";
export const KF_box3_title = "Data Collection";
export const KF_box1_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.";
export const KF_box2_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.";
export const KF_box3_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.";

// AgroBotSpecifications
export const specsTitle = "Specifications";
export const dimensions = "Dimensions";
export const dimensionsText = ["Length: 1.5 meters, Width: 1 meter,", "Height: Adjustable, up to 1.2 meters"];
export const speeds = "Speeds";
export const speeds_text = ["Traversal speed - Up to 1m/s", "Working speed - Adjustable, depending on the task (e.g., slower for precision tasks like planting and harvesting)."];
export const power_consumption = "Power Consumption";
export const power_consumption_text = ["Average Power Consumption: 2-3 kWh per hour.", "Peak Power: 5 kWh for intensive tasks.", "Sleep Mode: Low power consumption during idle periods."];
export const op_range = "Operational Range";
export const op_range_text = ["Operational Range: Up to 10 kilometers on a single battery charge.", "Wireless Communication Range: 1 kilometer for remote control and monitoring."];
export const we_res = "Weather Resistance";
export const we_res_text = ["Operating Temperature Range: -10°C to 40°C.", "IP65-rated water and dust resistance for reliable operation in various weather conditions."];
export const maintenance = "Maintenance";
export const maintenance_text = ["Mean Time Between Failures (MTBF): 500 hours. Modular design for easy component replacement and maintenance."];

// AgroBotSubteams
export const subteamsTitle = "Subteams";

export const chassis = [
    "Chassis",
    ["80/20 aluminium frame", "Electrical Powertrain", "Four wheel drive & swerve steering", "Battery management system"],
    "Develops the frame, powertrain, battery management system, and component housing. Last year, (our very first year) we developed a simple, square, modular chassis that would allow us to house all the components of the robot and allow us to be flexible in our future developments. The robot utilizes four, independently driven wheels, with swerve steering front wheels. This design aims to allow for easier maneuverability in a crop field, allows the robot to go over crop rows, and make tight turns at the end of each row."
];

export const extermination = [
    "Extermination",
    ["Mechanical weedwhacker",
        "Omnidirectional sprayer",
        "Target prioritization software"],
    "Develops systems to target and destroy weeds without damaging the crops around them. In our first year, we explored several possible ways to accomplish this, from robot claws to lasers, and eventually settled on a machine-vision-aimed herbicide sprayer and a robotic weedwhacker. We developed a working prototype of the herbicide sprayer, complete with targeting software, and continue to work on the weedwhacker. In the upcoming year we will work on finishing the weedwhacker while improving and finalizing the herbicide sprayer. This will include continued mechanical design, robotics, small electronics, programming, and pumping systems. We will also be looking at possible new ways of attacking weeds."
];

export const navigation = [
    "Navigation",
    ["Crop row detection",
        "End-of-row turning",
        "Robot localization/orientation",
        "Gazebo simulator"],
    "Develops the self-driving software for the Agrobot to autonomously navigate crop rows using an on-board camera. In our first year, our team explored methods of crop-row detection and developed software to facilitate real-time motion planning. We have worked together to research different methods of computer vision and error control algorithms and applied these concepts to Python code using OpenCV. The software loads live-stream video, employs a series of filtering and transformations to detect crop-rows, and then applies a centering algorithm to determine the direction of the AgroBot. In our upcoming year, our team plans to improve the accuracy of our navigation software while also integrating the software with the motor control system. This entails incorporating additional computer vision techniques to our code, implementing a robust software controller for continuous error adjustment and incorporating ROS for communication between subsystems."
];

export const appliedAI = [
    "Applied AI",
    ["Crops and weeds detection",
        "Crop health analysis",
        "Biomass Estimation",
        "Artificial Intelligence"],
    "Applied AI is looking to change the way we farm and is paving the way for a sustainable future. Leveraging cutting edge research in artificial intelligence and machine learning to develop practical solutions to optimize crop yield, minimize costs, and reduce environmental impact. Using computer vision and machine learning algorithms, the team has developed models for weed destruction that detect and classify weeds, enabling targeted extermination and reducing the use of herbicides. In addition, the team focuses on developing models for biomass estimation. These models help farmers to accurately determine the amount of biomass that their crops are producing, which is a crucial factor in making informed decisions about fertilizer and water application. With this knowledge, farmers can achieve better crop yields and save on costs, all while minimizing their environmental impact."
];

// Want to help
export const want_to_help = [
    "Want to help?",
    "Members will work towards solving a real-world problem, go through the engineering design process, and develop technical skills in mechanical, electrical and software design.",
    "Apply Here"
]