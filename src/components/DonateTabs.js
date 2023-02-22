import { useState } from "react";

import Donation from "./Donation";
import "./Styles/DonateTabs.css";

import etransfer from "./Pages/images/interac_e-transfer_logo.png";
import email from "./Pages/images/email_icon.png";

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
                ><b>Online Form</b></div>
                <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                ><b>Interac e-Transfer</b></div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <Donation />
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <div className="interac-etransfer">
                        <h2><span className="color1">To donate by</span><span className="color2"> Interac e-Transfer,</span></h2>
                        <ul className="list-bullets">
                            <li>Navigate to your online banking site and send your donation to <b>chapterpresuw@gmail.com</b></li>
                            <li>Send the answer to your security question in a separate email to <b>chapterpresuw@gmail.com</b> to 
                                ensure the full transfer of the donation and provide any additional information in the message
                                section of the e-Transfer</li>
                        </ul>
                        <p><i><b>Don’t hesitate to contact us for any questions!</b></i></p>
                        <img className="img" src={etransfer} alt="interac etransfer"/>
                        <h2 className="color1">Contact Information</h2>
                        <p><img className="img" src={email} alt="email"/><b>chapterpresuw@gmail.com</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonateTabs;