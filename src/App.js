import React, { useState } from "react";
import Splash from "./components/SplashScreen";
import { ThemeProvider } from "styled-components";
import ParticlesBg from "particles-bg";
import "./App.css";
const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  
  const [theme, setTheme] = useState("light");
 
    return (
      <div className="App">
     
             {/* <ParticlesBg type="random" bg={true} /> */}
          <div>
            <ThemeProvider theme={themes[theme]}>
              <Splash theme={theme} setTheme={setTheme} />
            </ThemeProvider>
        
          </div>
        </div>
    );
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
