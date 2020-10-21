class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
    }

    commonRgb() {
        const {
            r,
            b,
            g
        } = this;

        return `${r},${g},${b}`;
    }

    rgb() {
        return `rgb(${this.commonRgb()})`
    }

    rgba(a = 1.0) {
        return `rgba(${this.commonRgb()},${a})`
    }

    hex() {
        const {
            r,
            b,
            g
        } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16).slice(1);
    }
}

const c1 = new Color(255, 255, 255, "white");

console.log(c1.rgba());