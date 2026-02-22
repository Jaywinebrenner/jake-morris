import "./styles/app.scss";

import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Services from "./pages/Services";
import UpcomingShows from "./pages/UpcomingShows";
import Contact from "./pages/Contact";

import Front242 from "./pages/Front242";
import Admin from "./pages/Admin";

import ProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const hideNavRoutes = ["/front242"];
  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!hideNav && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/upcoming-shows" element={<UpcomingShows />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/front242" element={<Front242 />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute redirectTo="/front242">
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;