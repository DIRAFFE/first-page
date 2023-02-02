import p1 from "../img/p1.png";
import t2Icon1 from "../img/t2Icon1.png";
import t5Icon0 from "../img/t5Icon0.jpg";

export default function Main() {
  return (
    <div className="main">
      <img src={p1} alt="" className="p1" />
      <div className="p2">
        <div className="t1">
          Magic Devour Magic Devour Magic Devour Magic Devour Magic Devour Magic
          Devour Magic Devour Magic Devour Magic Devour{" "}
        </div>
        <div className="t2">
          <img src={t2Icon1} alt="" className="t2Icon" />
          <span className="t2-1">@magicals</span>
          <img src={t2Icon1} alt="" className="t2Icon" />
          <span className="t2-2">magicals</span>
          <img src={t2Icon1} alt="" className="t2Icon" />
          <span className="t2-3">magicdevour.com</span>
        </div>
        <div className="t3">
          Overpowered magic devoured our bodies. We are cursed... Magic Devour
          is the first raffle launchpad on Aptos and Sui.
        </div>
        <div className="t4">
          <div className="t4Text">Purchase Tickets</div>
          <div className="t4Amount">
            <span className="t4I1">05</span>
            <span className="t4I1">06</span>
            <span className="t4I1">07</span>
          </div>
        </div>
        <div className="t5">
          {/* <img src={p230} alt="" className="t5Bkgrd" /> */}
          <div className="t51">Total Tickets Sold - 8888 Tickets</div>
          <div className="processBar">
            <div className="prcs"></div>
          </div>
          <div className="purchase">
            <div className="pchSelector">
              <span className="pchAmount">5</span>
              <img src={t5Icon0} alt="" className="t5Icon0" />
            </div>
            <div className="pchBtn">
              <div className="pchText">Purchase</div>
            </div>
          </div>
          <div className="limitText">Limit 99 Tickets Per Wallet</div>
        </div>
        <div className="t6">
          {/* <img src={p220} alt="" className="t6Bkgrd" /> */}
          <div className="t61">
            <div className="t6Up">1 ATP</div>
            <div className="t6Down">Mint Price</div>
          </div>
          <div className="t61">
            <div className="t6Up">3333</div>
            <div className="t6Down">Supply</div>
          </div>
          <div className="t61">
            <div className="t6Up">8888</div>
            <div className="t6Down">Tickets Sold</div>
          </div>
        </div>
      </div>
    </div>
  );
}
