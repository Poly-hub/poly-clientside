import './App.css'
import GradientBackground from "./components/GradientBackground/GradientBackground.jsx";
import Desktop from "./Pages/Desktop/Desktop.jsx";
import useResponsiveClass from "./hooks/Responsive/useResponsiveClass.js";

function App() {
    const responsiveClass = useResponsiveClass("app");
  return (
    <div className={`App ${responsiveClass}`}>
        <GradientBackground/>
        {/*<h1 className={"title"}>Poly</h1>*/}
        {/*/!*<h2></h2>*!/*/}
        {/*<h2>Code, Create, Compose</h2>*/}
        <Desktop/>
    </div>
  )
}

export default App
