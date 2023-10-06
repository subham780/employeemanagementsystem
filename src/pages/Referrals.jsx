import { useState } from "react";
import JobReferralsTable from "../components/JobReferralsTable";
import axios from "axios";

const Referals = () => {
  const [jobId, setJobId] = useState("");
  const handleSearchButtonClick = async(e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:8080/jobs/find/${jobId}`);
  };
  return (
    <div className="container my-4">
      <div className="top">
        <h1>Referrals</h1>
        <div className="my-4 px-4 border">
          <h3 className="my-4">Job Search</h3>
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
            <button
              type="submit"
              onClick={(jobId) => handleSearchButtonClick(jobId)}
              className="btn btn-primary my-4"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="bottom">
        <JobReferralsTable />
      </div>
    </div>
  );
};

export default Referals;
