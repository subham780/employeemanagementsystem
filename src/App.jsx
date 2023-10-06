import Recruitment from "./pages/Recruitment";
import Referrals from "./pages/Referrals";
import ReferralSection from "./pages/ReferralSection";
import RecruitmentEvent from "./pages/RecruitmentEvent";
import EventSection from "./pages/EventSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import InterviewFeedback from "./pages/InterviewFeedback";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Recruitment />} />
        <Route exact path="/referrals" element={<Referrals />} />
        <Route exact path="/referralsection" element={<ReferralSection />} />
        <Route exact path="/recruitmentevent" element={<RecruitmentEvent />} />
        <Route exact path="/eventsection" element={<EventSection />} />
        <Route
          exact
          path="/interviewfeedback"
          element={<InterviewFeedback />}
        />
      </Routes>
    </div>
  );
}

export default App;
