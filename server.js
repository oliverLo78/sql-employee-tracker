// bringing the inquirer library into the file 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'rootroot',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// when file starts looks over credentials and if good connects server then starts questions 
db.connect(function(){startPrompt()})
const questions = [

  {
      type: 'list',
      name: 'choices',
      message: 'What would you like to do? (Use arrow keys)',
      // list type rquires you to add an additional key to your question: choices array
      choices: [
          'View All Employees',
          'Add Employee',
          'Update Employee Role',
          'Remove Employee',
          'View All Roles',
          'Add Role',
          'Update Employee Role',
          'Remove Role',
          'View All Departments',
          'Add Department',
          'Remove Department']
  }
  
  ];
  

function startPrompt() {
  
inquirer.prompt(questions) 
  .then((answers) => {
    // If they select the view employees they will get answer that employee input
    if (answers.choices === 'View All Employees') {
      viewEmployeeAnswer()
    }
    else if (answers.choices === 'View All Roles') {
      viewRoleAnswer()
    }
    else if (answers.choices === 'View All Departments') {
      viewDepartmentAnswer()
    }
    else if (answers.choices === 'Add Employee') {
      addEmployee()
    }
    else if (answers.choices === 'Add Role') {
      addRole()
    }
    else if (answers.choices === 'Add Department') {
      addDepartment()
    }


  })
}
// select all queries from employee if there is error show error otherwise table response
function viewEmployeeAnswer() {
  db.query('select * from employee', (err, res) => {
    if (err) {
      throw err;      
    }
    console.table(res)
    startPrompt();
  })
}

// select all queries from role if there is error show error otherwise table response
function viewRoleAnswer() {
  db.query('select * from role', (err, res) => {
    if (err) {
      throw err;      
    }
    console.table(res)
    startPrompt();
  })
}

// select all queries from department if there is error show error otherwise table response
function viewDepartmentAnswer() {
  db.query('select * from department', (err, res) => {
    if (err) {
      throw err;      
    }
    console.table(res)
    startPrompt();
  })
}
function addEmployee() {
  db.query('select * from role', (err, res) => {
    if (err) {
      throw err;
    }
    inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'What is your first name?'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'What is your last name?',
      },
      {
        type: 'list',
        name: 'role_title',
        message: 'What is your role title?',
        choices: res.map(role => role.title) 
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'What is your manager\'s id?'
      },
      // the selected is what user entered for data.role_title and then 
      // finds the role title in the response which is equal to the answer user gave
      ]).then(data => {
        let viewEmployeeAnswer = viewEmployee();
        const selectedRole = res.find(role => role.title === data.role_title)
        db.query('insert into employee set ?', 
          { first_name:data.first_name, last_name:data.last_name, role_id:selectedRole.id, manager_id:data.manager_id}
        );
      });
    });
  }

// add department similar to how I added a employee
function addDepartment() {
  db.query('select * from role', (err, res) => {
    if (err) {
      throw err;
    }
    inquirer.prompt([
      {
        type: 'input',
        name: 'department_name',
        message: 'What is the department name?'
      },
      // the selected is what user entered for data.role_title and then 
      // finds the role title in the response which is equal to the answer user gave
      ]).then(data => {
        const departmentName = data.department_name;
        db.query('insert into department set ?', 
          { name:departmentName }
        );

      }).then(() => {
        startPrompt();
      });
    });
  }
  


// join employee table from dept. and roles, and join table of employee salary then join their manager
// let viewEmployeeAnswer = viewEmployee();
// Query database
// let deletedRow = 2;

// db.query(`DELETE ?? FROM ?? WHERE id = ?`,["favorite_books", "id", deletedRow], (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Query database
// db.query('SELECT * FROM favorite_books', function (err, results) {
//   console.table(results);
// });

