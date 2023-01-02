import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p220 from "../img/p220.png";
import p221 from "../img/p221.png";
import p230 from "../img/p230.png";
import t2Icon1 from "../img/t2Icon1.png";
import t5I1 from "../img/t5I1.png";
import t5I2 from "../img/t5I2.png";
import t5I3 from "../img/t5I3.png";
import t5I4 from "../img/t5I4.png";
import t5Icon0 from "../img/t5Icon0.jpg";

export default function Main() {
  return (
    <div className="main">
      <img src={p1} alt="" className="p1" />
      <div className="p2">
        <img src={p2} alt="" className="p2Bkgrd" />
        <div className="p2Element">
          <div className="t1">Magic Devour</div>
          <div className="t2">
            <img src={t2Icon1} alt="" className="t2Icon1" />
            <span className="t2-1">@magicals</span>
            <img src={t2Icon1} alt="" className="t2Icon1" />
            <span className="t2-2">magicals</span>
            <img src={t2Icon1} alt="" className="t2Icon1" />
            <span className="t2-3">magicdevour.com</span>
          </div>
          <div className="t3">
            Overpowered magic devoured our bodies. We are cursed... <br />
            Magic Devour is the first raffle launchpad on Aptos and Sui.
          </div>
          <img src={p220} alt="" className="t4Bkgrd" />
          <div className="t4">
            <div className="t4Text">Purchase Tickets</div>
            <div className="t4Icon">
              <img src={p221} alt="" className="t4I1" />
              <img src={p221} alt="" className="t4I2" />
              <img src={p221} alt="" className="t4I3" />
            </div>
            <div className="t41">
              <div>05</div>
              <div>05</div>
              <div>05</div>
            </div>
          </div>
          <div className="t5">
            <img src={p230} alt="" className="t5Bkgrd" />
            <div className="t51">Total Tickets Sold - 8888 Tickets</div>
            <div className="t5Icon1">
              <img src={t5I1} alt="" className="t5I1" />
              <img src={t5I2} alt="" className="t5I2" />
            </div>
            <div className="t5Icon2">
              <img src={t5I3} alt="" className="t5I3" />
              <img src={t5I4} alt="" className="t5I4" />
            </div>
            <div className="t52">
              <div className="t521">5</div>
              <div>
                <img src={t5Icon0} alt="" className="t5Icon0" />
              </div>
              <div className="t522">Purchase</div>
            </div>
            <div className="t54">Limit 99 Tickets Per Wallet</div>
          </div>
          <div className="t6">
            <img src={p220} alt="" className="t6Bkgrd" />
            <div className="t61">
              <div>1 ATP</div>
              <div>3333</div>
              <div>8888</div>
            </div>
            <div className="t62">
              <div>Mint Price</div>
              <div>Supply</div>
              <div>Tickets Sold</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
