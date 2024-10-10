/**
 * Class representing a triangle created by three points.
 */
export function TrianglePoints(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
}

/**
 * Calculates the lengths of the sides of the triangle formed by the points.
 * @returns {number[]} - Array of the triangle's side lengths, in ascending order.
 */
TrianglePoints.prototype.getSides = function () {
    return [this.p1.getDistance(this.p2), this.p1.getDistance(this.p3), this.p3.getDistance(this.p2)]
        .sort((a, b) => a - b);
}

/**
 * Checks if the sides of this triangle are equal to the sides of another triangle.
 * @param {TriangleSides} otherTriangleSides - Another triangle.
 * @returns {boolean} - True if the sides are the same, otherwise false.
 */
TrianglePoints.prototype.hasEqualSides = function (otherTriangleSides) {
    return JSON.stringify(this.getSides()) === JSON.stringify(otherTriangleSides.getSides());
};
