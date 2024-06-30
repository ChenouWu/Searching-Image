import { createContext, useContext,useEffect, useState } from "react"

const AppContext = createContext();

export const AppProvider=({ children })=>{
    const [isDarkTheme,setIsDarkTheme] = useState(false);
    const[value,setValue] = useState('official');
    
    console.log(value)
    const toggleDarkTheme = ()=>{
         const NewTheme = !isDarkTheme;
         setIsDarkTheme(NewTheme);

//How to toggle the Theme Color below;
         const body = document.querySelector('body')
         body.classList.toggle('dark-theme');
    }

    return(
        <AppContext.Provider value={{
        toggleDarkTheme,
        isDarkTheme,
        value,
        setValue
        }}>

            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext =()=>useContext(AppContext);
