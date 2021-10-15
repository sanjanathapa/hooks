import React, { useState } from 'react';
// useState: a hook for using state in functional component
// user: 
// 1. name
// 2. designation
// 3. yoj stands for year of joining
const Hookk = () => {
    // const [name, setName] = useState("Sanjana");
    // const [designation, setDesignation] = useState("Associate Software Engineer");
    // const [yoj, setYOJ] = useState(2021);
    const initialEmployee = { 
        name: "Sanjana",
        designation: "Associate Software Engineer",
        yoj: "2021"
    };
    const [employee, setEmployee] = useState(initialEmployee);
    
    const handleYearChange = () => {
        // 1st Way

        // let tempEmployee = employee; // reference not changnig
        // tempEmployee.yoj = tempEmployee.yoj - 1;
        // setEmployee(tempEmployee);

        // 2nd Way
        // let tempEmployee = Object.assign({}, employee);  // New Reference Created with Object.assign()
        // tempEmployee.yoj = tempEmployee.yoj - 1;
        // setEmployee(tempEmployee);

        // 3rd Way
        // let tempEmployee = { ...employee, yoj: employee.yoj - 1 };
        // setEmployee(tempEmployee);

        // 4th Way
        setEmployee(previousEmployee => ({ ...previousEmployee, yoj: previousEmployee.yoj + 1 }));
    }

    return (
        <div>
            <h2>{employee.name}</h2>
            <h2>{employee.designation}</h2>
            <h2>{employee.yoj}</h2>
            <button onClick={handleYearChange}>Change Year of Joining</button>
        </div>
    )
}

export default Hookk;
