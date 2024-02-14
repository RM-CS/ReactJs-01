import React, { createContext, useContext } from 'react';

export const ThemeContext = React.createContext(
    {
        themeMode: "light",
        darkTheme: () => {},
        lightTheme: () => {}
    }
)
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){ //custom hooks
    return useContext(ThemeContext)
}