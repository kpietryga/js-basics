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
