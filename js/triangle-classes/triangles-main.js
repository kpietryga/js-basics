import { TriangleSides } from './triangle-sides';
import { Point } from "./point";
import { TrianglePoints } from "./triangle-points";
import { triangleService } from "./triangle-service";
import { sidesService } from "./side-service";

/**
 * Main program function. Creates triangles, performs operations on them, and displays results.
 */
export const mainTriangleClass = () => {
    const sides = [
        new TriangleSides(2, 3, 4),
       //new TriangleSides(1, 2, 3), // Uncomment this line if you want to test invalid triangles
        new TriangleSides(2, 2, 2),
        new TriangleSides(3, 4, 5),
        new TriangleSides(5, 13, 12)
    ];

    const triangles = [
        new TrianglePoints(new Point(0, 0), new Point(3, 0), new Point(0, 4)),
        new TrianglePoints(new Point(0, 2), new Point(3, 2), new Point(0, 6)),
        new TrianglePoints(new Point(0, 0), new Point(6, 0), new Point(0, 8)),
        new TrianglePoints(new Point(0, 0), new Point(2, 0), new Point(0, 2)),
        new TrianglePoints(new Point(0, 0), new Point(5, 0), new Point(0, 12)),
        new TrianglePoints(new Point(0, 0), new Point(0, 0), new Point(0, 1)),
        new TrianglePoints(new Point(-1, 0), new Point(1, 0), new Point(0, 0)),
        new TrianglePoints(new Point(0, 5), new Point(12, 0), new Point(0, 0)),
    ];

    console.log("===== A =====")
    console.log("All sides is valid triangle")
    console.log("===== B =====")
    const ts = triangleService(sides);
    console.log(ts.findMinMaxArea());  // Logs minimum and maximum area and their ratio
    console.log("===== C =====")
    const rightAngledTriangles = ts.findRightAngledTriangles();  // Finds right-angled triangles
    console.log(rightAngledTriangles);  // Logs right-angled triangles
    console.log(ts.maxPerimeter(rightAngledTriangles));  // Logs maximum perimeter and triangles with that perimeter
    console.log("===== D =====")
    const ser = sidesService(sides);
    console.log(ser.findCommonSides(triangles));  // Logs triangles with common sides
};
