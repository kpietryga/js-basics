import {teamMatchesService} from "./team-marches-service";

/**
 * Class representing a football league.
 *
 * @param {FootballTeam[]} teams - List of teams participating in the league.
 */
export default function League(teams) {
    this.teams = teams;
}

/**
 * Generates a league table based on a comparison function.
 *
 * @param {Function} comparatorFn - Comparison function for sorting the table.
 * @returns {Object[]} - Sorted league table.
 */
League.prototype.generateTable = function (comparatorFn) {
    const table = this.teams.map(team => {
        const service = teamMatchesService(team)
        const points = service.getPoints();
        const {teamGoals, opponentGoals} = service.getGoalBalance();
        const goalDifference = teamGoals - opponentGoals;
        return {
            name: team.name,
            points,
            teamGoals,
            opponentGoals,
            goalDifference
        };
    });

    table.sort(comparatorFn);
    return table;
}
