/**
 * Class representing a football team.
 *
 * @param {string} name - Name of the team.
 */
export function FootballTeam(name) {
    this.name = name;
    this.matches = [];
}

/**
 * Adds a match to the team.
 *
 * @param {Match} match - The match to add.
 */
FootballTeam.prototype.addMatch = function (match) {
    this.matches.push(match);
}