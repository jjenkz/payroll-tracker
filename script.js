// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

const collectEmployees = function () {
  const employees = [];
  // come back later for logic
  let continueThis = true;
  while (continueThis) {
    let firstName = prompt("Enter first name");
    let lastName = prompt("Enter last name:");
    let salary = prompt("Enter salary:");

    if (isNaN(salary)) {
      salary = 0;
    }
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    };
    employees.push(employee);

    continueThis = confirm("Do you want to add another employee?");
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  //variable to hold total salary set at 0 to start
  let totalSalary = 0;
  //variable to keep track of number of employees use .length
  const totalEmployees = employeesArray.length;

  //use for loop to add each salary to total salary variable with object method
  for (let i = 0; i < totalEmployees; i++) {
    totalSalary = totalSalary + employeesArray[i].salary;
  }

  //variable to hold avarage salary = total/number of employees
  const averageSalary = totalSalary / totalEmployees;
  console.log(averageSalary);
};
// TODO: Calculate and display the average salary

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomNum = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomNum];
  console.log(randomEmployee);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
