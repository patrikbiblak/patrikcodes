import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NavigationBar from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="content">
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/src/pages/AboutPage.js" element={<AboutPage />}/>
            <Route path="/src/pages/ProjectsPage.js" element={<ProjectsPage />}/>
            <Route path="/src/pages/ContactPage.js" element={<ContactPage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;