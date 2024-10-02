/**
 * Class representing a football match.
 *
 * @param {string} name - Opponent's name.
 * @param {string} status - Match status (HOME or AWAY).
 * @param {string} score - Match score in the format "homeScore:awayScore".
 * @param {number} audience - Attendance at the match.
 */
export function Match(name, status, score, audience) {
    this.name = name;
    this.status = status;
    this.score = score;
    this.audience = audience;
    this.homeGoals = this._getResult()[0];
    this.awayGoals = this._getResult()[1];
}

/**
 * Checks if the match was played at home (HOME).
 *
 * @returns {boolean} - Whether the match was played at home.
 */
Match.prototype.isHome = function () {
    return this.status === 'HOME';
}

/**
 * Checks if the match was played away (AWAY).
 *
 * @returns {boolean} - Whether the match was played away.
 */
Match.prototype.isAway = function () {
    return this.status === 'AWAY';
}

/**
 * Checks if the team won the home match.
 *
 * @returns {boolean} - Whether the team won the home match.
 */
Match.prototype.isHomeWinner = function () {
    return this.isHome() && this.homeGoals > this.awayGoals;
}

/**
 * Checks if the team won the away match.
 *
 * @returns {boolean} - Whether the team won the away match.
 */
Match.prototype.isAwayWinner = function () {
    return this.isAway() && this.homeGoals < this.awayGoals;
}

/**
 * Returns the match result as an array [homeGoals, awayGoals].
 *
 * @returns {number[]} - Match result as an array of two numbers.
 */
Match.prototype._getResult = function () {
    return this.score.split(':').map(Number);
}

/**
 * Calculates the points earned from the match.
 * - 1 point for a draw.
 * - 3 points for a win.
 * - 0 points for a loss.
 *
 * @returns {number} - Number of points for the match.
 */
Match.prototype.getPoints = function () {
    if (this.homeGoals === this.awayGoals) {
        return 1;
    }

    if (this.isHomeWinner() || this.isAwayWinner()) {
        return 3;
    }

    return 0;
}
