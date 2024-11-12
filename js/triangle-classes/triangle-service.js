/**
 * Service for operations on a set of triangles based on their sides.
 * @param {TriangleSides[]} sides - Array of triangles.
 */
export const triangleService = (sides) => {

    /**
     * Finds the triangles with the minimum and maximum area and calculates the ratio of the smallest to the largest area.
     * @returns {Object} - Object containing the minimum area, maximum area, and the ratio.
     */
    const findMinMaxArea = () => {
        const minMax = sides.reduce((acc, curr) => {
            const area = curr.calcArea();
            if (acc.min > area) acc.min = area;
            if (acc.max < area) acc.max = area;
            return acc;
        }, { min: Infinity, max: 0 });

        return {
            minArea: minMax.min,
            maxArea: minMax.max,
            ratio: minMax.min / minMax.max,
        };
    };

    /**
     * Filters out right-angled triangles from the list.
     * @returns {TriangleSides[]} - Array of right-angled triangles.
     */
    const findRightAngledTriangles = () => sides.filter(t => t.isRightAngled());

    /**
     * Finds triangles with the largest perimeter.
     * @param {TriangleSides[]} arr - Array of triangles.
     * @returns {Object} - Object containing the maximum perimeter and an array of triangles with that perimeter.
     */
    const maxPerimeter = (arr) => arr.reduce((acc, curr) => {
        const currPer = curr.calcPerimeter();
        if (curr.hasPerimeterGreaterThan(acc.maxValue)) {
            acc.maxValue = currPer;
            acc.maxTriangles = [curr];
        } else if (currPer === acc.maxValue) {
            acc.maxTriangles.push(curr);
        }
        return acc;
    }, {
        maxValue: 0,
        maxTriangles: []
    });

    return {
        findMinMaxArea,
        findRightAngledTriangles,
        maxPerimeter,
    };
};