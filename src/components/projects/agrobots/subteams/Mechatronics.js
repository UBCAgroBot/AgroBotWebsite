import SubteamSection from '../../utils/SubteamSection'
import TextChild from '../../utils/TextChild'
import ImageChild from '../../utils/ImageChild'
const Mechatronics = () => {
  return (
    <section id="mechatronics-section" className="flex  w-[100lvw] ">
      <SubteamSection
        id={'mechatronicsSection'}
        rightChild={
          <TextChild
            id={'mechatronicsText'}
            header={'Mechatronics'}
            body={
              'The Mechatronics sub-team tackles multidisciplinary design challenges to create precision robotic capabilities. The team designs mechatronic systems, implementing control algorithms based on real-time sensor data to provide a multitude of capabilities for the Agrobot.'
            }
          />
        }
        leftChild={<ImageChild />}
      />
    </section>
  )
}

export default Mechatronics
