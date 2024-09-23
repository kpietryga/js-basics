/**
 * A class implementing the Sieve of Eratosthenes, used to find prime numbers
 * in a given range from 0 to x.
 */
export class EratosthenesSieve {

    /**
     * Initializes an instance of the EratosthenesSieve class.
     *
     * @param {number} x - The upper bound of the range for which the sieve should be generated.
     */
    constructor(x) {
        this.sieve = EratosthenesSieve.#sieveGenerator(x)
    }

    /**
     * Checks if the given number is a prime number.
     *
     * @param {number} x - The number to be checked.
     * @returns {boolean} - Returns true if the number x is prime, otherwise false.
     */
    isPrime(x) {
        return this.sieve[x];
    }

    /**
     * Generates the Sieve of Eratosthenes for numbers in the range from 0 to x.
     * Returns an array where elements with an index corresponding to a prime number have a value of 1,
     * and other numbers have a value of 0.
     *
     * @param {number} x - The upper bound of the range for which the sieve should be generated.
     * @returns {number[]} - An array representing the Sieve of Eratosthenes.
     *
     * @private
     */
    static #sieveGenerator(x) {
        //console.log([...Array(x + 1)]);
        return [...Array(x + 1)].map((el, i) => {

            if (i < 2) {
                return 0
            }

            if (i === 2 || i === 3) {
                return 1
            }

            if (i % 2 === 0 || i % 3 === 0) {
                return 0
            }

            let j = 5;
            while (j * j <= x) {
                if (x % j === 0 || x % (j + 2) === 0) {
                    return 0
                }
                j += 6;
            }

            return 1
        })
    }
}
