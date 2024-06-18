import React from "react";
import { temp_circuitry, temp_maintenance, temp_robot_blueprint } from "../../assets";
import * as t from "../../constant/agrobot";

function SpecificationText(props) {
    const { category, descriptionPoints } = props;


    return (
        <div className="my-2">
            <h4 class="mb-2 text-2xl font-bold">{category}</h4>
            <div>
            { descriptionPoints.map((point) => (
                <p>{point}</p>
            ))}
            </div>
        </div>
    );
}


function AgroBotSpecifications() {
    const dimensions = t.dimensionsText;
    const speeds = t.speeds_text;
    const powerConsumption = t.power_consumption_text
    const operationalRange = t.op_range_text
    const weatherResistance = t.we_res_text
    const maintenance = t.maintenance_text

    return (
        <div className="w-[80%] mx-auto my-[20vh]">
            <div className="w-full rounded-[14px] p-6 md:p-10 text-white my-[5vh] bg-slate-800">
                <h1 className="pb-5 mb-1 text-white text-[32px] sm:text-[48px] capitalize md:pb-0">{t.specsTitle}</h1>
                
                <div className="flex flex-col md:flex-row md:my-4 md:py-5 md:justify-evenly">
                    <img className="mx-4 md:w-1/3 h-auto object-cover rounded-xl" src={temp_robot_blueprint} alt="blueprint of robot showing dimensions"></img>
                    <div className="mx-4 py-5 md:w-1/2">
                        <SpecificationText category={t.dimensions} descriptionPoints={dimensions}></SpecificationText>
                        <div className="py-10"><hr></hr></div>
                        <SpecificationText category={t.speeds} descriptionPoints={speeds}></SpecificationText>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row md:my-4 md:py-5 md:justify-evenly">
                    <div className="mx-4 py-5 md:w-1/2">
                        <SpecificationText category={t.power_consumption} descriptionPoints={powerConsumption}></SpecificationText>
                        <div className="py-10"><hr></hr></div>
                        <SpecificationText category={t.op_range} descriptionPoints={operationalRange}></SpecificationText>
                    </div>
                    <img className="mx-4 md:w-1/3 h-auto object-cover rounded-xl" src={temp_circuitry} alt="circuitboard"></img>
                </div>

                <div className="flex flex-col md:flex-row md:my-4 md:py-5 md:justify-evenly">
                    <img className="mx-4 md:w-1/3 h-auto object-cover rounded-xl" src={temp_maintenance} alt="woman doing maintenance"></img>
                    <div className="mx-4 py-5 md:w-1/2">
                        <SpecificationText category={t.we_res} descriptionPoints={weatherResistance}></SpecificationText>
                        <div className="py-10"><hr></hr></div>
                        <SpecificationText category={t.maintenance} descriptionPoints={maintenance}></SpecificationText>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AgroBotSpecifications;
