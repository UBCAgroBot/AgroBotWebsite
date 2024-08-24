import React from "react";

import { GreenHouse, BronzeStar, SilverStar, GoldStar, DiamondStar } from '../../assets';
import { SponsorLevels } from "../../constant";

import TierBanner from "./tierBanner";

function SponsorshipS3() {
    const tallestTierBannerHeight = Math.max(
        SponsorLevels.find(level => level.name === 'Bronze').height,
        SponsorLevels.find(level => level.name === 'Silver').height,
        SponsorLevels.find(level => level.name === 'Gold').height,
        SponsorLevels.find(level => level.name === 'Diamond').height
    );

    return (
        <div style={{ backgroundImage: `url(${GreenHouse})` }} className="w-full bg-cover bg-center">
            <div className="flex flex-col items-stretch justify-between bg-[#00000080] p-[7.5%] lg:flex-row">
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Bronze')} starImg={BronzeStar} tierColor="#CD7F32" style={{ height: tallestTierBannerHeight }} />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Silver')} starImg={SilverStar} tierColor="#707070" style={{ height: tallestTierBannerHeight }} />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Gold')} starImg={GoldStar} tierColor="#FFD700" style={{ height: tallestTierBannerHeight }} />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Diamond')} starImg={DiamondStar} tierColor="#0080FF" style={{ height: tallestTierBannerHeight }} />
            </div>
        </div>
    );
}

export default SponsorshipS3;