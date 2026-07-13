import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
