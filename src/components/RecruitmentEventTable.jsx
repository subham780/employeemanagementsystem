import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecruitmentEventTable = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState(false);
  const handleScheduleButtonClick = (e) => {
    e.preventDefault();
    navigate("/eventsection");
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Resume</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>abc</td>
            <td>abc@gmail.com</td>
            <td>9876543210</td>
            <td>ab.doc</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={handleScheduleButtonClick}
              >
                Schedule
              </button>
            </td>
          </tr>
          <tr>
            <td>abc</td>
            <td>abc@gmail.com</td>
            <td>9876543210</td>
            <td>ab.doc</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={handleScheduleButtonClick}
              >
                Schedule
              </button>
            </td>
          </tr>
          <tr>
            <td>abc</td>
            <td>abc@gmail.com</td>
            <td>9876543210</td>
            <td>ab.doc</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={handleScheduleButtonClick}
              >
                Schedule
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecruitmentEventTable;
