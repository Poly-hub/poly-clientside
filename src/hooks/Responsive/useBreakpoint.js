import useWindowSize from "./useWindowSize.js";
import {useMemo} from "react";

const MOBILE_MAX_WIDTH = 576;
const TABLET_MAX_WIDTH = 992;

export default function useBreakpoint(){
    const {width} = useWindowSize();

    return useMemo(() => {
        if (width < MOBILE_MAX_WIDTH) return "mobile";
        if (width < TABLET_MAX_WIDTH) return "tablet";
        return "desktop";
    }, [width]);
}