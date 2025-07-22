import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import OpenSource from "./pages/OpenSource";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./hooks/useTheme";
import { initGA, trackPageView } from "./utils/analytics";

// Analytics wrapper component
const AnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA once when app loads
    initGA();
  }, []);

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname + location.search);
  }, [location]);

  return children;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnalyticsWrapper>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/opensource" element={<OpenSource />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </AnalyticsWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
