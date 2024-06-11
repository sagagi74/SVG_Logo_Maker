class Shape {
    constructor() {
        this.color = "";
        this.text = "";
        this.textColor = "";
    }

    setColor(color) {
        this.color = color;
    }

    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    renderText() {
        if (this.text && this.textColor) {
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }
        return "";
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />${this.renderText()}`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />${this.renderText()}`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />${this.renderText()}`;
    }
}

module.exports = { Circle, Triangle, Square };
