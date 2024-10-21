/**
 * Service for handling operations related to comparing triangles based on their sides.
 * @param {TriangleSides[]} sidesTriangle - Array of triangles based on their sides.
 */
export const sidesService = (sidesTriangle) => {
    const sortedStringifiedTriangularSides = sidesTriangle.map(side => JSON.stringify(side.getSides()));

    /**
     * Finds triangles with common sides.
     * @param {TrianglePoints[]} triangles - Array of triangles based on their vertices.
     * @returns {Object[]} - Array of objects containing the sides and indices of triangles with matching sides.
     */
    const findCommonSides = (triangles) => {
        // Create a map where the key is the sorted sides (as a JSON string) and the value is an array of triangle indices
        const mapTriangles = triangles.map((triangle, idx) => [triangle.getSides(), idx])
            .reduce((acc, curr) => {
                const key = JSON.stringify(curr[0]);
                const value = curr[1];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(value);
                return acc;
            }, {});

        // Filter the triangles with sides that match those in `sidesTriangle`
        return Object.entries(mapTriangles)
            .filter(([key]) => sortedStringifiedTriangularSides.includes(key))
            .map(([key, value]) => ({ sides: JSON.parse(key), indices: value }));
    };

    return {
        findCommonSides
    };
};