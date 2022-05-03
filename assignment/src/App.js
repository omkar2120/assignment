import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Form from "./component/Login";
import Profile from "./component/Profile";
import Signin from "./component/Signin";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand,sans-serif",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="signin" element={<Signin />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
