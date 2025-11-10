import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "src/Components/Navbar/Navbar";
import LandingPage from "src/Components/Pages/LandingPage/LandingPage";
import LoginPage from "src/Components/Pages/LoginPage/LoginPage";
import RegisterPage from "src/Components/Pages/RegisterPage/RegisterPage";
import ShareLinkModal from "./Components/Modals/ShareLinkModal";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/link" element={<ShareLinkModal />} />
        <Route path="/inbox" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
