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



const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'root',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

const questions = ([

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

]);