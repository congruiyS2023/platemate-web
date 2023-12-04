import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./assets/theme.json";
import "./App.css";
import Home from "./routes/Home";
import StyleGuide from "./routes/StyleGuide";
import Menu from "./routes/Menu";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import Reward from "./routes/Reward";
import CouponSent from "./routes/CouponSent";
import ChallengeDetails from "./routes/ChallengeDetails";
import Coupons from "./routes/Coupons";
import JoinChallange from "./routes/JoinChallange";
import JoinChallangeSuccess from "./routes/JoinChallangeSuccess";

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
              <Route path="/login/restaurant" element={<Login />} />
              <Route path="/login/company" element={<Login />} />
              <Route path="/logout/:type" element={<Logout />} />
              <Route path="/reward" element={<Reward />} />
              <Route path="/coupon-sent" element={<CouponSent />} />
              <Route path="/challenge-details" element={<ChallengeDetails />} />
              <Route path="/coupons" element={<Coupons />} />
              <Route path="/join-challenge" element={<JoinChallange />} />
              <Route path="/join-challange-success" element={<JoinChallangeSuccess />} />
            </Routes>
          </div>
        </div>
      </ConfigProvider>
    </Router>
  );
}

export default App;
