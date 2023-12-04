import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import theme from "./assets/theme.json";
import "./App.css";
import Home from "./routes/Home";
import StyleGuide from "./routes/StyleGuide";
import Menu from "./routes/Menu";
import RestaurantOwnerLogin from "./routes/RestaurantOwnerLogin";

function App() {
  return (
    <Router>
      <ConfigProvider theme={theme}>
        <div className="flex flex-col h-screen">
          <div className="flex-grow overflow-auto pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/restaurant-owner-login" element={<RestaurantOwnerLogin />} />
            </Routes>
          </div>
          <Navbar />
        </div>
      </ConfigProvider>
    </Router>
  );
}

export default App;
