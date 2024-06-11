const { Circle, Triangle, Square } = require('./shapes');

// Testing the shapes with various colors and text using npm test

// Example test cases for each shape

// test('Circle render', () => {
//     const shape = new Circle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
// });

// test('Triangle render', () => {
//     const shape = new Triangle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// });

// test('Square render', () => {
//     const shape = new Square();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
// });

// Additional tests

describe('Shape classes', () => {

    // Circle class tests
    describe('Circle', () => {

        // Ensure the render() method produces the correct SVG for a given color
        test('render() should return correct SVG string with specified color', () => {
            const shape = new Circle();  // Instantiate a Circle
            shape.setColor("blue");      // Assign the color blue
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });

        // Ensure the render() method includes text when specified
        test('render() should include text in the SVG string', () => {
            const shape = new Circle();  // Instantiate a Circle
            shape.setColor("blue");      // Assign the color blue
            shape.setText("SVG", "white"); // Set the text to "SVG" with white color
            // Verify the output matches the expected SVG string with text
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });

        // Ensure the render() method works with different colors
        test('render() should handle different colors', () => {
            const shape = new Circle();  // Instantiate a Circle
            shape.setColor("red");       // Assign the color red
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });

        // Ensure the render() method handles hexadecimal color values
        test('render() should handle hexadecimal color values', () => {
            const shape = new Circle();  // Instantiate a Circle
            shape.setColor("#00FF00");   // Assign the color green using hexadecimal
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#00FF00" />');
        });

        // Ensure the render() method handles named color values
        test('render() should handle named color values', () => {
            const shape = new Circle();  // Instantiate a Circle
            shape.setColor("green");     // Assign the color green using name
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
        });
    });

    // Triangle class tests
    describe('Triangle', () => {

        // Ensure the render() method produces the correct SVG for a given color
        test('render() should return correct SVG string with specified color', () => {
            const shape = new Triangle();  // Instantiate a Triangle
            shape.setColor("blue");        // Assign the color blue
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });

        // Ensure the render() method includes text when specified
        test('render() should include text in the SVG string', () => {
            const shape = new Triangle();  // Instantiate a Triangle
            shape.setColor("blue");        // Assign the color blue
            shape.setText("SVG", "white"); // Set the text to "SVG" with white color
            // Verify the output matches the expected SVG string with text
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });

        // Ensure the render() method works with different colors
        test('render() should handle different colors', () => {
            const shape = new Triangle();  // Instantiate a Triangle
            shape.setColor("red");         // Assign the color red
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
        });

        // Ensure the render() method handles hexadecimal color values
        test('render() should handle hexadecimal color values', () => {
            const shape = new Triangle();  // Instantiate a Triangle
            shape.setColor("#00FF00");     // Assign the color green using hexadecimal
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#00FF00" />');
        });

        // Ensure the render() method handles named color values
        test('render() should handle named color values', () => {
            const shape = new Triangle();  // Instantiate a Triangle
            shape.setColor("green");       // Assign the color green using name
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        });
    });

    // Square class tests
    describe('Square', () => {

        // Ensure the render() method produces the correct SVG for a given color
        test('render() should return correct SVG string with specified color', () => {
            const shape = new Square();    // Instantiate a Square
            shape.setColor("blue");        // Assign the color blue
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
        });

        // Ensure the render() method includes text when specified
        test('render() should include text in the SVG string', () => {
            const shape = new Square();    // Instantiate a Square
            shape.setColor("blue");        // Assign the color blue
            shape.setText("SVG", "white"); // Set the text to "SVG" with white color
            // Verify the output matches the expected SVG string with text
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });

        // Ensure the render() method works with different colors
        test('render() should handle different colors', () => {
            const shape = new Square();    // Instantiate a Square
            shape.setColor("red");         // Assign the color red
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />');
        });

        // Ensure the render() method handles hexadecimal color values
        test('render() should handle hexadecimal color values', () => {
            const shape = new Square();    // Instantiate a Square
            shape.setColor("#00FF00");     // Assign the color green using hexadecimal
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="#00FF00" />');
        });

        // Ensure the render() method handles named color values
        test('render() should handle named color values', () => {
            const shape = new Square();    // Instantiate a Square
            shape.setColor("green");       // Assign the color green using name
            // Verify the output matches the expected SVG string
            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="green" />');
        });
    });
});
