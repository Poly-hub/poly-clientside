import "./Window.css"
import useDraggable from "../../hooks/useDraggable.js"
import {CLOSE_SVG, MINIMIZE_SVG} from "../../Constants/SvgConstants.jsx";
import useResponsiveClass from "../../hooks/Responsive/useResponsiveClass.js";
export default function Window({
                                   desktopWidth,
                                   desktopHeight,
                                   header,
                                   headerColor,
                                   windowWidth,
                                   windowHeight,
                                   content,
                                   onClose,
                                   onMinimize,
                               }) {

    const { position, startDragging } = useDraggable(
        desktopWidth, desktopHeight, windowWidth, windowHeight);
    const responsiveClass = useResponsiveClass("window");

    return(
        <div className={`window-container ${responsiveClass}`}
             style={{
                 minWidth: windowWidth,
                 minHeight: windowHeight,
                 transform: `translate(${position.x}px,${position.y}px)`
             }}
        >

            <div className={"window-header"}
                 style={{backgroundColor: headerColor,}}
                 onMouseDown={startDragging}>
                {header}
                <div className={"window-header-controls"}>
                    <button
                        className={"window-header-controls-toggle"}
                        id={"minimize-button"}
                        onClick={()=>onMinimize(header)}
                        aria-label={"Minimize window"}
                    >
                        {MINIMIZE_SVG}
                    </button>

                    <button
                        className={"window-header-controls-toggle"}
                        id={"close-button"}
                        onClick={()=>onClose(header)}
                        aria-label={"Close window"}
                    >
                        {CLOSE_SVG}
                    </button>
                </div>

            </div>
            <div className={"window-content"}>{content}</div>
        </div>
    )
}