import React, { useState } from "react";

export default function AddEmployee(props) {
  const [empObj, setEmpObj] = useState({});
  return (
    <>
      <div className="text-center fw-bold h4">AddEmployee Form</div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmployeeId" class="form-label fw-bold">
            Employee ID
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmpId"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmployeeName" class="form-label fw-bold">
            Employee Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmpName"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmployeeSalary" class="form-label fw-bold">
            Employee Salary
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmpSal"
            aria-describedby="emailHelp"
          />
        </div>
        <button
        onClick={() =>{ props.addNewEmployee(empObj)}}
        className="btn btn-primary "
      >
        Add New Employee
      </button>
      </form>
     
    </>
  );
}
