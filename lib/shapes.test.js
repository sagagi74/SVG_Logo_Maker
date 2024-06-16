const { Circle, Triangle, Square } = require('./shapes');

// Running tests for the shape classes with various colors and text using npm test

// Initial sample tests for each shape class

// Sample test for rendering a Circle with blue color
// test('Circle render', () => {
//     const shape = new Circle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
// });

// Sample test for rendering a Triangle with blue color
// test('Triangle render', () => {
//     const shape = new Triangle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// });

// Sample test for rendering a Square with blue color
// test('Square render', () => {
//     const shape = new Square();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
// });

// Additional test cases

describe('Shape classes', () => {

    // Circle class tests
    describe('Circle', () => {

        // Verify the render() method outputs the correct SVG for a specified color
        test('render() should output correct SVG string with specified color', () => {
            const shape = new Circle();  // Create a new Circle instance
            shape.setColor("blue");      // Set the color to blue
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });

        // Verify the render() method includes text in the SVG when specified
        test('render() should append text in the SVG string', () => {
            const shape = new Circle();  // Create a new Circle instance
            shape.setColor("blue");      // Set the circle color to blue
            shape.setText("SVG", "white"); // Set the text to "SVG" with white color
            // Check if the output matches the expected SVG string with text
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });

        // Verify the render() method works with different colors
        test('render() should handle alternative colors', () => {
            const shape = new Circle();  // Create a new Circle instance
            shape.setColor("red");       // Set the color to red
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });

        // Verify the render() method handles hexadecimal color values
        test('render() should process hexadecimal color values', () => {
            const shape = new Circle();  // Create a new Circle instance
            shape.setColor("#00FF00");   // Set the color to green using hexadecimal
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#00FF00" />');
        });

        // Verify the render() method handles named color values
        test('render() should process named color values', () => {
            const shape = new Circle();  // Create a new Circle instance
            shape.setColor("green");     // Set the color to green using name
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
        });
    });

    // Triangle class tests
    describe('Triangle', () => {

        // Verify the render() method outputs the correct SVG for a specified color
        test('render() should output correct SVG string with specified color', () => {
            const shape = new Triangle();  // Create a new Triangle instance
            shape.setColor("blue");        // Set the color to blue
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });

        // Verify the render() method includes text in the SVG when specified
        test('render() should append text in the SVG string', () => {
            const shape = new Triangle();  // Create a new Triangle instance
            shape.setColor("blue");        // Set the triangle color to blue
            shape.setText("SVG", "white"); // Set the text to "SVG" with white color
            // Check if the output matches the expected SVG string with text
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });

        // Verify the render() method works with different colors
        test('render() should handle alternative colors', () => {
            const shape = new Triangle();  // Create a new Triangle instance
            shape.setColor("red");         // Set the color to red
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
        });

        // Verify the render() method handles hexadecimal color values
        test('render() should process hexadecimal color values', () => {
            const shape = new Triangle();  // Create a new Triangle instance
            shape.setColor("#00FF00");     // Set the color to green using hexadecimal
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#00FF00" />');
        });

        // Verify the render() method handles named color values
        test('render() should process named color values', () => {
            const shape = new Triangle();  // Create a new Triangle instance
            shape.setColor("green");       // Set the color to green using name
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        });
    });

    // Square class tests
    describe('Square', () => {

        // Verify the render() method outputs the correct SVG for a specified color
        test('render() should output correct SVG string with specified color', () => {
            const shape = new Square();    // Create a new Square instance
            shape.setColor("blue");        // Set the color to blue
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
        });

        // Verify the render() method includes text in the SVG when specified
        test('render() should append text in the SVG string', () => {
            const shape = new Square();    // Create a new Square instance
            shape.setColor("blue");        // Set the square color to blue
            shape.setText("SVG", "white"); // Set the text to "SVG" with white color
            // Check if the output matches the expected SVG string with text
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });

        // Verify the render() method works with different colors
        test('render() should handle alternative colors', () => {
            const shape = new Square();    // Create a new Square instance
            shape.setColor("red");         // Set the color to red
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />');
        });

        // Verify the render() method handles hexadecimal color values
        test('render() should process hexadecimal color values', () => {
            const shape = new Square();    // Create a new Square instance
            shape.setColor("#00FF00");     // Set the color to green using hexadecimal
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="#00FF00" />');
        });

        // Verify the render() method handles named color values
        test('render() should process named color values', () => {
            const shape = new Square();    // Create a new Square instance
            shape.setColor("green");       // Set the color to green using name
            // Check if the output matches the expected SVG string
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="green" />');
        });
    });
});
