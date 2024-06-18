import React from "react";
import { StudentsWorking } from "../../assets";
import { S1Text } from "../../constant";

function SponsorshipS1() {
    return (
        <div style={{ backgroundImage: `url(${StudentsWorking})` }} className="min-h-screen w-screen bg-cover bg-center">
            <div className="h-screen w-screen bg-[#00000080] flex justify-center items-center p-40">
                <p className="text-white text-[40px] text-center">{S1Text}</p>
            </div>
        </div>

    );
}

export default SponsorshipS1;