import React, { useEffect, useState, useRef } from "react";
import "./Tecnology.css";
import android from "../../assets/android.png";
import angular from "../../assets/angular.png";
import apachew from "../../assets/apachew.png";
import meter from "../../assets/meter.png";
import balsamiq from "../../assets/balsamiq.png";
import gradle from "../../assets/gradle.png";
import sqlserver from "../../assets/sqlserver.png";
import owasp from "../../assets/owasp.png";
import sharep from "../../assets/sharep.png";
import sonarq from "../../assets/sonarq.png";
import oracleser from "../../assets/oracleser.png";
import oracleent from "../../assets/oracleent.png";

const Tecnology = () => {

  return (
    <div className="cont_tec">
      <div className="cont_title_tec">
        <h1>TECNOLOGÍAS</h1>
      </div>
      <div className="cont_body_tec">
        <div className="img_tec"><img src={android} alt="" /></div>
        <div className="img_tec"><img src={angular} alt="" /></div>
        <div className="img_tec"><img src={apachew} alt="" /></div>
        <div className="img_tec"><img src={meter} alt="" /></div>
        <div className="img_tec"><img src={balsamiq} alt="" /></div>
        <div className="img_tec"><img src={gradle} alt="" /></div>
        <div className="img_tec"><img src={sqlserver} alt="" /></div>
        <div className="img_tec"><img src={owasp} alt="" /></div>
        <div className="img_tec"><img src={sharep} alt="" /></div>
        <div className="img_tec"><img src={sonarq} alt="" /></div>
        <div className="img_tec"><img src={oracleser} alt="" /></div>
        <div className="img_tec"><img src={oracleent} alt="" /></div>
      </div>
    </div>


  );
};

export default Tecnology;