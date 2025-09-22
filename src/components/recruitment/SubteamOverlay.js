import React, { useEffect } from 'react'
const d3 = require('d3-ease')

function SubteamOverlay({ setOverlayId, overlayId }) {
  let content = <></>

  switch (overlayId) {
    case 'applied_ai':
      content = {
        title: 'Applied AI',
        description:
          "The Applied AI sub-team pioneers ML models and AI to develop innovative solutions for AgroBot's tasks, from plant identification to advanced machine vision.",
        responsibilities: [
          'Finding open-sourced datasets',
          'Preprocessing datasets',
          'Creating model architectures',
          'Deploying models',
        ],
        technologies: [
          'GitHub, Visual Studio Code, UBC ARC Sockeye, Google Colab, TensorFlow, PyTorch, YOLO, CNN',
        ],
        what_you_will_learn: [
          {
            bold: 'Data Management: ',
            text: 'Master finding and preprocessing open-source datasets',
          },
          {
            bold: 'Model Development & Deployment: ',
            text: 'Design, implement, and deploy advanced ML models (CNN, YOLO)',
          },
          {
            bold: 'Tools Proficiency: ',
            text: 'Use GitHub, Visual Studio Code, Sockeye, Google Colab, TensorFlow, and PyTorch effectively',
          },
          {
            bold: 'Collaborative Coding & Problem-Solving: ',
            text: 'Improve teamwork using version control (GitHub) and solve complex plant identification and machine vision challenges',
          },
          {
            bold: 'Optimization: ',
            text: 'Enhance model performance through testing and refinement',
          },
        ],
      }
      break
    case 'chassis_powertrain':
      content = {
        title: 'Chassis / Powertrain',
        description:
          "The Chassis/Powertrain sub-team designs and manufactures AgroBot's chassis and powertrain, ensuring efficient mobility and smooth integration of components.",
        responsibilities: [
          'Designing the look and feel of AgroBot',
          'Developing the parts, subassemblies, and assemblies of AgroBot',
          'Manufacturing and assembling AgroBot',
        ],
        technologies: [
          'Solidworks, Shop Tools (e.g., drill press, bandsaw, sheet metal bender, lathe), 3D Printers & Cura, Waterjet Cutters',
        ],
        what_you_will_learn: [
          {
            bold: 'Design & Engineering: ',
            text: 'Master the design of AgroBot’s components and develop parts, subassemblies, and assemblies using SolidWorks',
          },
          {
            bold: 'Manufacturing Techniques: ',
            text: 'Gain hands-on experience with shop tools, 3D printers, and waterjet cutters',
          },
          {
            bold: 'Finite Element Analysis: ',
            text: 'Conduct finite element analysis to ensure stress tolerance and safety',
          },
          {
            bold: 'Motor & Power Systems: ',
            text: 'Select and integrate appropriate motors and power transmission systems',
          },
          {
            bold: 'Prototyping & Fabrication: ',
            text: 'Utilize advanced tools for prototyping and fabricating parts',
          },
        ],
      }
      break
    case 'system_architecture':
      content = {
        title: 'System Architecture',
        description:
          "The System Architecture sub-team develops scalable infrastructure and optimized pipelines, transforming prototypes into production-grade systems with real-time performance.",
        responsibilities: [
          'Designing and optimizing system-wide architecture for performance and scalability',
          'Developing GPU-accelerated pipelines and backend systems for real-time robotics applications',
          'Building CI/CD and DevOps infrastructure for automated testing, deployment, and monitoring',
          'Containerizing and self-hosting services for reproducible and efficient development',
          'Implementing communication layers with ROS2 and GStreamer for seamless subsystem integration',
        ],
        technologies: [
          'Python, C++, ROS2, GStreamer, CUDA, TensorRT, Docker, GitHub Actions, Prometheus',
        ],
        what_you_will_learn: [
          {
            bold: 'High-Performance Computing: ',
            text: 'Accelerate ML models and robotics pipelines with CUDA, TensorRT, and GPU memory optimization',
          },
          {
            bold: 'DevOps & Deployment: ',
            text: 'Gain hands-on experience with CI/CD, Docker, and automated infrastructure for real-time robotics',
          },
          {
            bold: 'System Integration: ',
            text: 'Implement ROS2-based communication and GStreamer pipelines to connect subsystems seamlessly',
          },
          {
            bold: 'Backend Optimization: ',
            text: 'Streamline pipelines and improve reliability with performance-focused backend development',
          },
          {
            bold: 'Scalable Infrastructure: ',
            text: 'Design reproducible, production-grade systems that support innovation across the team',
          },
        ],
      }
      break
    case 'electrical':
      content = {
        title: 'Electrical',
        description:
          'The Electrical Team ensures AgroBot’s success by carefully designing, assembling, and integrating power systems with rigorous testing and quality control.',
        responsibilities: [
          'Creating and maintaining electrical schematics and documentation',
          'Identifying and selecting components, and evaluating suppliers',
          'Assembling power electronics systems, and ensuring proper wiring',
          'Conducting functional, performance, and stress tests, and implementing fixes',
          'Collaborating with teams for integration, and ensuring compliance and safety',
        ],
        technologies: [
          'AutoCAD, KiCAD, MATLAB/Simulink, Oscilloscopes, Multimeters, Arduino, Raspberry Pi, C/C++, Python, I2C (Inter-Integrated Circuit), SPI (Serial Peripheral Interface), DC/DC Converters, Inverters, Power MOSFETs, IGBTs  (Insulated Gate Bipolar Transistors), Battery management systems (BMS), Soldering',
        ],
        what_you_will_learn: [
          {
            bold: 'Design & Documentation: ',
            text: 'Master creating and maintaining detailed electrical schematics and documentation using tools like AutoCAD and KiCAD',
          },
          {
            bold: 'Component Selection: ',
            text: 'Learn to identify, select, and evaluate components for power electronics and understand supplier evaluation',
          },
          {
            bold: 'System Assembly: ',
            text: 'Gain hands-on experience in assembling power electronics systems and ensuring proper wiring',
          },
          {
            bold: 'Testing & Troubleshooting: ',
            text: 'Conduct functional, performance, and stress tests, and implement fixes to ensure system reliability',
          },
          {
            bold: 'Integration & Compliance: ',
            text: 'Collaborate with teams for system integration, and ensure compliance with safety and industry standards',
          },
        ],
      }
      break
    case 'extermination':
      content = {
        title: 'Extermination',
        description:
          'The Extermination sub-team designs, builds, and programs precision weed elimination systems that focus on eco-friendly weed management and crop protection. Our active projects include a system for the targeted deployment of herbicide and a laser weeding system based on a 2 axis gantry to burn weeds with a high powered laser. Our project is very self contained and all encompassing, thus requiring members from various engineering disciplines.',
        responsibilities: [
          'Designing mechanical, electrical, and software elements of the extermination system',
          'Prototyping and Iterating on designs',
          'Integrating Extermination Systems with Agrobot’s other subteams, notably the Applied AI, Mechanical, and Electrical subteams',
        ],
        technologies: [
          'SolidWorks, Altium, Kicad',
          '3D Printing, Machining, Mechanical Assembly, Sheet metal fabrication',
          'Arduino, ESP32, Oscilloscope, Multimeter, Soldering Iron, Breadboard'
        ],
        what_you_will_learn: [
          {
            bold: 'Mechanical Design: ',
            text: 'Master the design of precision extermination systems using SolidWorks',
          },
          {
            bold: 'Electrical Design: ',
            text: 'Gain hands-on experience designing and assembling a full electronic system, designing and validating PCBs and prototyping board circuits',
          },
          {
            bold: 'Software Design: ',
            text: 'Write C/C++ code to develop firmware to create precise motion control. Work with communication protocols such as UART and I2C, and help design data flow pipelines',
          },
          {
            bold: 'Team Work: ',
            text: 'Learn to work closely and effectively with peers in a fun and engaging engineering environment',
          },
          {
            bold: 'Integration & Control: ',
            text: 'Integrate data from crop detection models and implement control algorithms for accurate extermination methods',
          },
          {
            bold: 'Mitigate Environmental Impact: ',
            text: 'Understand methods to minimize environmental impact while enhancing weed management',
          },
          {
            bold: 'Utilize Engineering Technology: ',
            text: 'Gain experience with tools such as Arduino and Altium or Kicad for firmware/electrical development and SolidWorks for mechanical design',
          },
        ],
        note:
          'Members are not required to be fluent in all technologies and fields described. Having a strong focus in one aspect of the system is useful and sought after. Members are also welcome to dabble in all aspects of the system (MECH,ELEC, & Software). ',
      }
      break
    case 'navigation_embedded_systems':
      content = {
        title: 'Navigation & Embedded Systems',
        description:
          'This term Navigation needs to make Agrobot self drive. To do this we are developing reactive navigation and SLAM algorithms as well as reinforcement learning models. We are also using Gazebo and Issac sim to measure our algorithms performance.',
        responsibilities: [
          'Research and test a broad range of autonomous algorithms to find out what works well for Agrobot',
        ],
        technologies: [
          'Python, C++, ROS, Isaac Sim, Algorithmic design, Sensor Fusion, Reinforcement learning',
        ],
        what_you_will_learn: [
          {
            bold: 'Reactive Navigation: ',
            text: 'Deploy algorithms that can navigate a robot without any explicit knowledge of positioning',
          },
          {
            bold: 'SLAM: ',
            text: "Deploy navigation algorithms that build a map of Agrobot's surroundings and localize Agrobot within that map",
          },
          {
            bold: 'Robot Simulations: ',
            text: 'Learn how to debug and test navigation algorithms inside a simulator',
          },
          {
            bold: 'Reinforcement Learning: ',
            text: 'Deploy RL models that navigate Agrobot and compare them to SLAM and reactive techniques',
          },
        ],
      }
      break
    case 'automation':
      content = {
        title: 'Automation',
        description:
          'The Automation sub-team is responsible for researching and implementing the sensing and control systems that monitor the growing environment of hydroponic systems.',
        responsibilities: [
          'Conducting research and documentation revision',
          'Prototyping breadboards',
          'Coding microcontrollers',
          'Working with databases and analytics tools',
        ],
        technologies: ['Arduino, Raspberry Pi, Javascript, Python'],
        what_you_will_learn: [
          {
            bold: 'Circuit Design: ',
            text: 'Design and prototype circuits on breadboards with various sensors connected to ESP32 microcontrollers, and develop printed circuit boards (PCBs) for permanent installations',
          },
          {
            bold: 'Microcontrollers and Sensors: ',
            text: 'Code sensor nodes to read and calibrate various sensors, and send/receive signals',
          },
          {
            bold: 'Application Layer Networking: ',
            text: 'Send MQTT messages between sensing devices over a network',
          },
          {
            bold: 'Web Design and Development: ',
            text: 'Design user front-end interactions and controls for remote monitoring, and update project-specific webpages and domains',
          },
          {
            bold: 'Data Engineering: ',
            text: 'Design and populate databases, and interact with them using logic scripts and visualization tools such as Grafana',
          },
        ],
      }
      break
    case 'plants':
      content = {
        title: 'Plants',
        description:
          'The Plants subteam manages the logistics and design of hydroponic systems, with a strong emphasis on research. Members utilize their creativity to design experiments and develop innovative methods for growing nutritionally relevant crops without soil or sunlight.',
        responsibilities: [
          'Designing hydroponic systems',
          'Optimizing the systems through data collection (lab work, in-house experiments)',
          'Collaborating with other subteams to ensure compatibility of design',
        ],
        technologies: ['UV-Vis Spectrophotometry', 'HPLC', 'Calorimetry'],
        what_you_will_learn: [
          {
            bold: 'Research Methods: ',
            text: 'Conduct literature reviews, apply your ideas in practice, and report results to meet high publishable standards',
          },
          {
            bold: 'Experimental Design: ',
            text: 'Plan and schedule experiments, design and validate new methods, and refine approaches for optimal results',
          },
          {
            bold: 'Hydroponic Systems Design: ',
            text: 'Move beyond “just growing lettuce” and develop advanced systems capable of cultivating crops that can feed entire populations',
          },
          {
            bold: 'Analytical Chemistry: ',
            text: 'Explore the composition of various crops to enhance our understanding of their nutritional content and improve hydroponic methods',
          },
        ],
      }
      break
    case 'structure':
      content = {
        title: 'Structure',
        description:
          'The Structure sub-team designs and builds optimal growing environments by renovating and equipping spaces for hydroponic systems.',
        responsibilities: [
          'Planning the layout and interior elements of the trailer.',
          'Designing and simulating structural components.',
          'Creating and designing hydroponic structures.',
          'Renovating the trailer using hands-on skills.',
        ],
        technologies: ['SolidWorks, basic handtools (e.g., drills, saws)'],
        what_you_will_learn: [
          {
            bold: 'Problem-Solving: ',
            text: 'Troubleshoot and resolve complex issues related to trailer renovation and hydroponic systems, applying innovative solutions to practical challenges.',
          },
          {
            bold: 'Teamwork: ',
            text: 'Collaborate effectively with team members to share ideas, coordinate tasks, and develop integrated solutions for optimizing the growing environment.',
          },
          {
            bold: 'CAD: ',
            text: 'Draft and model plans using CAD software to design and visualize structural and hydroponic components.',
          },
          {
            bold: 'Basic Handtools: ',
            text: 'Utilize tools to construct and modify trailer elements, ensuring precision and quality in the renovation process.',
          },
        ],
      }
      break
    case 'agricultural_research':
      content = {
        title: 'Agricultural Research',
        description:
          'The Agricultural Research sub-team provides critical agricultural knowledge and conducts research to support the development of AgroBot, AgroPonics, and AgroPicker, ensuring our projects are informed by the latest advancements in the field.',
        responsibilities: [
          'Conducting agricultural research to support the development of AgroBot, AgroPonics, and AgroPicker.',
          'Providing domain-specific knowledge and expertise to guide project designs and improvements.',
          'Reaching out to industry professionals and experts for insights and information on agricultural practices.',
          'Collaborating with other sub-teams to ensure agricultural accuracy and relevance in all projects.',
        ],
        technologies: [],
        what_you_will_learn: [
          {
            bold: 'Agricultural Practices: ',
            text: 'Gain in-depth knowledge of modern agricultural practices and technologies.',
          },
          {
            bold: 'Research Techniques: ',
            text: 'Develop and refine research skills specific to the agricultural field.',
          },
          {
            bold: 'Industry Collaboration: ',
            text: 'Learn how to engage and collaborate with industry professionals and experts.',
          },
          {
            bold: 'Interdisciplinary Integration: ',
            text: 'Understand how to integrate agricultural knowledge into technological solutions.',
          },
          {
            bold: 'Project Development: ',
            text: 'Contribute to the development and improvement of innovative agricultural projects.',
          },
        ],
      }
      break
    case 'web_development':
      content = {
        title: 'Web Development',
        description:
          "The Web Development sub-team builds and maintains AgroBot’s digital platforms, from the public-facing website to internal tools, dashboards, and self-hosted services.",
        responsibilities: [
          'Revamping the main AgroBot website with modern UI/UX, frontend frameworks, and backend systems',
          'Designing and deploying an internal documentation platform with authentication, databases, and RBAC',
          'Developing and maintaining self-hosted infrastructure for websites, tools, and services',
          'Building metric dashboards with Grafana and Prometheus to monitor system performance',
          'Integrating IoT devices and compute clusters into the team’s web and data platforms',
        ],
        technologies: [
          'React, Astro, TypeScript, Figma, Docker, PostgreSQL, Supabase, Grafana, Prometheus, Raspberry Pi',
        ],
        what_you_will_learn: [
          {
            bold: 'Full-Stack Development: ',
            text: 'Work with modern frontend frameworks, backend systems, and databases to build scalable web platforms.',
          },
          {
            bold: 'UI/UX Design: ',
            text: 'Use tools like Figma to design engaging, user-friendly interfaces for public and internal applications.',
          },
          {
            bold: 'Self-Hosting & Infrastructure: ',
            text: 'Deploy and maintain services using Docker and custom hosting setups for reliability and control.',
          },
          {
            bold: 'Platform Engineering: ',
            text: 'Build secure documentation platforms with authentication, role-based access control, and integrated workflows.',
          },
          {
            bold: 'IoT & Data Visualization: ',
            text: 'Connect Raspberry Pis and compute clusters to monitoring stacks with Grafana and Prometheus for real-time insights.',
          },
        ],
      }
      break
    case 'finance':
      content = {
        title: 'Finance',
        description:
          'The Finance sub-team manages our financial resources, ensures budgetary compliance, and secures funding to support our projects and operations.',
        responsibilities: [
          'Managing budgets, expenses, and financial records.',
          'Developing financial plans and strategies to support our projects.',
          'Securing funding and sponsorships to ensure financial sustainability.',
          'Collaborating with other sub-teams to allocate resources effectively.',
        ],
        technologies: [],
        what_you_will_learn: [
          {
            bold: 'Budget Management: ',
            text: 'Gain experience in managing and monitoring budgets and expenses.',
          },
          {
            bold: 'Financial Planning: ',
            text: 'Develop strategies for financial growth and sustainability.',
          },
          {
            bold: 'Fundraising: ',
            text: 'Learn techniques for securing funding and sponsorships.',
          },
          {
            bold: 'Financial Record-Keeping: ',
            text: 'Maintain accurate and detailed financial records.',
          },
          {
            bold: 'Collaboration: ',
            text: 'Work with other teams to ensure proper resource allocation.',
          },
        ],
      }
      break
    case 'marketing':
      content = {
        title: 'Marketing',
        description:
          'The Marketing sub-team manages UBC Agrobot’s public image and online presence, creates engaging content, and promotes our projects and initiatives to the public.',
        responsibilities: [
          'Creating and managing both visual and written content for social media, website, and other communication channels.',
          'Developing strategic marketing plans to enhance our outreach and effectiveness.',
          "Maintaining and managing the organization's branding across all platforms.",
          'Engaging with our community and building relationships with potential sponsors.',
          'Collaborating with other sub-teams to highlight their work and successes.',
        ],
        technologies: [],
        what_you_will_learn: [
          {
            bold: 'Content Creation: ',
            text: 'Develop skills in designing, taking raw footage, and writing compelling content for various platforms.',
          },
          {
            bold: 'Social Media Management: ',
            text: 'Learn to manage and grow social media presence effectively.',
          },
          {
            bold: 'Strategic Marketing: ',
            text: 'Gain experience in developing and implementing marketing strategies.',
          },
          {
            bold: 'Brand Management: ',
            text: "Understand how to maintain and manage the organization's brand.",
          },
          {
            bold: 'Collaboration: ',
            text: 'Work closely with other teams to accurately represent their work.',
          },
        ],
      }
      break
    case 'outreach':
      content = {
        title: 'Outreach',
        description:
          'The Outreach sub-team manages all of UBC Agrobot’s corporate relations with relevant organizations, whether it be for partnerships, sponsorships, or other collaborations.',
        responsibilities: [
          'Researching potential Agricultural partners for outreach',
          'Drafting and sending messages through LinkedIn and Email',
          'Build connections and relationships with companies in the Agricultural sector',
          'Managing and negotiating community conversations, sponsorships, and collaboration',
          'Coordinating and organizing outreach events and socials to foster professional partnerships',
        ],
        technologies: [],
        what_you_will_learn: [
          {
            bold: 'Networking: ',
            text: 'Build professional relationships by learning how to connect with various Agricultural partners.',
          },
          {
            bold: 'Communication Skills: ',
            text: 'Learn to clearly discuss and share Agrobot’s mission to engineer a sustainable future for agriculture.',
          },
          {
            bold: 'Project Management: ',
            text: 'Through establishing professional relationships, organize community and corporate events to bring forth sponsorships and give opportunity for team members to learn from Agricultural specialists.',
          },
          {
            bold: 'Negotiation Skills: ',
            text: 'Improve ability to negotiate terms and agreements that benefit Agrobot and its partners.',
          },
          {
            bold: 'Strategic Planning: ',
            text: 'Learn to align outreach efforts with organizational goals, evaluate potential partnerships, and strategize for successful collaborations.',
          },
        ],
      }
      break
    default:
      content = (
        <>
          <h1>I did not catch the subteam overlay I was supposed to show 😵</h1>
        </>
      )
      break
  }

  async function easeIn() {
    for (let i = 0; i <= 1; i += 0.7) {
      const easedVal = d3.easeCubic(i)
      document.getElementById('outer-overlay').style.opacity = easedVal
      await new Promise((resolve) => setTimeout(resolve, 1))
    }
    document.getElementById('outer-overlay').style.opacity = 1
  }

  async function easeOut() {
    for (let i = 1; i >= 0; i -= 0.3) {
      const easedVal = d3.easeCubic(i)
      document.getElementById('outer-overlay').style.opacity = easedVal
      await new Promise((resolve) => setTimeout(resolve, 1))
    }
    await new Promise((resolve) => setTimeout(resolve, 250))
    setOverlayId(null)
  }

  // Disable scrolling on the body element when component mounts
  useEffect(() => {
    easeIn()

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible' // Re-enable scrolling when component unmounts
    }
  }, [])

  // If the click happened on the overlay we close the article.
  // If the click happened on the article we do nothing.
  function CheckClick(event) {
    if (event.target.id === 'outer-overlay') {
      easeOut()
    }
  }

  return (
    <div
      onClick={CheckClick}
      id="outer-overlay"
      className="opacity-0 fixed top-0 left-0 h-screen w-screen bg-[#000000b4] z-50 overflow-y-auto transition-opacity duration-500 ease-in-out"
    >
      <div className="box-content text-mobile-body w-[250px] lg:text-[28px] lg:w-[750px] bg-[#1E120A] text-white mx-auto my-12 rounded-[46px] p-5 lg:p-24 lg:px-32">
        <div className="text-[16px] lg:text-[20px]">
          <div className="flex items-center justify-center">
            <h1 className="font-medium mb-4 lg:mb-0 text-[26px] lg:text-[96px]">
              {content.title}
            </h1>
          </div>
          <p className="">{content.description}</p>
          <h3 className="font-semibold py-4 mt-6">Responsibilities:</h3>
          <ul className="list-disc ml-12 leading-9">
            {content.responsibilities.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
          {content.technologies.length > 0 && (
            <>
              <h3 className="font-semibold py-4 mt-6">Technologies & Tools:</h3>
              <ul className="list-disc ml-12 leading-9">
                {content.technologies.map((val, index) => (
                  <li key={index}>{val}</li>
                ))}
              </ul>
            </>
          )}
          <h3 className="font-semibold py-4 mt-6">What You Will Learn:</h3>
          <ul className="list-disc ml-12 leading-9">
            {content.what_you_will_learn.map((val, index) => (
              <li key={index}>
                <strong>{val.bold}</strong>
                {val.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { SubteamOverlay }
