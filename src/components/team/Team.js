import React from "react";

import team1 from "../../image/1696238793510.jpg";

import "./team.css";

const Team = () => {
  return (
    <div className="componentFirst teamBackGround">
      <div className="componentSecond">
        <div className="roadmap">
          <div className="roadmapTitle textHighlight">OUR TEAM</div>
          <div className="roadmapSubTitle">
            a collection of 5,000 unique NFTs
          </div>
          <div className="teamContainer">
            <div className="teamItem">
              <div className="teamItemImage">
                <img
                  src={team1}
                  alt=""
                  style={{ width: "100%", borderRadius: "50%" }}
                />
              </div>
              <div className="teamItemTitle">@PCOkereke</div>
              <div className="teamItemName">Chukwu Chijioke Peter</div>
              <div className="teamItemPosition">Software Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
