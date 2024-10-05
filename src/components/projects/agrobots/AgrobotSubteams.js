import ProjectSubteam from '../ProjectSubteam.tsx'
import AppliedAIBoundingBoxes from '../../../assets/image/AppliedAIBoundingBoxes.png'
import ChassisModel from "../../../assets/image/ChassisModel.png"
import ElectricalDiagram from "../../../assets/image/ElectricalDiagram.png"
import NavigationTeamPhoto from "../../../assets/image/NavigationTeamPhoto.jpg"
import ExterminationTeamPhoto from "../../../assets/image/ExterminationTeamPhoto.png"

function AgrobotSubteams() {
  return (
    <section id="farm" className="bg-[#cdff70] flex flex-col">
      <ProjectSubteam
        title="Applied AI"
        text="The Applied AI sub-team is dedicated to creating advanced machine learning models that address a variety of AgroBot's tasks. This includes detecting maize and weeds, segmenting grape clusters, and implementing machine vision in the Robot Operating System (ROS). By exploring the intersections between AI research and emerging Agri-Tech, the team continually pushes the boundaries of agricultural innovation. Their work ensures that AgroBot can efficiently and accurately perform its functions in diverse agricultural settings."
        text_pos="left"
        img = {AppliedAIBoundingBoxes}
        fill = {true}
      />
      <ProjectSubteam
        title="Chassis/PowerTrain"
        text="The Chassis/Powertrain sub-team is responsible for the comprehensive design and manufacturing of AgroBot’s chassis and powertrain. This entails overseeing AgroBot’s movement capabilities, aesthetic design, and the seamless integration of its internal components. The team meticulously selects appropriate motors and power transmission systems, conducts finite element analysis to ensure stress tolerance and safety, and develops detailed design solutions. Additionally, they are tasked with assembling components from all other sub-teams onto AgroBot’s main body, ensuring a cohesive and functional final product."
        text_pos="right"
        img = {ChassisModel}
        fill = {false}
      />
      <ProjectSubteam
        title="Electrical"
        text="The Electrical Team is crucial to AgroBot’s success, focusing on the design, specification, assembly, and manufacturing of the robot’s power electronics. They develop detailed electrical schematics and layouts, select and procure high-quality components, and integrate technologies for efficient power management. The team ensures reliable operations through the precise assembly and integration of these power systems, complemented by rigorous testing under various conditions and advanced quality control measures to detect and resolve any issues. Their meticulous approach ensures that AgroBot’s electrical systems are robust, reliable, and support its autonomous operations effectively."
        text_pos="left"
        img = {ElectricalDiagram}
        fill = {true}
      />
      <ProjectSubteam
        title="Extermination"
        text="The Extermination sub-team tackles multidisciplinary design challenges to create precision extermination mechanisms. They focus on minimizing environmental impact while safeguarding crops from damage. The team designs sprayer nozzles and delivery systems, implements control algorithms based on real-time sensor data, and ensures compatibility with various herbicides. They also develop mechanical systems for effective weed removal and design autonomous systems for targeted extermination. Their efforts are crucial in enhancing AgroBot's weed management capabilities, improving crop yields, and reducing labor and chemical usage."
        text_pos="right"
        img = {ExterminationTeamPhoto} 
        fill = {true}
      />
      <ProjectSubteam
        title="Navigation & Embedded Systems"
        text="The Navigation & Embedded Systems sub-team is responsible for developing sophisticated systems that guide AgroBot through crop fields autonomously. By integrating a range of sensors such as depth cameras, LiDAR, GPS, and IMU, the team ensures that AgroBot can plan and execute precise paths, avoiding crop damage and optimizing field traversal. The team's innovative designs and implementations are crucial for achieving fully autonomous operation, making efficient and careful navigation through diverse agricultural environments possible."
        text_pos="left"
        img = {NavigationTeamPhoto}
        fill = {false}
      />
    </section>
  )
}

export default AgrobotSubteams
