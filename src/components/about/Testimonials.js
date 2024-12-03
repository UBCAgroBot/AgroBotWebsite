import React, { useState } from 'react'

function Card({ name, title, quote, image }) {
  return (
    <li className="bg-glass p-5 rounded-[42px] min-w-128">
      <figcaption className="flex">
        <div className="ml-4">
          <div className="text-[19px] lg:text-[31px] text-[#2E1B0F] font-bold">{name}</div>
          <div className="text-[11px] lg:text-[19px] text-[#2e1b0fb4] font-bold">{title}</div>
        </div>
      </figcaption>
      <p className="p-4 text-[11px] lg:text-[19px]">
        {quote}
      </p>
    </li>
  )
}

function Testimonials() {

  // const [showMore, setShowMore] = useState(false)

  const row_one = [
    {
      name: "Alex Bazhanov", title: "Chassis/Powertrain co-lead", quote: "I like Agrobot because it allows me to engage in the developing field of autonomous farming on a more personal scale. Agrobot has boosted my problem-solving abilities and confidence, as in the Agrobot community, everyone's voice carries substantial weight in discussions. One of the most memorable moments was initiating the construction phase and witnessing the transformation of the 3D model that the team had developed over several months into a tangible product. The satisfaction of going from online discussions to physical development with other passionate team members was extremely rewarding.",
      image: undefined
    },
    { name: "Jerome Cho", title: "Applied AI, ML co-lead", quote: "A memorable moment at Agrobot was when our team quickly adapted to address inaccuracies in our data pipeline. It was close to the competition when this happened, and creating emergency plans to implement solutions on the fly was exhilarating and fulfilling since you could feel the whole team was pitching in. " },
    { name: "Ryan Chang", title: "Chassis/Powertrain co-lead", quote: " For me, a memorable moment at Agrobot came from assembling our first chain/sprocket power transmission system. Other than my bicycle, it was the first time I handled components and systems like these outside of coursework. Though nerve-wracking at first, it was fulfilling to assemble the system and have everything fit into place perfectly, and seeing all the components spin for the first time live was a feeling like no idea." },
    { name: "Cihan Alperen Bosnali", title: "Navigation Team Lead", quote: "Our team's trip to Milan, Italy for the ACRE competition was so memorable! I had the opportunity to meet students, professors, and professionals from all over Europe. It was fascinating to see how different groups came up with wildly different solutions to same problems. Additionally, I had the chance to visit the Artificial Intelligence and Robotics Lab of Politecnico di Milano, where I met with researchers engaged in interesting robotics projects. The technical challenges we had in competition were quite memorable as well! I developed engineering solutions on the go with limited time and resources. It was an exciting, high-adrenaline experience. I learned so much about different quick fixes I can do in all of the mechanical, electrical and software fields." },
    { name: "Fatma Nilgun Abali", title: "Extermination Team Lead", quote: "Currently, we are designing a fully modular agricultural robot extermination mechanism, aiming for 3D printing feasibility. This system leverages AI to detect harmful weeds, significantly reducing herbicide usage and minimizing toxic emissions. A fun fact about me is I grow 20 different varieties of vegetables and fruits in my backyard, and I love turning them into delicious homemade jams!" },
    { name: "Husan Aulakh", title: "Applied AI Lead", quote: "One of my favourite aspects of being on the team is the learning hours at the end of the day. During these sessions, we explore different types of models, learn how to use specific software and gain insights into various aspects of robotics and agriculture. During one of our learning hours, someone presented the Segment Anything Model (SAM) and demonstrated how transfer learning could be used to segment grape clusters. It was quite impressive to see the potential of this technology and how advanced AI models could enhance precision in agricultural applications. It showcased how learning hours could introduce us to innovative solutions and drive our project forward. It was a perfect example of the supportive and educational environment that makes being part of UBC AgroBot so rewarding." },
    { name: "Vishal Thilak", title: "Extermination Team Member", quote: "I like being part of Agrobot because it allows me to work with technology that has real-world applications in agriculture. Having the opportunity to work on the advanced sprayer system for the robot has allowed me to gain interdisciplinary skills, as we’ve had to work with a mix of robotics, software, project management, and even budgeting. Our work here at Agrobot can work to improve current agricultural practices, and knowing that gives me a sense of fulfillment. Plus, the team here is supportive and inclusive of everyone!" },
  ]

  return (
    <div className="p-4 bg-[#CDFF70] text-[#2E1B0F] relative mt-24">
      <h1 className=" text-[48px] font-bold text-center mt-8 mb-4">
        Testimonials
      </h1>

      <div className="p-4 bg-[#CDFF70] text-[#2E1B0F] relative mt-24">
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide text-wrap">
          <div className="flex space-x-4 px-4">
            {row_one.map((testimonial, index) => (
              <Card
                name={testimonial.name}
                title={testimonial.title}
                quote={testimonial.quote}
                // image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials


