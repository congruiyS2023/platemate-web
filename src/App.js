import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import theme from "./assets/theme.json";
import "./App.css";
import Home from "./routes/Home";
import StyleGuide from "./routes/StyleGuide";
import Recycle from "./routes/recycle/Recycle";
import CreateNewRecycleOrder from "./routes/recycle/CreateNewRecycleOrder";
import EditExistingRecycleOrder from "./routes/recycle/EditExistingRecycleOrder";
import ExistingOrderEditView from "./routes/recycle/ExistingOrderEditView";
import ChatWithRecycleCompanies from "./routes/recycle/ChatWithRecycleCompanies";
import RecycleHistory from "./routes/recycle/RecycleHistory";



function App() {
  return (
    <Router>
      <ConfigProvider theme={theme}>
        <div className="flex flex-col h-screen">
          <div className="flex-grow overflow-auto pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="/recycle" element={<Recycle />} />
              <Route path="/recycle/create-new-recycle-order" element={<CreateNewRecycleOrder />} />
              <Route path="/recycle/edit-existing-recycle-order" element={<EditExistingRecycleOrder />} />
              <Route path="/recycle/chat-with-recycle-companies" element={<ChatWithRecycleCompanies />} />
              <Route path="/recycle/recycle-history" element={<RecycleHistory />} />
              <Route path="/recycle/edit-existing-recycle-order/d7e5e085-30d4-4160-b1ae-936b07eff71a" element={<ExistingOrderEditView />} />
            </Routes>
          </div>
          <Navbar />
        </div>
      </ConfigProvider>
    </Router>
  );
}

export default App;
