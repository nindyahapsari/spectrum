import { createContext, useContext, useState } from 'react';

type TDarkMode = boolean;

type ThemeContextType = {
  darkMode: TDarkMode;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState<TDarkMode>(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
