import "./App.css";
import Navbar from "./components/Navbar.js";
import ReadText from "./components/ReadText";
import Textform from "./components/Textform.js";
import React, {useState} from 'react'
import Alert from "./components/Alert"; 

// import ReactDOM from "react-dom/client"; 
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";


function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null) 

  const showAlert = (message) =>{
    setAlert({msg:message}) 
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const DarkMode = () => {
    if (myStyle.color === "black") {
      setMyStyle({
          color: "white",
          backgroundColor: "black",
      });
      setBtnText("Disable Dark Mode");
      showAlert("Dark mode enabled")
    } 
    else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
      showAlert("Light mode enabled")
    }
  };



  return (
    <>
  <BrowserRouter>   
      <Navbar aboutBar="About Us" contactBar="Contact Us" cssstyle = {myStyle}/>
      <button onClick={DarkMode}>{btnText}</button> 
      <Alert mesg = {alert}/>

      <Routes>
        <Route exact path="/" element={null} />
        <Route exact path="/read" element={<ReadText cssstyle = {myStyle}/>} />
        <Route exact path="/text" element={<Textform textHeading="Enter the text" cssstyle = {myStyle} func = {showAlert}/>} />
      </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
