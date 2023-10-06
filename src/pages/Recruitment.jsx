import { useEffect } from "react";
import { useState } from "react";
import JobApplicationTable from "../components/JobApplicationTable";
import axios from "axios";

const skillSetsArray = [
  {
    Id: 1,
    skillSetName: "Java",
  },
  {
    Id: 2,
    skillSetName: "Automation",
  },
  {
    Id: 3,
    skillSetName: "Testing",
  },
  {
    Id: 4,
    skillSetName: "Dev",
  },
];

const statusArray = [
  {
    Id: 1,
    statusName: "New",
  },
  {
    Id: 2,
    statusName: "In process",
  },
  {
    Id: 3,
    statusName: "Complete",
  },
];

const Recruitment = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [minimumExperience, setMinimumExperience] = useState("");
  const [location, setLocation] = useState("");
  const [totalCandidates, setTotalCandidates] = useState("");
  const [jobId, setJobId] = useState("");
  const [mySkills,setMySkills] = useState("");
  const [status,setStatus] = useState("");

  const generateJobId = () => {
    let jId = Math.floor(Math.random() * 100 + 1);
    setJobId(jId);
  };

  useEffect(() => {
    generateJobId();
  }, []);

  const handleSkillSet = (e)=>{
    setMySkills(e.target.value);
  }

  const handleStatus = (e)=>{
    setStatus(e.target.value);
  }

  const handleAddButtonClick = async(e)=>{
    console.log(mySkills);
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/jobs/save", {
      jobDescription,
      responsibilities,
      minimumExperience,
      location,
      totalCandidates,
      jobId,
      skillSet:mySkills,
      status
    }, {
      header:{
        "Content-Type":"application/json"
      }
    })
    if(res.status===200){
      console.log("sucess");
    }else{
      console.log("error");
    }
  }

  return (
    <div className="container my-4">
      <div className="top">
        <h1>Recruitment</h1>
        <div className="my-4 px-4 border">
          <h3 className="my-4">Jobs</h3>
          <form className="my-4">
            <div className="py-2">
              <label htmlFor="jobDescription" className="form-label">
                Job Description:
              </label>
              <input
                type="text"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="form-control"
                id="jobDescription"
              />
            </div>
            <div className="py-2">
              <label htmlFor="jobDescription" className="form-label">
                Job Id: <span className="text-primary">{jobId}</span>
              </label>
            </div>
            <div className="d-flex gap-4">
              <div className="py-2">
                <label htmlFor="skillSet" className="form-label">
                  Skill Set:
                </label>
                <select className="form-select" onChange={handleSkillSet}>
                  {skillSetsArray.map((skill)=>(
                    <option value={skill.skillSetName}>{skill.skillSetName}</option>
                  ))}
                </select>
              </div>
              <div className="py-2">
                <label htmlFor="status" className="form-label">
                  Status:
                </label>
                <select className="form-select" onChange={handleStatus}>
                  {statusArray.map((status) => (
                    <option key={status.Id}>{status.statusName}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="py-2">
              <label htmlFor="responsibilities" className="form-label">
                Responsibilities:
              </label>
              <input
                type="text"
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
                className="form-control"
                id="responsibilities"
              />
            </div>
            <div className="py-2">
              <label htmlFor="minimumExperience" className="form-label">
                Minimum Experience
              </label>
              <input
                type="text"
                value={minimumExperience}
                onChange={(e) => setMinimumExperience(e.target.value)}
                className="form-control"
                id="minimumExperience"
              />
            </div>
            <div className="py-2">
              <label htmlFor="location" className="form-label">
                Location:
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-control"
                id="localtion"
              />
            </div>
            <div className="py-2">
              <label htmlFor="totalCandidates" className="form-label">
                Total Candidates
              </label>
              <input
                type="text"
                value={totalCandidates}
                onChange={(e) => setTotalCandidates(e.target.value)}
                className="form-control"
                id="totalCandidates"
              />
            </div>
            <button type="submit" className="btn btn-primary my-4" onClick={handleAddButtonClick}>
              Add
            </button>
            <button type="submit" className="btn btn-secondary my-4 mx-2">
              Update
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <JobApplicationTable />
      </div>
    </div>
  );
};

export default Recruitment;
