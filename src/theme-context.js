import { useContext , createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme =()=>{
    return useContext(ThemeContext)
}

export const ThemeProvider = ( {children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode ((theme) => !theme);
    }

    const theme = isDarkMode ? "dark" : "light"

    useEffect(() => {
      document.documentElement.setAttribute("data-theme",theme)
      // eslint-disable-next-line
    }, [isDarkMode])
    

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

