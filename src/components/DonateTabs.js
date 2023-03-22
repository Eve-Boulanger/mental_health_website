import { useState } from "react";

import Donation from "./Donation";
import ShopItems from "./ShopItems";

import "./Styles/DonateTabs.css";

// This function contains the tabs used to display both the online form and interac e-transfer information.
// TODO: replace e-transfer info with shop items.

function DonateTabs() {
    const [toggleState, setToggleState] = useState(1);

        const toggleTab = (index) => {
            setToggleState(index);
        }

    return(
        <div className="container-donate-tabs">
            <div className="bloc-tabs">
                <div
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                ><b>SHOP</b></div>
                <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                ><b>DONATE</b></div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <ShopItems />
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <Donation />
                </div>
            </div>
        </div>
    );
}

export default DonateTabs;