import ProjectSubteam from '../ProjectSubteam.tsx'

const AgroponicSubteams = () => {
  return (
    <section id="agroponic" className="flex flex-col">
      <ProjectSubteam
        title="Automation"
        text="The automation sub-team is an Internet of Things (IoT) project that focuses on designing and implementing autonomous farming, real-time monitoring, auto-regulated environments, and remote updates for hydroponic systems. The team’s goal is to use resources in agriculture (land, water, fertilizers, manpower) more efficiently to help improve our environment. Modern irrigation practices are exacerbating water scarcity, drying up entire water systems, and causing extensive land clearance for agriculture. To address these challenges, we leverage a wide variety of technologies to collect and communicate data from hydroponic systems, enabling us to simulate and optimize different preferred growing environments."
        text_pos="left"
      />
      <ProjectSubteam
        title="Plants"
        text="The Plants sub-team is dedicated to ensuring the successful growth and harvest of staple crops. The team works at the intersection of various disciplines, blending engineering principles with techniques from chemistry, applied/plant biology, and food, nutrition, and health. Its focus includes designing innovative methods for crop cultivation and optimizing growth conditions through experimentation and data collection. Members of the Plants sub-team are actively involved in research, utilizing analytical techniques, and contributing to all aspects of the team’s efforts."
        text_pos="right"
      />
      <ProjectSubteam
        title="Structure"
        text="The Structure sub-team integrates the needs of the Automation and Plants sub-teams to create optimal environments for crop growth. Currently, the team is renovating an old 16-foot trailer by adding insulation, heating, electrical systems, a rainwater collection system, and structural reinforcement to support a controlled environment for hydroponic systems. The work is diverse and evolves with the project’s needs, presenting new and unexpected challenges. This hands-on team addresses multi-scale problems through collaborative and innovative solutions."
        text_pos="left"
      />
    </section>
  )
}

export default AgroponicSubteams
