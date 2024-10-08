import {FootballTeam} from "./team";
import {Match} from "./match";
import League from "./league";
import {teamMatchesService} from "./team-marches-service";

/**
 * Main program function that creates teams, adds matches,
 * calculates statistics for the teams, and generates the league table.
 */
export const mainTeams = () => {

    // Creating TEAM A and adding matches
    const teamA = new FootballTeam('TEAM A');
    teamA.addMatch(new Match("TEAM B", "HOME", "3:1", 1000));
    teamA.addMatch(new Match("TEAM B", "AWAY", "1:2", 7000));
    teamA.addMatch(new Match("TEAM C", "AWAY", "2:2", 8000));
    teamA.addMatch(new Match("TEAM C", "HOME", "0:0", 2000));
    teamA.addMatch(new Match("TEAM D", "HOME", "3:0", 1500));
    teamA.addMatch(new Match("TEAM D", "AWAY", "2:3", 4000));

    // Creating TEAM B and adding matches
    const teamB = new FootballTeam('TEAM B');
    teamB.addMatch(new Match('TEAM A', 'AWAY', '3:1', 1000));
    teamB.addMatch(new Match('TEAM A', 'HOME', '1:2', 7000));
    teamB.addMatch(new Match('TEAM C', 'HOME', '2:2', 8000));
    teamB.addMatch(new Match('TEAM C', 'AWAY', '0:0', 4000));
    teamB.addMatch(new Match('TEAM D', 'HOME', '2:1', 6000));
    teamB.addMatch(new Match('TEAM D', 'AWAY', '1:0', 3000));

    // Creating TEAM C and adding matches
    const teamC = new FootballTeam('TEAM C');
    teamC.addMatch(new Match('TEAM A', 'HOME', '2:2', 8000));
    teamC.addMatch(new Match('TEAM A', 'AWAY', '0:0', 2000));
    teamC.addMatch(new Match('TEAM B', 'HOME', '0:0', 4000));
    teamC.addMatch(new Match('TEAM B', 'AWAY', '2:2', 8000));
    teamC.addMatch(new Match('TEAM D', 'HOME', '3:1', 2000));
    teamC.addMatch(new Match('TEAM D', 'AWAY', '1:3', 3000));

    // Creating TEAM D and adding matches
    const teamD = new FootballTeam('TEAM D');
    teamD.addMatch(new Match('TEAM A', 'AWAY', '3:0', 1500));
    teamD.addMatch(new Match('TEAM A', 'HOME', '2:3', 4000));
    teamD.addMatch(new Match('TEAM B', 'HOME', '1:0', 3000));
    teamD.addMatch(new Match('TEAM B', 'AWAY', '2:1', 6000));
    teamD.addMatch(new Match('TEAM C', 'AWAY', '3:1', 2000));
    teamD.addMatch(new Match('TEAM C', 'HOME', '1:3', 3000));

    // Creating a service for TEAM A to calculate statistics
    const serviceMatchTeamA = teamMatchesService(teamA);


    /**
     * Part a: Calculate and display the total points for TEAM A
     */
    console.log("================ A ================")
    console.log("Total points:", serviceMatchTeamA.getPoints())


    /**
     * Part b: Calculate and display the longest home unbeaten streak for TEAM A
     */
    console.log("================ B ================")
    console.log("Longest home unbeaten streak:", serviceMatchTeamA.getLongestHomeUnbeatenStreak());

    /**
     * Part c: Calculate and display the goal balance for TEAM A (difference between goals scored and goals conceded)
     */
    console.log("================ C ================")
    console.log("Goal balance:", serviceMatchTeamA.getGoalBalance());

    /**
     * Part d: Calculate and display the average attendance for TEAM A
     */
    console.log("================ D ================")
    console.log("Average attendance:", serviceMatchTeamA.getAverageAttendance());

    /**
     * Part e: Calculate and display the home and away win balance for TEAM A
     */
    console.log("================ E ================")
    console.log("Win balance:", serviceMatchTeamA.getHomeAwayWinBalance());

    /**
     * Part f: Calculate and display the biggest win and loss for TEAM A
     */
    console.log("================ F ================")
    console.log("Biggest loss", serviceMatchTeamA.getBiggestWinAndLoss().loss);
    console.log("Biggest win", serviceMatchTeamA.getBiggestWinAndLoss().win);

    /**
     * Part g: Calculate statistics related to goals for TEAM A
     * - Average minutes per goal scored
     * - Average minutes per goal conceded
     */
    console.log("================ G ================")
    console.log(serviceMatchTeamA.calculateGoalStatistics())
    console.log(`The team scores a goal every ${serviceMatchTeamA.calculateGoalStatistics().minutesPerGoalScored.toFixed(2)} minutes.`);
    console.log(`The team concedes a goal every ${serviceMatchTeamA.calculateGoalStatistics().minutesPerGoalLosses.toFixed(2)} minutes.`);

    /**
     * Part h: Create a league and generate the league table for TEAM A, TEAM B, TEAM C, TEAM D
     * The table is sorted by points, goal difference, goals scored, and goals conceded.
     */
    console.log("================ H ================")
    const league = new League([teamA, teamB, teamC, teamD]);
    const comparator = (a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
        if (b.teamGoals !== a.teamGoals) return b.teamGoals - a.teamGoals;
        return a.opponentGoals - b.opponentGoals;
    }
    console.log('League table:', league.generateTable(comparator));
}
