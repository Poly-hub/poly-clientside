import useResponsiveClass from "../../hooks/Responsive/useResponsiveClass.js";
import About from "../../Pages/About/About.jsx";
import Taskbar from "../../components/Taskbar/Taskbar.jsx";
import "./Desktop.css"
import {useReducer} from "react";
import {FILE_SVG} from "../../Constants/SvgConstants.jsx";
import {appReducer, INITIAL_APP_STATE} from "../../hooks/appReducer.js";
import Window from "../../components/Window/Window.jsx";

const APPS = [
    {
        name:'About',
        content:<About/>,
        icon:FILE_SVG,
        windowWidth:"40%",
        windowHeight:"45%",
        header: name,
        headerColor:"var(--window-1-color)"
    },
]

export default function Desktop() {

    const responsiveClass = useResponsiveClass("desktop")
    const [state, dispatch] = useReducer(appReducer, INITIAL_APP_STATE)
    const {openedApps} = state




    function handleOpenApp (e){
        const newAppName = e.currentTarget.id;
        const foundApp = APPS.find((app) => app.name === newAppName);
        if (!foundApp) {
            return
        } else {
            handleRestoreApp(foundApp.name)
        }
        dispatch({type: "OPEN_APP", payload: foundApp})
        console.log("IM OPENING");

    }
    function handleMinimizeApp(appName) {
        console.log("IM MINIMIZING");
        dispatch({ type: "MINIMIZE_APP", payload: appName });
    }
    function handleRestoreApp(appName) {
        console.log("IM RESTORING");

        dispatch({ type: "RESTORE_APP", payload: appName });
    }
    function handleCloseApp(appName) {
        console.log("IM CLOSING");
        dispatch({ type: "CLOSE_APP", payload: appName });
    }
    return (
        <div className={`desktop-container ${responsiveClass}`}>
            <Taskbar
                openedApps = {openedApps}
                dispatch = {dispatch}
                handleRestoreApp = {handleRestoreApp}
            />
            <div className={"desktop-apps-container flex"}>
                {APPS.map((app) => (
                    <div
                        onClick={handleOpenApp}
                        key={app.name}
                        id={app.name}
                        className={"desktop-app flex"}
                    >
                        {app.icon}{app.name}
                    </div>
                ))}
            </div>
            <div className={"windows-panel"}>
                {openedApps.map(app =>
                    app.minimized ? null : (
                        <Window
                            key={app.name}
                            header={app.name}
                            headerColor={app.headerColor}
                            windowWidth={app.windowWidth}
                            windowHeight={app.windowHeight}
                            content={app.content}
                            onClose={handleCloseApp}
                            onMinimize={handleMinimizeApp}
                        />
                    )
                )}
            </div>

        </div>
    )
}