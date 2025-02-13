import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import Home from "./components/Home";
import ResultsPage from "./components/ResultsPage";
import { Footer } from "./components/Footer";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <BrowserRouter>
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
