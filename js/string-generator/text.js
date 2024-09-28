/**
 * A class representing text and various operations on that text.
 * Stores the positions of letters, calculates distances between repeating letters,
 * and generates symmetric versions of letters.
 */
export default class Text {

    /**
     * Constructor creating a text object.
     * @param {string} word - The string to be analyzed.
     */
    constructor(word) {
        this.word = word;
        this.chars = [...word];
        this.positions = this.#countPosition();
        this.distances = this.#countDistances();
    }


    /**
     * Generates a symmetric text where each letter is replaced by its symmetric counterpart from the alphabet.
     * @returns {string} - The symmetric text.
     */
    generateSymmetricWords() {
        return this.chars.map(word => Text.symmetricMap.get(word)).join("");
    }

    /**
     * Calculates the positions of all occurrences of each letter in the text.
     * @private
     * @returns {Map} - A map containing letters and lists of their positions.
     */
    #countPosition() {
        return this.chars.reduce((acc, curr, i) => {
            if (acc.has(curr)) {
                acc.get(curr).push(i);
            } else {
                acc.set(curr, [i]);
            }
            return acc;
        }, new Map());
    }

    /**
     * Calculates the distances between consecutive occurrences of each letter in the text.
     * @private
     * @returns {Map} - A map containing letters and sums of distances between their occurrences.
     */
    #countDistances() {
        const distanceByChar = new Map();

        for (let [key, value] of this.positions) {
            let totalDistance = 0;
            for (let i = 1; i < value.length; i++) {
                totalDistance += value[i] - value[i - 1];
            }
            distanceByChar.set(key, totalDistance);
        }
        return distanceByChar;
    }

    static symmetricMap = Text.generateSymmetricMap();

    /**
     * Generates a map of symmetric letters in the alphabet (e.g., A -> Z, B -> Y).
     * @returns {Map} - A map of symmetric letters.
     */
    static generateSymmetricMap() {
        const symmetricMap = new Map();
        let max = 90;
        for (let i = 65; i <= 90; i++) {
            symmetricMap.set(String.fromCharCode(i), String.fromCharCode(max));
            max--;
        }
        return symmetricMap;
    }
}
