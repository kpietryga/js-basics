/**
 * Class representing a point on a plane.
 */
export class Point {
    /**
     * @param {number} x - The X coordinate of the point.
     * @param {number} y - The Y coordinate of the point.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Calculates the distance from another point.
     * @param {Point} otherP - The other point.
     * @returns {number} - The distance between the two points.
     */
    getDistance(otherP) {
        const deltaX = otherP.x - this.x;
        const deltaY = otherP.y - this.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
}
