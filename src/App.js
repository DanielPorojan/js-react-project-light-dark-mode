import React from "react";
import Navbar from "./components/Navbat";
import Main from "./components/Main";


function Page(){
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return(
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}

export default Page