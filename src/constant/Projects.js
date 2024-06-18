import { BsGraphUp } from "react-icons/bs";
import { RiSettingsFill } from "react-icons/ri";
import { MdOutlineSettingsInputHdmi } from "react-icons/md";
import { HomeAutomation, HomeDataCollection, HomeModularChassis, HomeTargetedAction, HomeChemicalBalancing, HomeFullyAutonomous, HomeNutrientCycling } from '../assets';



export const PS1Title = "Achievements and Participation";

export const projectButton = "Project ";

export const stats = [
  {
    icon: <BsGraphUp className="text-3xl text-white" />,
    heading: "Text 1",
    text: "Description 1",
  },
  {
    icon: <RiSettingsFill className="text-3xl text-white" />,
    heading: "Text 1",
    text: "Description 1",
  },
  {
    icon: <MdOutlineSettingsInputHdmi className="text-3xl text-white" />,
    heading: "Text 1",
    text: "Description 1",
  },
];

export const projects = [
  {
      title: 'AgroBot',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      learnMoreNavigationUrl: '/agrobot',
      images: [
          { src: HomeTargetedAction, label: 'Targeted Action' },
          { src: HomeDataCollection, label: 'Data collection' },
          { src: HomeModularChassis, label: 'Modular chassis' },
          { src: HomeAutomation, label: 'Automation' }
      ]
  },
  {
      title: 'AgroPonics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      learnMoreNavigationUrl: '/agroponics',
      images: [ 
          { src: HomeFullyAutonomous, label: 'Fully Autonomous'},
          { src: HomeNutrientCycling, label: 'Nutrient Cycling'},
          { src: HomeChemicalBalancing, label: 'Chemical Balancing' }
      ]
  }
];


export const past_publications = [
  {
    imageUrl:
      "https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2016/10/rickastley.jpg?quality=90&strip=all&ssl=1",
    title: "Rick Astley",
    description: "Never gonna give you up",
    learnMoreUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQEm49IKoW2uCA/profile-displayphoto-shrink_400_400/0/1696730002451?e=1714003200&v=beta&t=69wJsz-R4F1hJ6WqrVFJjE6NnMp3WqJnwTV6JKzWE5I",
    title: "Tharun Pranav",
    description: "CEO of UBC Agrobot",
    learnMoreUrl: "https://www.linkedin.com/in/tharun-pranav/",
  },
  {
    imageUrl:
      "https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png",
    title: "UBC Agrobot",
    description: "The best robotics team in the world",
    learnMoreUrl: "https://www.ubcagrobot.com",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQFhX0b3GwL8Xw/profile-displayphoto-shrink_400_400/0/1517478902417?e=1714003200&v=beta&t=7L1wYfzT5jGzHvqZ5dW9J9s6a8t1h3yJ4kE8aV8N2nY",
    title: "Vishal Keshav",
    description: "CTO of UBC Agrobot",
    learnMoreUrl: "https://www.linkedin.com/in/vishal-keshav/",
  },
  {
    imageUrl:
      "https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png",
    title: "UBC Agrobot",
    description: "The best robotics team in the world",
    learnMoreUrl: "https://www.ubcagrobot.com",
  },
  {
    imageUrl:
      "https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png",
    title: "UBC Agrobot",
    description: "The best robotics team in the world",
    learnMoreUrl: "https://www.ubcagrobot.com",
  },
  {
    imageUrl:
      "https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png",
    title: "UBC Agrobot",
    description: "The best robotics team in the world",
    learnMoreUrl: "https://www.ubcagrobot.com",
  },
  {
    imageUrl:
      "https://www.ubcagrobot.com/wp-content/uploads/2021/09/ubc-agrobot-logo.png",
    title: "UBC Agrobot",
    description: "The best robotics team in the world",
    learnMoreUrl: "https://www.ubcagrobot.com",
  },
];