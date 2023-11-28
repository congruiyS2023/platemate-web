import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./assets/theme.json";
import "./App.css";
import Home from "./routes/Home";
import StyleGuide from "./routes/StyleGuide";

function App() {
  return (
    <Router>
      <div className="App">
        <ConfigProvider theme={theme}>
          <Routes>
            <Route path="/" element=<Home />></Route>
            <Route path="/style-guide" element={<StyleGuide />} />
          </Routes>
        </ConfigProvider>
      </div>
    </Router>
  );
}

export default App;
