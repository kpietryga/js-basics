/**
 * A class representing a point in a two-dimensional space.
 */
export class Point {

    /**
     * Creates a new point.
     *
     * @param {number} x - The X coordinate of the point.
     * @param {number} y - The Y coordinate of the point.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Calculates the Euclidean distance between the current point and another point.
     *
     * @param {Point} otherP - Another point relative to which the distance is calculated.
     * @returns {number} - The distance between the two points.
     */
    getDistance(otherP) {
        const deltaX = otherP.x - this.x;
        const deltaY = otherP.y - this.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
}


