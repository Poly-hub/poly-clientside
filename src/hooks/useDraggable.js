import {useEffect, useRef, useState} from "react";
import useWindowSize from "./Responsive/useWindowSize.js";

const useDraggable = (desktopWidth, desktopHeight , windowWidth = 300, windowHeight = 200) => {

    const {width: screenWidth, height: screenHeight} = useWindowSize();

    const numericWindowWidth =
        typeof windowWidth === "string" && windowWidth.includes("%")
            ? (parseFloat(windowWidth)/100) * screenWidth
            : Number(windowWidth);
    const numericWindowHeight =
        typeof windowHeight === "string" && windowHeight.includes("%")
            ? (parseFloat(windowHeight) / 100) * screenHeight
            : Number(windowHeight);
    const offsetDefaultPosition = {
        x: 0,
        y: 0,
    }
    const defaultPosition = {
        x: desktopWidth/2,
        y: desktopHeight/2,
    }
    const positionRef = useRef({x: offsetDefaultPosition.x, y: offsetDefaultPosition.y});
    const offsetRef = useRef({x: offsetDefaultPosition.x, y: offsetDefaultPosition.y});
    const [position, setPosition] = useState({ x: defaultPosition.x, y: defaultPosition.y })
    const [isDragging, setIsDragging] = useState(false);

    const maxX = screenWidth ? (screenWidth - numericWindowWidth) : 0;
    const maxY = screenHeight ? (screenHeight - numericWindowHeight) : 0;

    const startDragging = (e) => {
        setIsDragging(true);
        offsetRef.current = ({
            x: e.clientX - positionRef.current.x,
            y: e.clientY - positionRef.current.y
        })
        // console.log("Dragging started - Offset:", offsetRef.current);
    }

    const onDrag = (e) => {
        if (!isDragging) return;

        let newX = e.clientX - offsetRef.current.x
        let newY = e.clientY - offsetRef.current.y

        // console.log("window width: " + numericWindowWidth + " window height: " + numericWindowHeight)
        // console.log("before math " + "newX: " + newX + " " + "newY: " + newY)
        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));
        // console.log("after math " + "newX: " + newX + " " + "newY: " + newY)

        positionRef.current = ({x: newX, y:newY});
        setPosition({x: newX, y: newY});

        // console.log("Dragging...");
        // console.log("e.clientX: " + e.clientX + " " + "e.clientY: " + e.clientY)
        // console.log("Updated position:", positionRef.current);
    }

    const onDragEnd = () => {
        setIsDragging(false);
        // console.log(isDragging + "stopped dragging")

    }

    useEffect(() => {
        document.addEventListener("mousemove", onDrag);
        document.addEventListener("mouseup", onDragEnd);
        return () => {
            document.removeEventListener("mousemove", onDrag);
            document.removeEventListener("mouseup", onDragEnd);
        }
    }, [isDragging, maxX, maxY]);

    return { position, startDragging }
}
export default useDraggable;