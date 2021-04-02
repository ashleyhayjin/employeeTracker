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
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "What is the department you want to add?",
    }).then(function(res) {
        connection.query('INSERT INTO employees_db.department (name) VALUES (?)', res.department, function(err, data) {
            if (err) throw err;
            console.table('Department inserted');
            initApp();
        })
    })
}

const addEmployee = () => {
    console.log('Add an employee is working.');
    inquirer.prompt([
    {
        type: "input",
        name: "first_name",
        message: "What is your first name?",

    },
    {
        type: "input",
        name: "last_name",
        message: "What is your last name?",

    },
    {
        type: "input",
        name: "role_id",
        message: "What is your role id?",

    },
    {
        type: "input",
        name: "manager_id",
        message: "What is your manager id?",

    },
]).then (function (res) {
    connection.query('INSERT INTO employees_db.employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [res.first_name, res.last_name, res.role_id, res.manager_id], function (err, data) {
        if (err) throw err;
        console.table("Employee Added");
        initApp();
    })
})
}

const addRoles = () => {
    console.log('Add a roll is working.');
}

const updateRole = () => {
    console.log('Update role is working');
}

