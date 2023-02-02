import React from "react";
import header01 from "../img/header01.png";

export default function Header() {
  return (
    <div className="header">
      <div className="leftHeader">Magic Devour</div>
      <button
        // style={{ background: `url(${header02})` }}
        className="btnHeader"
      >
        {<img alt="icon" src={header01} className="btnIcon" />}

        <span>Connect Wallet</span>
      </button>
    </div>
  );
}
