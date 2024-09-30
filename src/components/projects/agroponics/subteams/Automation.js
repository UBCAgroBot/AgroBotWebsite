import TextChild from '../../utils/TextChild'
import ImageChild from '../../utils/ImageChild'
import SubteamSection from '../../utils/SubteamSection'

const Automation = () => {
  return (
    <section id="automation-section" className="flex  w-[100lvw]">
      <SubteamSection
        id={'automationSection'}
        leftChild={
          <TextChild
            id={'automationText'}
            header={'Automation'}
            body={
              'The automation sub-team is an Internet of Things (IoT) project that focuses on designing and implementing autonomous farming, real-time monitoring, auto-regulated environments, and remote updates for hydroponic systems. The team’s goal is to use resources in agriculture (land, water, fertilizers, manpower) more efficiently to help improve our environment. Modern irrigation practices are exacerbating water scarcity, drying up entire water systems, and causing extensive land clearance for agriculture. To address these challenges, we leverage a wide variety of technologies to collect and communicate data from hydroponic systems, enabling us to simulate and optimize different preferred growing environments.'
            }
          />
        }
        rightChild={<ImageChild />}
      />
    </section>
  )
}

export default Automation
