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

