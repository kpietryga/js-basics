import Text from "./text";

/**
 * Function handling operations related to random text.
 * Responsible for generating random letters and texts with specified parameters.
 */
export const textService = () => {

    /**
     * Generates a random integer within the range from min to max.
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @returns {number} - Random integer within the range.
     */
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    /**
     * Generates a random uppercase letter from A-Z.
     * @returns {string} - Random letter.
     */
    const getLetter = () => String.fromCharCode(getRandomNumber(65, 90));

    /**
     * Generates a random text consisting of n letters, where each letter appears at most m times.
     * @param {number} m - Maximum number of occurrences of each letter.
     * @param {number} n - Length of the generated text.
     * @throws {Error} - Throws an exception if it is not possible to generate a text that meets the conditions.
     * @returns {Text} - An instance of the Text class with the generated string.
     */
    const generateRandomText = (m, n) => {
        if (m * 26 < n) {
            throw new Error("Randomization error - condition cannot be met");
        }

        const charFrequence = new Map();
        let result = "";
        while (result.length < n) {
            const randomChar = getLetter();
            if (!charFrequence.has(randomChar)) {
                charFrequence.set(randomChar, 0);
            } else if (charFrequence.get(randomChar) < m) {
                result += randomChar;
                charFrequence.set(randomChar, charFrequence.get(randomChar) + 1);
            }
        }
        return new Text(result);
    }
    return {
        generateRandomText,
        getRandomNumber
    }
}
