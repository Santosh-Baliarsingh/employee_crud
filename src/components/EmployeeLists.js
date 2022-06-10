import React from "react";

export default function EmployeeLists(props) {
  return (
    <>
      <div className="text-center h4 fw-bold">EmployeeLists</div>
      <table className="table table-bordered table-striped table-responsive">
        <thead>
          <tr className="text-center">
            <th>Emp ID</th>
            <th>Emp Name</th>
            <th>Emp Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.empArr.map((emp) => (
            <tr key={emp.eId}>
              <td>{emp.eId}</td>
              <td>{emp.name}</td>
              <td>{emp.sal}</td>
              <td>
                <button
                  className="btn btn-success m-2 p-2"
                  onClick={() => props.editEmployee(emp.eId)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger m-2 p-2"
                  onClick={() => props.deleteEmployee(emp.eId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
