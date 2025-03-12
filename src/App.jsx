import './App.css'
import GradientBackground from "./components/GradientBackground/GradientBackground.jsx";
import About from "./Pages/About/About.jsx";

function App() {

  return (
    <div className="App">
        <GradientBackground/>
        {/*<h1 className={"title"}>Poly</h1>*/}
        {/*/!*<h2></h2>*!/*/}
        {/*<h2>Code, Create, Compose</h2>*/}
        <About/>
    </div>
  )
}

export default App
