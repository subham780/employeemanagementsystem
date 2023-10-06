import { useState } from "react";
import RecruitmentEventTable from "../components/RecruitmentEventTable";

const RecruitmentEvent = () => {
  const [jobId, setJobId] = useState("");
  return (
    <div className="container my-4">
      <div className="top">
        <h1>Recruitment Event</h1>
        <div className="my-4 px-4 border">
          <h3 className="my-4">Referral Search</h3>
          <form className="my-4">
            <div className="py-2">
              <label htmlFor="jobDescription" className="form-label">
                Job Id:
              </label>
              <input
                type="text"
                value={jobId}
                onChange={(e) => setJobId(e.target.value)}
                className="form-control"
                id="jobDescription"
              />
            </div>
            <button className="btn btn-primary my-4">Search</button>
          </form>
        </div>
      </div>
      <div className="bottom">
        <RecruitmentEventTable />
      </div>
    </div>
  );
};

export default RecruitmentEvent;
