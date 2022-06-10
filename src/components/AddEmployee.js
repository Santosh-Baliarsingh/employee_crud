import React, { useState } from "react";

export default function AddEmployee(props) {
  const [eId, seteId] = useState(0);

  const [name, setName] = useState("");

  const [sal, setSal] = useState(0);

  return (
    <>
      <div className="text-center fw-bold h4">AddEmployee Form</div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmployeeId" className="form-label fw-bold">
          Employee ID
        </label>
        <input
          onChange={(e) => {
            seteId(e.target.value);
          }}
          type="number"
          className="form-control"
          id="exampleInputEmpId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmployeeName" className="form-label fw-bold">
          Employee Name
        </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className="form-control"
          id="exampleInputEmpName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmployeeSalary" className="form-label fw-bold">
          Employee Salary
        </label>
        <input
          onChange={(e) => {
            setSal(e.target.value);
          }}
          type="number"
          className="form-control"
          id="exampleInputEmpSal"
        />
      </div>
      <div className="mb-3">
      <button
        onClick={() => {
          const empObj = { eId, name, sal };
          props.addNewEmployee(empObj);
        }}
        className="btn btn-primary p-2"
      >
        Add New Employee
      </button>
      </div>
    </>
  );
}
