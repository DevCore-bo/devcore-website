import React, { useEffect, useState, useRef } from "react";
import "./Tecnology.css";
import android from "../../assets/android.png";
import angular from "../../assets/angular.png";
import apachew from "../../assets/apachew.png";
import meter from "../../assets/meter.png";
import balsamiq from "../../assets/balsamiq.png";
import primefaces from "../../assets/primefaces.png";
import gradle from "../../assets/gradle.png";
import sqlserver from "../../assets/sqlserver.png";
import owasp from "../../assets/owasp.png";
import soap from "../../assets/soap.png";
import sharep from "../../assets/sharep.png";
import sonarq from "../../assets/sonarq.png";
import oracleser from "../../assets/oracleser.png";
import oracleent from "../../assets/oracleent.png";
import oraclesoa from "../../assets/oraclesoa.png";

const Tecnology = () => {

  return (
    <div className="cont_tecno">
      <div className="img_tec"><img src={android} alt="" /></div>
      <div className="img_tec"><img src={angular} alt="" /></div>
      <div className="img_tec"><img src={apachew} alt="" /></div>
      <div className="img_tec"><img src={meter} alt="" /></div>
      <div className="img_tec"><img src={balsamiq} alt="" /></div>
      <div className="img_tec"><img src={primefaces} alt="" /></div>
      <div className="img_tec"><img src={gradle} alt="" /></div>
      <div className="img_tec"><img src={sqlserver} alt="" /></div>
      <div className="img_tec"><img src={owasp} alt="" /></div>
      <div className="img_tec"><img src={soap} alt="" /></div>
      <div className="img_tec"><img src={sharep} alt="" /></div>
      <div className="img_tec"><img src={sonarq} alt="" /></div>
      <div className="img_tec"><img src={oracleser} alt="" /></div>
      <div className="img_tec"><img src={oracleent} alt="" /></div>
      <div className="img_tec"><img src={oraclesoa} alt="" /></div>
    </div>

  );
};

export default Tecnology;