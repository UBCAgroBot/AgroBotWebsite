import SubteamSection from '../../utils/SubteamSection'
import TextChild from '../../utils/TextChild'
import ImageChild from '../../utils/ImageChild'
const Navigation = () => {
  return (
    <section id="navigation-section" className="flex w-[100lvw] ">
      <SubteamSection
        id={'navigationSection'}
        leftChild={
          <TextChild
            id={'navigationText'}
            header={'Navigation & Embedded Systems'}
            body={
              "The Navigation & Embedded Systems sub-team is responsible for developing sophisticated systems that guide AgroBot through crop fields autonomously. By integrating a range of sensors such as depth cameras, LiDAR, GPS, and IMU, the team ensures that AgroBot can plan and execute precise paths, avoiding crop damage and optimizing field traversal. The team's innovative designs and implementations are crucial for achieving fully autonomous operation, making efficient and careful navigation through diverse agricultural environments possible."
            }
          />
        }
        rightChild={<ImageChild />}
      />
    </section>
  )
}

export default Navigation
