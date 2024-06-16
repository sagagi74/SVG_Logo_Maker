const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Define the questions to ask the user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be 3 characters or less.' // Validate text length
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square'] // List of shapes to choose from
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal):'
    }
];

// Prompt the user with the defined questions
inquirer.prompt(questions).then(answers => {
    let shape;

    // Create the selected shape
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }

    // Set the shape color
    shape.setColor(answers.shapeColor);

    // Generate the SVG content
    const svgContent = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;

      // Ensure the output directory exists
      if (!fs.existsSync('output')){
        fs.mkdirSync('output');
    }

    // Write the SVG content to a file in output folder
    fs.writeFileSync('output/logo.svg', svgContent);

    // Output a success message
    console.log('Generated logo.svg was Successful!');
});
