import React, {  useState } from "react";

export default function EditEmployee(props) {

    const [emp , setEmp] = useState(props.currentEmp)

    // useEffect(() =>{

    //     setEmp(props.currentEmp);

    // },[props])

    const updateChange = (e) =>{

        const {name , value} = e.target;

        setEmp({...emp ,[name] : value})

    }
  return (
    <>
      <div className="text-center fw-bold h4">Edit Employee Form</div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmployeeId" className="form-label fw-bold">
          Employee ID
        </label>
        <input
        onChange={updateChange}
          name="eId"
          value={emp.eId}
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
          onChange={updateChange}
          name="name"
          value={emp.name}
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
          onChange={updateChange}
          name="sal"
          value={emp.sal}
          type="number"
          className="form-control"
          id="exampleInputEmpSal"
        />
      </div>
      <button
        onClick={() => {
          props.updateEmployee(emp.eId , emp);
        }}
        className="btn btn-primary me-4 "
      >
        Update Employee
      </button>
      <button
        onClick={() => {
          props.setIsEdit(false);
        }}
        className="btn btn-danger "
      >
        Cancel
      </button>
    </>
  );
}
