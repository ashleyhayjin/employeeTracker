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
        name: "action",
        message: "What would you like to do?",
        choices: [
           "View Employees",
           "View Employees by Department", 
           "View Roles",
           "Add Department",
           "Add Employee",
           "Add Roles",
           "Update Employee Role",
        ],
    })
    .then ((answer) => {
        switch (answer.action){
            case "View Employees":
                displayEmployees();
                break;
            case 'View Employees by Department':
                displayDepartment();
                break;
            case 'View Roles':
                displayRoles();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Add Roles':
                addRoles();
                break;
            case 'Update Employee Role':
                updateRole();
                break;
            default: 
                console.log(`invalid : ${answer.action}`);
                break;
        }
    });
};

const displayEmployees = () => {
    console.log('Display Employees is working.');
    connection.query("SELECT * FROM employees_db.employee", function (err, data){
        console.table(data);
        initApp();
    })
}

const displayDepartment = () => {
    console.log('Display Department is working.');
    connection.query("SELECT * FROM employees_db.department", function (err, data){
        console.table(data);
        initApp();
    })
}

const displayRoles = () => {
    console.log('Display the roles');
    connection.query("SELECT * FROM employees_db.role", function (err, data){
        console.table(data);
        initApp();
    } )
}

const addDepartment = () => {
    console.log('Add a department is working.');
}

const addEmployee = () => {
    console.log('Add an employee is working.');
}

const addRoles = () => {
    console.log('Add a roll is working.');
}

const updateRole = () => {
    console.log('Update role is working');
}

