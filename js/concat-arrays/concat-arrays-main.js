import {ArrayService} from "./array-service";

/**
 * Generates a random integer within a given range.
 *
 * @param {number} min - The lower bound of the range (inclusive).
 * @param {number} max - The upper bound of the range (inclusive).
 * @returns {number} A random integer from the range [min, max].
 */
const generateRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Generates a two-dimensional array of integers with random size and values.
 * The size of the array and the values are randomly chosen within the given range.
 *
 * @param {number} min - The lower bound of the range for the array size and element values.
 * @param {number} max - The upper bound of the range for the array size and element values.
 * @returns {number[][]} A two-dimensional array with random size and random values.
 */
const generateArray = (min, max) => {
    const size = generateRandom(min, max)
    return Array(size)
        .fill(1)
        .map((_) => Array(size)
            .fill(1)
            .map((_) => generateRandom(min, max))
        );
}

/**
 * The main function of the program, which creates two random arrays, merges them, and performs various operations on them.
 *
 * The function performs the following operations:
 * - Merges two randomly generated arrays using `ArrayService`.
 * - Displays the merged array in the console.
 * - Counts and displays the number of prime numbers in the merged array.
 * - Finds and displays the maximum value in the array and its location.
 * - Finds and displays the location of the element with the highest sum of neighbors.
 * - Calculates and displays the sum of values needed to equalize all elements to the maximum value in the array.
 */
export const mainJoinArr = () => {
    const arr = new ArrayService(generateArray(1, 5), generateArray(1, 5))
    console.log(arr.mergedArr);
    // console.table(arr.mergedArr);

    console.log("===== 1 =====")
    console.log("Number of prime numbers", arr.countPrimeNumbers());
    console.log("===== 2 =====")
    console.dir(arr.getMax(), {depth: null});
    console.log("===== 3 =====")
    console.log(arr.findMaxSumNeighbors());
    console.log("===== 4 =====")
    console.log(arr.sumToAddToEqualize());
}