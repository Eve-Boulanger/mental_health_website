import React from "react";
import './css/MythsFacts.css';

export const MythsFacts = () => {
    return(
        <div className="thirdRow">
            <div className="grid-container-mf">
                <div className="grid-item-mf">
                    <div className="title-sec">
                        <h1><span className = "black-title-mf">Myths and Facts</span><span className = "blue-title-mf"> about Mental Health</span></h1>
                    </div>
                </div>
                <div className="grid-item-mf">
                    <div className="container-mf">
                        <h1 className="title-mf">MYTHS</h1>
                        <ul>
                            <li>Mental illness is incurable and lifelong.</li>
                            <li>Only certain types of people develop a mental illness.</li>
                            <li>Mental illness is caused by a personal weakness.</li>
                        </ul>
                    </div>
                </div>
                <div className="grid-item-mf">
                    <div className="container-mf">
                    <h1 className="title-mf">FACTS</h1>
                        <ul>
                            <li>With the right kind of help, treated appropriately and early, most people recover fully and have no further episodes of illness.</li>
                            <li>Everyone is vulnerable to mental health problems.</li>
                            <li>A mental illness is not a character flaw. It is caused by a complex interplay of genetic, biological, social and environmental factors.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MythsFacts;