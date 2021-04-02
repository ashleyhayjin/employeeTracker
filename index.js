const inquirer = require('inquirer');
const mysql =  require('mysql');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: "root",

    password: '451208abC!',

    databse: "employees_db",
});

connection.connect(function(err){
    if (err) throw err;

    console.log(`connected as id + ${connection.threadId}`);

    initApp()
})

function initApp(){
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
           "View Employees",
           "View Employees by Department", 
           "View Employees by Manager",
           "Add Employee",
           "Remove Employee",
           "Update Employee Role",
           "Update Employee Manager"
        ],
    })
    .then ((answer) => {
        switch (answer.action){
            case 'View Employees':
                displayEmployees();
                break;
            case 'View Employees by Department':
                displayDepartment();
                break;
            case 'View Employees by Manager':
                displayManager();
                break;
            case 'Add Employee':
                addEmployees();
                break;
            case 'Remove Employee':
                removeEmployee();
                break;
            case 'Update Employee Role':
                updateEmployee();
                break;
            case 'Update Employee Manager':
                updateManager();
                break;
            default: 
                console.log(`invalid : ${answer.action}`);
                break;
        }
    });
};