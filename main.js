function setup() {
    // create a canvas which is full width and height
    createCanvas(window.innerWidth, window.innerHeight);

    // Add a white background to the canvas
    background(255);
}

function draw() {}

const path = [];

function draw() {
    // disabled filling geometry - p5js function
    noFill();

    if (mouseIsPressed) {
        // Store the location of the mouse
        const point = {
            x: mouseX,
            y: mouseY
        };
        path.push(point);
    }

    beginShape();
    path.forEach(point => {
        // create a vertex at the specified location
        vertex(point.x, point.y);
    });
    endShape();
}

const paths = [];
let currentPath = [];

function draw() {
    noFill();

    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY
        };
        // Adding the point to the `currentPath` array
        currentPath.push(point);
    }

    // Looping over all the paths and drawing all the points inside them
    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

// When the mouse is pressed, this even will fire
function mousePressed() {
    // Clean up the currentPath
    currentPath = [];

    // Push the path inside the `paths` array
    paths.push(currentPath);
}

const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');

function draw() {
    noFill();

    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            // storing the color and weights provided by the inputs for each point
            color: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            // using the color and the weight to style the stroke
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

clear.addEventListener('click', () => {
    // Remove all the paths
    paths.splice(0);

    // Clear the background
    background(255);
});

const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
}

function draw() {
    noFill();

    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            color: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

function mousePressed() {
    currentPath = [];
    paths.push(currentPath);
}

clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
});
