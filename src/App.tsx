import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InteractiveResume from "./components/InteractiveResume";
import LandingPage from "./components/LandingPage";
import "./app.css"

export default function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/interactive-resume" element={<InteractiveResume />} />
        </Routes>
      </Router>
    </>
  );
}
