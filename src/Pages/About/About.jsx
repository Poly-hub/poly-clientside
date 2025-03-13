import './About.css'
import useResponsiveClass from "../../hooks/Responsive/useResponsiveClass.js";
import Window from "../../components/Window/Window.jsx";
export default function About() {

    const responsiveClass = useResponsiveClass("about");
    const header = "About"
    function aboutContent() {
        return(
            <div className={`about-content window-content`}>
                <img className={"profile-picture"} id={"grid-item-1"} src={"/images/profile.png"}
                     alt={"profile-picture"}/>
                <div className={"about-title flex"} id={"grid-item-2"}>
                    <label>Hi, i'm Ram Revivo</label>
                    <label>👋</label>
                </div>
                <div className={"about-location flex"} id={"grid-item-3"}>
                    <a className={"flex"} href={"https://en.wikipedia.org/wiki/Israel"} target="_blank"
                       rel="noopener noreferrer">
                        <svg width="30px" height="30px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                             className="iconify iconify--twemoji"
                             preserveAspectRatio="xMidYMid meet">
                            <path fill="#EDECEC" d="M20.666 19l-.467.809h.934zM18 21.618l.467-.809h-.934z"></path>
                            <path fill="#EEE"
                                  d="M0 25h36V11H0v14zM.294 7.5h35.413A4 4 0 0 0 32 5H4A3.999 3.999 0 0 0 .294 7.5z"></path>
                            <path fill="#EDECEC"
                                  d="M21.133 16.191h-.934l.467.809zm-5.332 0h-.934l.467.809zm3.243 3.618L20.089 18l-1.045-1.809h-2.088L15.911 18l1.045 1.809zM15.334 19l-.467.809h.934zM18 14.382l-.467.809h.934z"></path>
                            <path fill="#0038B8"
                                  d="M.294 7.5A3.982 3.982 0 0 0 0 9v2h36V9c0-.531-.106-1.036-.294-1.5H.294z"></path>
                            <path fill="#EEE"
                                  d="M.294 28.5h35.413A4 4 0 0 1 32 31H4a3.999 3.999 0 0 1-3.706-2.5z"></path>
                            <path fill="#0038B8"
                                  d="M.294 28.5A3.982 3.982 0 0 1 0 27v-2h36v2c0 .531-.106 1.036-.294 1.5H.294zm16.084-7.691L18 23.618l1.622-2.809h3.243L21.244 18l1.622-2.809h-3.243L18 12.382l-1.622 2.809h-3.243L14.756 18l-1.622 2.809h3.244zm1.622.809l-.467-.809h.934l-.467.809zm3.133-5.427l-.467.809l-.467-.808h.934zM20.666 19l.467.808h-.934l.467-.808zM18 14.382l.467.809h-.934l.467-.809zm-1.044 1.809h2.089L20.089 18l-1.044 1.809h-2.089L15.911 18l1.045-1.809zm-1.155 0l-.467.809l-.467-.808h.934zM15.334 19l.467.808h-.934l.467-.808z"></path>
                        </svg>
                    </a>
                    <label>Based In Israel</label>
                </div>
                <div className={"about-socials flex"} id={"grid-item-4"}>
                    <a href={"https://github.com/Poly-hub"} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill={"var(--symbols-color)"} viewBox="0 0 50 50"
                             width="var(--social-svg-size)" height="var(--social-svg-size)">
                            <path
                                d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
                        </svg>
                    </a>
                    <a href={"https://www.linkedin.com/in/ram-revivo/"} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill={"var(--symbols-color)"} viewBox="0 0 50 50"
                             width="var(--social-svg-size)" height="var(--social-svg-size)">
                            <path
                                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                        </svg>
                    </a>
                    <a href={"https://www.instagram.com/ramrevivo/"} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill={"var(--symbols-color)"} viewBox="0 0 50 50"
                             width="var(--social-svg-size)" height="var(--social-svg-size)">
                            <path
                                d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
                        </svg>
                    </a>
                </div>
                <br/>
                <div className={"about-paragraph"} id={"grid-item-5"}>
                    <label>I'm a CS student and software developer skilled in React, Java, and MySQL.</label>
                    <br/><br/>
                    <label>I build structured, maintainable projects and enjoy frontend, full-stack, and graphics
                        development.</label>
                    <br/><br/>
                    <label>I break down complex problems and write clean, efficient code.</label>
                    <br/><br/>
                    <label>Open to roles in frontend, full-stack, or graphics software development.</label>
                </div>
            </div>
        )
    }

    return(
        <Window header={header} content={aboutContent()} windowWidth={"90%"} windowHeight={"60%"} responsiveClass={responsiveClass} headerColor={"var(--window-6-color)"}/>
    )
}