var inquirer = require('inquirer');

var questions = [
    {
        type: 'confirm',
        name: 'ready',
        message: 'Are you ready ?',
        default: false,
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        filter: function (val) {
            return val.toLowerCase();
        },
    }
];

inquirer.prompt(questions).then((answers) => {
    const {name} = answers;
    if(name !== 'binod'){
        console.log('No, your name is Binod Vas')
    }else{
        console.log('Binod')
    }
}).catch(error => {
        if(error.isTtyError) {
            console.log('Prompt couldn\'t be rendered in the current environment')
        } else {
            console.log('You aren\'t a binod fan')
            // Something else when wrong
        }
    });