import "./Taskbar.css"
import {useEffect, useState} from "react";
import useResponsiveClass from "../../hooks/Responsive/useResponsiveClass.js";
export default function Taskbar({openedApps, dispatch, handleRestoreApp}) {

    const [clock, setClock] = useState(Intl.DateTimeFormat("en-US",{hour:"2-digit",hour12:false,minute:"2-digit"}).format(new Date()));
    const responsiveClass = useResponsiveClass('taskbar');
    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(Intl.DateTimeFormat("en-US",{hour:"2-digit",hour12:false,minute:"2-digit"}).format(new Date()))
        }, 1000)
        return () => clearInterval(intervalId)
    },[])

    const handleAppClick = (appName) => {
        const app = openedApps.find(app => app.name === appName);
        if (app && app.minimized) {
            dispatch({type: "RESTORE_APP", payload: appName})
        }
    }

    return (
        <div className={"taskbar-container flex"}>
            <label className={"taskbar-icon"} aria-label="Poly Logo">
                Poly
            </label>

            <div className={"taskbar-apps-container"}>
                {
                    openedApps.map((app) => (
                        <span
                            key={app.name}
                            onClick={() => handleAppClick(app.name)}
                            className={`taskbar-app flex`}
                            id={`taskbar-${app.name}`}
                            aria-label={`Toggle ${app.name}`}
                        >
                            {app.icon}
                        </span>
                    ))
                }
            </div>

            <div className={`taskbar-clock flex ${responsiveClass}`}>
                <label aria-label={"Clock"}> {clock}</label>
            </div>

        </div>
    )
}