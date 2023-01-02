import React from "react";
import header01 from "../img/header01.png";
import header02 from "../img/header02.png";

export default function Header() {
  return (
    <div className="header">
      <div className="leftHeader">Magic Devour</div>
      <button style={{ background: `url(${header02})` }} className="btnHeader">
        {<img src={header01} className="btnIcon" />} Connect Wallet
      </button>
    </div>
  );
}
