import SubteamSection from '../../utils/SubteamSection'
import TextChild from '../../utils/TextChild'
import ImageChild from '../../utils/ImageChild'
const Chassis = () => {
  return (
    <section id="chassis-section" className="flex  w-[100lvw] ">
      <SubteamSection
        id={'chassisSection'}
        rightChild={
          <TextChild
            id={'chassisText'}
            header={'Chassis/PowerTrain'}
            body={
              'The Chassis/Powertrain sub-team is responsible for the comprehensive design and manufacturing of AgroBot’s chassis and powertrain. This entails overseeing AgroBot’s movement capabilities, aesthetic design, and the seamless integration of its internal components. The team meticulously selects appropriate motors and power transmission systems, conducts finite element analysis to ensure stress tolerance and safety, and develops detailed design solutions. Additionally, they are tasked with assembling components from all other sub-teams onto AgroBot’s main body, ensuring a cohesive and functional final product.'
            }
          />
        }
        leftChild={<ImageChild />}
      />
    </section>
  )
}

export default Chassis
