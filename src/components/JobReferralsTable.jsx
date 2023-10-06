import { useNavigate } from "react-router-dom";

const JobReferralsTable = () => {
  const navigate = useNavigate();
  const handleReferButtonClick = (e) => {
    e.preventDefault();
    navigate("/referralsection");
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>JobId</th>
            <th>Description</th>
            <th>Qualification</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>98</td>
            <td>Dev</td>
            <td>Masters</td>
            <td>Mumbai</td>
            <td>New</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={handleReferButtonClick}
              >
                Refer
              </button>
            </td>
          </tr>
          <tr>
            <td>99</td>
            <td>Testing</td>
            <td>Bachelors</td>
            <td>Pune</td>
            <td>In Process</td>
            <td>
              <button className="btn btn-primary">Refer</button>
            </td>
          </tr>
          <tr>
            <td>100</td>
            <td>Automation</td>
            <td>Masters</td>
            <td>Bangalore</td>
            <td>Complete</td>
            <td>
              <button className="btn btn-primary">Refer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JobReferralsTable;
