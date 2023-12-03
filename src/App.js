import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./assets/theme.json";
import "./App.css";
import Home from "./routes/Home";
import StyleGuide from "./routes/StyleGuide";
import Community from "./routes/Community";
import RedistPost from "./routes/RedistPost";
import Menu from "./routes/Menu";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import Reward from "./routes/Reward";
import CouponSent from "./routes/CouponSent";
import ChallengeDetails from "./routes/ChallengeDetails";
import Coupons from "./routes/Coupons";
import JoinChallange from "./routes/JoinChallange";
import JoinChallangeSuccess from "./routes/JoinChallangeSuccess";
import Chat from "./pages/chat";
import React from "react";
import UserHome from "./routes/UserHome";
import OrderSummaryPage from "./routes/OrderSummaryPage";
import MenuDetailPage from "./routes/MenuDetailPage";
import OrderConfirmationPage from "./routes/OrderConfirmationPage";
import OrderHistoryPage from "./routes/OrderHistoryPage";

function App() {
  return (
    <Router>
      <ConfigProvider theme={theme}>
        <div className="flex flex-col h-screen">
          <div className="flex-grow overflow-auto pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/community" element={<Community />} />
              <Route path="/community/new" element={<RedistPost />}/>
              <Route path="/community/:id/edit" element={<RedistPost />}/>
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="/login/:type" element={<Login />} />
              <Route path="/logout/*" element={<Logout />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reward" element={<Reward />} />
              <Route path="/reward/coupon-sent" element={<CouponSent />} />
              <Route
                path="/reward/challenge-details"
                element={<ChallengeDetails />}
              />
              <Route path="/reward/coupons" element={<Coupons />} />
              <Route
                path="/user-home/join-challenge"
                element={<JoinChallange />}
              />
              <Route
                path="/user-home/join-challange-success"
                element={<JoinChallangeSuccess />}
              />
              <Route
                path="/recycle/chat-with-recycle-companies"
                element={<Chat />}
              />
              <Route path="/user-home" element={<UserHome />} />
              <Route path="/user-home/menu-detail" element={<MenuDetailPage/>} />
              <Route path="/user-home/order-summary" element={<OrderSummaryPage/>} />
              <Route path="/user-home/order-confirmation" element={<OrderConfirmationPage/>} />
              <Route path="/user-home/order-history" element={<OrderHistoryPage/>} />
            </Routes>
          </div>
        </div>
      </ConfigProvider>
    </Router>
  );
}

export default App;
