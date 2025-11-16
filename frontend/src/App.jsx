import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "src/Components/Navbar/Navbar";
import LandingPage from "src/Components/Pages/LandingPage/LandingPage";
import LoginPage from "src/Components/Pages/LoginPage/LoginPage";
import RegisterPage from "src/Components/Pages/RegisterPage/RegisterPage";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import ShareLinkModal from "./Components/Modals/ShareLinkModal";

const App = () => {
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);

  return (
    <>
      <Router>
        <Navbar onShareLinkClick={() => setIsShowModalOpen(true)} />

        {isShowModalOpen && (
          <ShareLinkModal onClose={() => setIsShowModalOpen(false)} />
        )}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/inbox" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
