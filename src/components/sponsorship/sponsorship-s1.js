import React from "react";

import { StudentsWorking } from "../../assets";
import { S1Text } from "../../constant";

function SponsorshipS1() {
    return (
        <div style={{ backgroundImage: `url(${StudentsWorking})` }} className="min-h-screen w-screen bg-cover bg-center">
            <div className="flex h-screen w-screen items-center justify-center bg-[#00000080] p-40">
                <p className="text-center text-[40px] text-white">{S1Text}</p>
            </div>
        </div>

    );
}

export default SponsorshipS1;