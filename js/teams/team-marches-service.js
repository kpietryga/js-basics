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