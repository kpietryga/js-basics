/**
 * Service for analyzing a team's matches.
 *
 * @param {FootballTeam} team - The team whose matches are being analyzed.
 * @returns {Object} - An object containing analytical methods.
 */
export const teamMatchesService = (team) => {
    const matches = team.matches;

    /**
     * Calculates the total number of points earned by the team.
     *
     * @returns {number} - Total number of points.
     */
    const getPoints = () => {
        return matches.reduce((acc, curr) => acc + curr.getPoints(), 0);
    };

    /**
     * Calculates the longest unbeaten streak at home.
     *
     * @returns {number} - Length of the longest unbeaten home streak.
     */
    const getLongestHomeUnbeatenStreak = () => {
        let maxStreak = 0;
        let currentStreak = 0;

        matches.forEach(match => {
            if (match.isHome()) {
                if (match.homeGoals >= match.awayGoals) {
                    currentStreak++;
                    if (currentStreak > maxStreak) maxStreak = currentStreak;
                } else {
                    currentStreak = 0;
                }
            }
        });

        return maxStreak;
    };

};

/**
 * Calculates the goal balance of the team.
 *
 * @returns {Object} - An object containing the number of goals scored by the team and conceded by the team.
 */
const getGoalBalance = () => {
    return matches.reduce((acc, curr) => {
        if (curr.isHome()) {
            acc.teamGoals += curr.homeGoals;
            acc.opponentGoals += curr.awayGoals;
        } else {
            acc.teamGoals += curr.awayGoals;
            acc.opponentGoals += curr.homeGoals;
        }
        return acc;
    }, {teamGoals: 0, opponentGoals: 0});
};

/**
 * Calculates the average attendance at the team's matches.
 *
 * @returns {number} - Average attendance at matches.
 */
const getAverageAttendance = () => {
    const sum = matches.reduce((sum, match) => sum + match.audience, 0);
    return sum / matches.length;
};

/**
 * Calculates the win balance at home and away.
 *
 * @returns {Object} - An object containing the number of home and away wins.
 */
const getHomeAwayWinBalance = () => {
    return matches.reduce((acc, curr) => {
        if (curr.isHomeWinner()) {
            acc.home++;
        } else if (curr.isAwayWinner()) {
            acc.away++;
        }
        return acc;
    }, {home: 0, away: 0});
};

/**
 * Calculates the biggest win and biggest loss for the team
 *
 * @returns {Object} - An object containing the biggest win and biggest loss.
 */
const getBiggestWinAndLoss = () => {
    return matches.reduce((acc, curr) => {
        let diff = curr.homeGoals - curr.awayGoals;

        if (diff === 0) {
            return acc;
        }

        if (curr.isAway()) {
            diff *= (-1);
        }

        if (diff > acc.win.diff) {
            acc.win.diff = diff;
            acc.win.result = [curr];
        } else if (diff === acc.win.diff) {
            acc.win.result.push(curr);
        }

        if (diff < acc.loss.diff) {
            acc.loss.diff = diff;
            acc.loss.result = [curr];
        } else if (diff === acc.loss.diff) {
            acc.loss.result.push(curr);
        }

        return acc;
    }, {win: {diff: 0, result: []}, loss: {diff: 0, result: []}});
};
