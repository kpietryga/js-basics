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
