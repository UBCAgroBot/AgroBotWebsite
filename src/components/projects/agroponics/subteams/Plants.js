import TextChild from '../../utils/TextChild'
import ImageChild from '../../utils/ImageChild'
import SubteamSection from '../../utils/SubteamSection'

const Plants = () => {
  return (
    <section id="plants-section" className="flex  w-[100lvw]">
      <SubteamSection
        id={'plantsSection'}
        rightChild={
          <TextChild
            id={'plantsText'}
            header={'Plants'}
            body={
              'The Plants sub-team is dedicated to ensuring the successful growth and harvest of staple crops. The team works at the intersection of various disciplines, blending engineering principles with techniques from chemistry, applied/plant biology, and food, nutrition, and health. Its focus includes designing innovative methods for crop cultivation and optimizing growth conditions through experimentation and data collection. Members of the Plants sub-team are actively involved in research, utilizing analytical techniques, and contributing to all aspects of the team’s efforts.'
            }
          />
        }
        leftChild={<ImageChild />}
      />
    </section>
  )
}

export default Plants
