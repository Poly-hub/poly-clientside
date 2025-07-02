import "./Tabs.css"
import useResponsiveClass from "../../hooks/Responsive/useResponsiveClass.js";
import {useState} from "react";

export default function Tabs({tabs}){
    const responsiveClass = useResponsiveClass("tabs");
    const [activeTab, setActiveTab] = useState(tabs[0].id);


    return(
        <div className={`tabs-container ${responsiveClass}`}>
            <div className={'tabs-buttons'}>
                {tabs.map((tab) => (
                    <button className={`tab ${activeTab === tab.id ? "active" : "inactive"}`} onClick={()=>setActiveTab(tab.id)}>{tab.name}</button>
                ))}
            </div>

            {tabs.map((tab, index) => (
                <div key={index}>
                    {(activeTab === tab.id) &&tab.content}
                </div>
            ))}
        </div>
    )

}