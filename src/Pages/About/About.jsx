import './About.css'
import useResponsiveClass from "../../hooks/Responsive/useResponsiveClass.js";
import {GITHUB_SVG, INSTAGRAM_SVG, ISRAEL_FLAG_SVG, LINKEDIN_SVG} from "../../Constants/SvgConstants.jsx";
import Tabs from "../../components/Tabs/Tabs.jsx";

export default function About() {

    const responsiveClass = useResponsiveClass("about");

    function bioParagraph() {
        return(
            <div className={"about-paragraph flex"}>
                <h3>👨‍💻 About Me</h3>
                <p>I’m a Computer Science student (B.Sc + M.Sc) and full-stack developer passionate about AI, graphics, and creative tech.</p>

                <h3>🚀 What I Build</h3>
                <p>From AI-powered surveillance systems to gamified math platforms, I craft smart, scalable apps that solve real-world problems.</p>

                <h3>🎨 My Approach</h3>
                <p>I love clean code, beautiful UI, and systems that feel alive. Whether it’s React, NestJS, Java, or TensorFlow—I build with purpose.</p>

                <h3>✨ Let's Connect</h3>
                <p>Currently working on projects that blend creativity with deep tech. Always open to opportunities that challenge and inspire.</p>
            </div>
        )
    }
    function experienceParagraph() {
        return(
            <div className={"about-paragraph flex"}>
                <h3>🚀 AI Surveillance Developer | LControl</h3>
                <p>Built a full-stack AI surveillance platform blending React, NestJS, and PostgreSQL with Python-based YOLOv8 microservices, enabling dynamic real-time detection and user-driven prompt filtering ("only person," "dog + cat").</p>

                <h3>🎮 Kids Learning | Smart Math Platform</h3>
                <p>Developed a gamified math-learning website using ReactJS, Spring Boot, and Hibernate. Led UI/UX design, engineered adaptive learning algorithms, and implemented robust OTP authentication, creating interactive experiences tailored for children aged 6–14.</p>

                <p>I'm passionate about merging creativity with deep tech, building solutions that not only perform beautifully but inspire users along the way.</p>
            </div>


        )
    }

        return(
            <div className={`about-content ${responsiveClass}`}>
                <img className={"profile-picture"} id={"grid-item-1"} src={"/images/profile.png"}
                     alt={"profile-picture"}/>
                <div className={"about-title flex"} id={"grid-item-2"}>
                    <label>Hi, i'm Ram Revivo 👋</label>
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

                <div className={"about-paragraph-container flex"} id={"grid-item-5"}>
                    <Tabs tabs={[
                        {
                            id: 1,
                            name: "Experience",
                            content: experienceParagraph(),
                        },
                        {
                            id: 2,
                            name: "Bio",
                            content: bioParagraph(),
                        }
                    ]}/>
                </div>
            </div>
        )
}