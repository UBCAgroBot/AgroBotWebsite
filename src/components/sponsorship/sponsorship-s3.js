import React from "react";
import TierBanner from "./tierBanner";
import { GreenHouse, BronzeStar, SilverStar, GoldStar, DiamondStar } from '../../assets';
import { SponsorLevels } from "../../constant";

function SponsorshipS3() {
    const tallestTierBannerHeight = Math.max(
        SponsorLevels.find(level => level.name === 'Bronze').height,
        SponsorLevels.find(level => level.name === 'Silver').height,
        SponsorLevels.find(level => level.name === 'Gold').height,
        SponsorLevels.find(level => level.name === 'Diamond').height
    );

    return (
        <div style={{ backgroundImage: `url(${GreenHouse})` }} className="w-full bg-cover bg-center">
            <div className="p-[7.5%] flex flex-col lg:flex-row justify-between items-stretch bg-[#00000080]">
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Bronze')} starImg={BronzeStar} tierColor="#CD7F32" style={{ height: tallestTierBannerHeight }} />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Silver')} starImg={SilverStar} tierColor="#707070" style={{ height: tallestTierBannerHeight }} />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Gold')} starImg={GoldStar} tierColor="#FFD700" style={{ height: tallestTierBannerHeight }} />
                <TierBanner tierElements={SponsorLevels.find(level => level.name === 'Diamond')} starImg={DiamondStar} tierColor="#0080FF" style={{ height: tallestTierBannerHeight }} />
            </div>
        </div>
    );
}

export default SponsorshipS3;