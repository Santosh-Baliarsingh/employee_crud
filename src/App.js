import { useState } from "react";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeLists from "./components/EmployeeLists";

// Initial Employee data
const employees = [
  { eId: 101, name: "Naruto", sal: 50000 },
  { eId: 102, name: "Asta", sal: 90000 },
  { eId: 103, name: "Sasuke", sal: 80000 },
  { eId: 104, name: "Yuno", sal: 70000 },
];

function App() {
  const [isEdit, setIsEdit] = useState(false);

  const [empArr, setEmpArr] = useState(employees);

  // Delete Emplyee Functionality Here
  const deleteEmployee = (eId) => {
    const filteredArr = empArr.filter((emp) => emp.eId !== eId);

    setEmpArr([...filteredArr]);
  };

  const addNewEmployee = (empObj) =>{

    setEmpArr([...empObj,empObj]);
  };

  return (
    <>
      <h2 className="text-center text-light bg-dark p-2">
        Employee CRUD Application
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <EmployeeLists
              empArr={empArr}
              deleteEmployee={deleteEmployee}
            ></EmployeeLists>
          </div>
          <div className="col-sm-4">
            {isEdit ? <AddEmployee /> : <AddEmployee addNewEmployee={addNewEmployee} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
