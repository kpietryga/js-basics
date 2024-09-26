import {EratosthenesSieve} from "./eratosthenes-sieve";
import {Point} from "./point";

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

    /**
     * Finds the element in the array whose neighbors' sum is the largest.
     * It searches all neighbors of a given element and then selects the one with the highest sum.
     *
     * @returns {Object} An object containing the neighbors' sum (`sum`), row number (`row`), and column number (`col`) of the element with the largest neighbors' sum.
     */
    findMaxSumNeighbors() {
        const maxSumNeighbor = {sum: 0, row: 0, col: 0}

        for (let row = 0; row < this.mergedArr.length; row++) {
            for (let col = 0; col < this.mergedArr[0].length; col++) {

                const neighbors = [
                    this.#getNeighbor(this.mergedArr, row - 1, col - 1),  // top left
                    this.#getNeighbor(this.mergedArr, row - 1, col),      // top center
                    this.#getNeighbor(this.mergedArr, row - 1, col + 1),  // top right

                    this.#getNeighbor(this.mergedArr, row, col - 1),      // middle left
                    // this.#getNeighbor(this.mergedArr, row, col),       // middle center
                    this.#getNeighbor(this.mergedArr, row, col + 1),      // middle right

                    this.#getNeighbor(this.mergedArr, row + 1, col - 1),  // bottom left
                    this.#getNeighbor(this.mergedArr, row + 1, col),      // bottom center
                    this.#getNeighbor(this.mergedArr, row + 1, col + 1)   // bottom right

                ].filter(neighbor => neighbor !== null);  // usuń tych co nie istnieją

                const sum = neighbors.reduce((acc, curr) => acc + curr)
                if (sum > maxSumNeighbor.sum) {
                    maxSumNeighbor.sum = sum;
                    maxSumNeighbor.row = row;
                    maxSumNeighbor.col = col;
                }
            }
        }
        return maxSumNeighbor;
    }

    /**
     * A private method that returns a neighbor in the array.
     * Returns null if the neighbor does not exist (when the coordinates are out of bounds).
     *
     * @param {number[][]} arr - The array from which the neighbor is fetched.
     * @param {number} x - The x-coordinate (row) of the neighbor.
     * @param {number} y - The y-coordinate (column) of the neighbor.
     * @returns {number|null} The value of the neighbor or null if the neighbor does not exist.
     */
    #getNeighbor = (arr, x, y) => {
        if (x < 0 || y < 0 || x > arr.length - 1 || y > arr[0].length - 1) {
            return null;
        }
        return arr[x][y];
    }

    /**
     * Finds the largest element in the array.
     * If there are multiple such elements, it selects the one closest to the top-left corner of the array.
     *
     * @returns {Object} An object containing the maximum value (`maxValue`) and the closest point (`result`).
     * @throws {Error} If the array is empty or invalid.
     */
    getMax() {
        if (!this.mergedArr || this.mergedArr.length === 0) {
            throw new Error('Tablica jest pusta albo nie prawidłowa')
        }

        let maxValue = 0
        let maxValuePoints = []

        for (let row = 0; row < this.mergedArr.length; row++) {
            for (let col = 0; col < this.mergedArr[0].length; col++) {
                const value = this.mergedArr[row][col];
                if (value > maxValue) {
                    maxValue = value;
                    maxValuePoints = [new Point(row, col)]
                } else if (value === maxValue) {
                    maxValuePoints = [...maxValuePoints, new Point(row, col)];
                }
            }
        }


        const leftTopPoint = new Point(0, 0);
        const result = this.#findLowestDistanceToPoint(maxValuePoints, leftTopPoint);
        return {
            maxValue,
            result
        }

    }


}

