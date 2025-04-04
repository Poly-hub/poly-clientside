import './About.css'
import useResponsiveClass from "../../hooks/Responsive/useResponsiveClass.js";
import Window from "../../components/Window/Window.jsx";
import {GITHUB_SVG, INSTAGRAM_SVG, ISRAEL_FLAG_SVG, LINKEDIN_SVG} from "../../Constants/SvgConstants.jsx";

export default function About() {

    const responsiveClass = useResponsiveClass("about");

        return(
            <div className={`about-content window-content ${responsiveClass}`}>
                <img className={"profile-picture"} id={"grid-item-1"} src={"/images/profile.png"}
                     alt={"profile-picture"}/>
                <div className={"about-title flex"} id={"grid-item-2"}>
                    <label>Hi, i'm Ram Revivo</label>
                    <label>👋</label>
                </div>
                <div className={"about-location flex"} id={"grid-item-3"}>
                    <a className={"flex"} href={"https://en.wikipedia.org/wiki/Israel"} target="_blank"
                       rel="noopener noreferrer">
                        {ISRAEL_FLAG_SVG}
                    </a>
                    <label>Based In Israel</label>
                </div>
                <div className={"about-socials flex"} id={"grid-item-4"}>
                    <a href={"https://github.com/Poly-hub"} target="_blank" rel="noopener noreferrer">
                        {GITHUB_SVG}
                    </a>
                    <a href={"https://www.linkedin.com/in/ram-revivo/"} target="_blank" rel="noopener noreferrer">
                        {LINKEDIN_SVG}
                    </a>
                    <a href={"https://www.instagram.com/ramrevivo/"} target="_blank" rel="noopener noreferrer">
                        {INSTAGRAM_SVG}
                    </a>
                </div>
                <br/>
                <div className={"about-paragraph flex"} id={"grid-item-5"}>
                    <p>I'm a CS student and software developer skilled in React, Java, and MySQL.</p>
                    <p>I build structured, maintainable projects and enjoy frontend, full-stack, and graphics development.</p>
                    <p>I break down complex problems and write clean, efficient code.</p>
                    <p>Open to roles in frontend, full-stack, or graphics software development.</p>
                </div>
            </div>
        )
}