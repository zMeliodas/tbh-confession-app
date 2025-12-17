import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, Activity } from "react";
import Navbar from "src/Components/Navbar/Navbar";
import LandingPage from "src/Components/Pages/LandingPage/LandingPage";
import LoginPage from "src/Components/Pages/LoginPage/LoginPage";
import RegisterPage from "src/Components/Pages/RegisterPage/RegisterPage";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import ShareLinkModal from "./Components/Modals/ShareLinkModal";
import ConfessionPage from "./Components/Pages/ConfessionPage/ConfessionPage";
import WhisperPage from "./Components/Pages/WhisperPage/WhisperPage";
import SettingsPage from "./Components/Pages/SettingsPage/SettingsPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import DeleteAccountModal from "./Components/Modals/DeleteAccountModal";

const App = () => {
  const [showShareLinkModal, setShowShareLinkModal] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  return (
    <>
      <Router>
        <Navbar onShareLinkClick={() => setShowShareLinkModal(true)} />

        {showDeleteAccountModal && (
          <DeleteAccountModal
            onClose={() => setShowDeleteAccountModal(false)}
          />
        )}

        <Activity mode={showShareLinkModal ? "visible" : "hidden"}>
          <ShareLinkModal onClose={() => setShowShareLinkModal(false)} />
        </Activity>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/confess" element={<ConfessionPage />} />
            <Route path="/whisper" element={<WhisperPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/settings"
              element={
                <SettingsPage
                  onDeleteAccountClick={() => setShowDeleteAccountModal(true)}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
