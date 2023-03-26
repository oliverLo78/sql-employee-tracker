# sql-employee-tracker
Command-line application to manage an employee database using Node.js, Inquirer, and MySQL
<p id="readme-top"></p>

<!-- Dont forget to add the license you used and link your linkedin -->
![License Shield](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)
[![LinkedIn Shield](https://img.shields.io/badge/LinkedIn-555555?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/oliver-lopez78/)


## Description

User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business
```
Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
Sql Employee tracker is a command-line application from scratch to manage a company's database
```
While building this project I learned to:

- Used MySQL2 package to connect to my MySQL database to perform queries  
- Implemented the console.table package to print MySQL row to the console
- Use simple query to manage an employee's role, department, and update employee or add new employee. 
- Used Node.js module as well as inquirer, express package to have fast web framework that has routing and middleware functionality. 

<!-- This section is optional, checkout out Shields_Library.md for pregenerated shields -->
### Built With

[![Node.js Shield](https://img.shields.io/badge/Node.js-339933?&style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
[![mysql	](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation
Add a comment about installing your project. For example that your project will be launched in browser or in the terminal. Now list out the installation requirements: 

## Video walkthrough

[SQL-employee-tracker_ Nov 4, 2022 4_44 PM.webm.mov.webm](https://user-images.githubusercontent.com/109435666/227786644-fd664e93-339b-4b85-bfd8-29320628452c.webm)

1. Code block example

```
git clone https://github.com/oliverLo78/sql-employee-tracker
```

```
npm i
```

```
node server.js
```

2. Design database schema as shown in the following image: 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

![Screenshot example](/assets/12-sql-homework-demo-01.png)



## Usage
1. Once you the application running you can view all the employess, roles, and departments.

2. Then you can add employee it will need your first name, last name, role title, and manager's id.

3. Screenshot CLI

![CLI preview](/assets/Screenshot%20(213).png)

![Screenshot (214)](https://user-images.githubusercontent.com/109435666/220958366-1f3f2588-f557-4042-841f-2b62c25bf684.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests

### Test 1
Detailed description of your test. This is abstract so use your best judgement. Most times this section is unnecessary.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the XXX License. See [LICENSE](./LICENSE) for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

For any further questions feel free to contact me via:
- GitHub: [GitHub Username](#)
- Email: [Your Email](mailto:#)
- LinkedIn: [Name on LinkedIn](#)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

Special thanks to these resources. You have proven invaluable to creating this project:
- [Websites, People, and Third Party Resources that aren't already listed under 'Built With'](#)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
