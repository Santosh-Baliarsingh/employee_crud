import React ,{ useState } from "react";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeLists from "./components/EmployeeLists";
import Swal from 'sweetalert2'


// Initial Employee data
const employees = [
  { eId: 101, name: "Naruto", sal: 50000 },
  { eId: 102, name: "Asta", sal: 90000 },
  { eId: 103, name: "Sasuke", sal: 80000 },
  { eId: 104, name: "Yuno", sal: 70000 },
];

const initialFormState = {eId : null , name : "" , sal : null};

function App() {
  const [isEdit, setIsEdit] = useState(false);

  const [empArr, setEmpArr] = useState(employees);

  const [currentEmp, setCurrentEmp] = useState({initialFormState});

  // deleteEmplyee Functionality Here
  const deleteEmployee = (eId) => {
    const filteredArr = empArr.filter((emp) => emp.eId !== eId);
    setEmpArr([...filteredArr]);
  };

  // addNewEmployee Functionality Here
  const addNewEmployee = (empObj) => {
    // debugger;
    setEmpArr([...empArr, empObj]);
    Swal.fire(	
      	'Success',
      'Employee Added Successfully!',	
      'success'	
    )
  };

  // EditEmployee Functionality Here
  const editEmployee = (eId) => {
    setIsEdit(true)
    const selectedEmp = empArr.find((emp) => emp.eId === eId);
    setCurrentEmp(selectedEmp);
  };
  
  // updateEmployee functionality Here
  const updateEmployee = (eId , updateEmpObj) =>{
    setIsEdit(false);
    setEmpArr(empArr.map((emp) => (emp.eId === eId ? updateEmpObj : emp)))
    Swal.fire(	
      'Success',
      'Updated Successfully!',	
      'success'	
    )

  }

  return (
    <>
      <h2 className="text-center text-light bg-dark p-2">
        Employee CRUD Application Using Functional Component
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <EmployeeLists
              empArr={empArr}
              deleteEmployee={deleteEmployee}
              editEmployee={editEmployee}
            ></EmployeeLists>
          </div>
          <div className="col-sm-12 col-md-4">
            {isEdit ? (
              <EditEmployee currentEmp={currentEmp}
              isEdit = {isEdit}
              setIsEdit = {setIsEdit}
              updateEmployee = {updateEmployee}
               />
            ) : (
              <AddEmployee addNewEmployee={addNewEmployee} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
