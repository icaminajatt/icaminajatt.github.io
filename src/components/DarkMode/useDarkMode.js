import React, {useState, useEffect} from "react";
// import DarkModeContainer from "./DarkModeContainer"
// import { ReactComponent as MoonIcon } from '../images/moon.svg'
// import { ReactComponent as SunIcon } from '../images/sun.svg';

import './useDarkMode.css'

function UseDarkMode() {
  const[darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
    if (darkMode === true) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }

    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <>
      <i id="moon" className="fas fa-moon fa-2x" onClick={() => setDarkMode((prevMode) => !prevMode)}></i>
      {/* <DarkModeContainer onClick={() => setDarkMode((prevMode) => !prevMode)}>
      <SunIcon />
      <MoonIcon />
    </DarkModeContainer> */}
    </>
  )
}

export default UseDarkMode;