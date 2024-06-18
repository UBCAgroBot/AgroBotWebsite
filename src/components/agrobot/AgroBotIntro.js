import React from "react";
import { AgroBotWihTeamOnGrass } from '../../assets';
import ProjectInstance from "../common/ProjectInstance";
import * as t from "../../constant/agrobot";

function AgroBotIntro() {
    return (
        <ProjectInstance projectNum="01" img={AgroBotWihTeamOnGrass} text={t.agroBotIntroText}>{t.AgroBotHeader}</ProjectInstance>
    );
}

export default AgroBotIntro;