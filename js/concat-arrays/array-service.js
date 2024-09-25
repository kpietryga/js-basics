export class ArrayService {
    constructor(arr1, arr2) {
        this.mergedArr = this.merge(arr1, arr2);
    }

    /**
     * Combines two two-dimensional arrays of integers into one.
     * If the arrays have a different number of columns, the smaller one is padded with zeros.
     *
     * @param {number[][]} a1 - The first two-dimensional array.
     * @param {number[][]} a2 - The second two-dimensional array.
     * @returns {number[][]} The combined two-dimensional array.
     */
    merge(a1, a2) {
        const colSizeA1 = a1[0].length;
        const colSizeA2 = a2[0].length;

        if (colSizeA1 === colSizeA2) {
            return [...a1, ...a2];
        }

        return colSizeA1 > colSizeA2 ?
            [...a1, ...this.#resizeArrayToLimitWithZeros(a2, colSizeA1)] :
            [...this.#resizeArrayToLimitWithZeros(a1, colSizeA2), ...a2];
    }

    /**
     * A private method that pads the rows of an array with zeros to match a specified number of columns.
     *
     * @param {number[][]} arr - The array whose rows are to be padded with zeros.
     * @param {number} limit - The target number of columns.
     * @returns {number[][]} The array with rows padded with zeros.
     */
    #resizeArrayToLimitWithZeros(arr, limit) {
        return arr.map(row => {
            const zerosArr = Array(limit - row.length).fill(0)
            return [...row, ...zerosArr]
        })
    }

}

