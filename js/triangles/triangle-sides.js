/**
 * Class representing the sides of a triangle.
 * Checks if the given sides form a triangle and provides methods to calculate its parameters.
 */
export function TriangleSides(a, b, c) {
    /**
     * @param {number} a - The first side of the triangle.
     * @param {number} b - The second side of the triangle.
     * @param {number} c - The third side of the triangle.
     * @throws {Error} - Throws an error if the sides do not satisfy the triangle inequality.
     */
    if (!(a + b > c && a + c > b && b + c > a)) {
        throw new Error('Triangle Sides - Bad Sides');
    }
    this.a = a;
    this.b = b;
    this.c = c;
}

/**
 * Returns the sides of the triangle in ascending order.
 * @returns {number[]} - Array with the sides of the triangle.
 */
TriangleSides.prototype.getSides = function () {
    return [this.a, this.b, this.c].sort((a, b) => a - b);
}

/**
 * Calculates the perimeter of the triangle.
 * @returns {number} - The perimeter of the triangle.
 */
TriangleSides.prototype.calcPerimeter = function () {
    return this.a + this.b + this.c;
}

/**
 * Checks if the perimeter of the triangle is greater than the given limit.
 * @param {number} limit - The perimeter limit.
 * @returns {boolean} - True if the triangle's perimeter is greater than the limit, otherwise false.
 */
TriangleSides.prototype.hasPerimeterGreaterThan = function (limit) {
    return this.calcPerimeter() > limit;
}

/**
 * Calculates the area of the triangle using Heron's formula.
 * @returns {number} - The area of the triangle.
 */
TriangleSides.prototype.calcArea = function () {
    const p = this.calcPerimeter() / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
}

/**
 * Checks if the triangle is a right-angled triangle.
 * @returns {boolean} - True if the triangle is right-angled, otherwise false.
 */
TriangleSides.prototype.isRightAngled = function () {
    const a2 = this.a ** 2;
    const b2 = this.b ** 2;
    const c2 = this.c ** 2;
    return a2 + b2 === c2 || a2 + c2 === b2 || c2 + b2 === a2;
}