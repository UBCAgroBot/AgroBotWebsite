import LeftBlock from "../utils/LeftBlock";

const Structure = () => {
  return (
    <section id="structure-section" className="flex  w-[100lvw] h-[75lvh]">
      <LeftBlock
        title="structure"
        titleContent="Structure"
        bodyContent="
                        Applied AI is looking to change the way we farm and is paving the way for a sustainable future. Leveraging cutting edge research in artificial intelligence and machine learning to develop practical solutions to optimize crop yield, minimize costs, and reduce environmental impact.
                        Using computer vision and machine learning algorithms, the team has developed models for weed destruction that detect and classify weeds, enabling targeted extermination and reducing the use of herbicides.
                        In addition, the team focuses on developing models for biomass estimation. These models help farmers to accurately determine the amount of biomass that their crops are producing, which is a crucial factor in making informed decisions about fertilizer and water application. With this knowledge, farmers can achieve better crop yields and save on costs, all while minimizing their environmental impact."
      />
    </section>
  );
};

export default Structure;
