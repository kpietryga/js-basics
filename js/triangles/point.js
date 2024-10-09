/**
 * Class representing a point on a plane.
 */
export function Point(x, y) {

    /**
     * @param {number} x - X-coordinate of the point.
     * @param {number} y - Y-coordinate of the point.
     */
    this.x = x;
    this.y = y;
}

/**
 * Calculates the distance from another point.
 * @param {Point} otherP - Another point.
 * @returns {number} - The distance between the two points.
 */
Point.prototype.getDistance = function (otherP) {
    const deltaX = otherP.x - this.x;
    const deltaY = otherP.y - this.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}