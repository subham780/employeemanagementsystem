import { useEffect, useState } from "react";
import axios from "axios";
import DeleteJobIdButton from "./DeleteJobIdButton";

const JobApplicationTable = () => {
  const [data,setData] = useState([]);
  const getData = async()=>{
    const res = await axios.get("http://localhost:8080/jobs/find");
    setData(res.data);
  }
  useEffect(()=>{
    getData();
  },[data])

  const handleDeleteButtonClick = ()=>{
    console.log("clicked");
  }
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>JobId</th>
            <th>Description</th>
            <th>Experience</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d)=>(
             <tr>
             <td>{d.jobId}</td>
             <td>{d.jobDescription}</td>
             <td>{d.minimumExperience}</td>
             <td>{d.location}</td>
             <td>{d.status}</td>
             <td>
               <DeleteJobIdButton jobId = {d.jobId}/>
             </td>
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationTable;
