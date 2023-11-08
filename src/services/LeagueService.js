import axios from "axios";
import LeaderBoardTeams from "../getLeaderBoard";

/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 *       ADDITIONALLY, MAKE SURE THAT ALL LIBRARIES USED IN THIS FILE FILE ARE COMPATIBLE WITH PURE JAVASCRIPT
 * 
 */
class LeagueService {    
    
    matches = [];
    leaderBoardTeams = [];
    success = false;

    /**
     * Sets the match schedule.
     * Match schedule will be given in the following form:
     * [
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      },
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      }    
     * ]
     * 
     * @param {Array} matches List of matches.
     */    
    setMatches(matches) {
        this.matches = matches;
    }

    /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
    getMatches() {
        let leaderBoard = new LeaderBoardTeams();
        leaderBoard.getMatches(this.matches);
        return leaderBoard.matches;
    }

    /**
     * Returns the leaderboard in a form of a list of JSON objecs.
     * 
     * [     
     *      {
     *          teamName: [STRING]',
     *          matchesPlayed: [INTEGER],
     *          goalsFor: [INTEGER],
     *          goalsAgainst: [INTEGER],
     *          points: [INTEGER]     
     *      },      
     * ]       
     * 
     * @returns {Array} List of teams representing the leaderboard.
     */
    getLeaderboard() {
        let leaderBoard = new LeaderBoardTeams();
        leaderBoard.getMatches(this.matches);
        leaderBoard.setLeaderBoard("homeTeam", "homeTeamScore", "awayTeamScore");
        leaderBoard.setLeaderBoard("awayTeam", "awayTeamScore", "homeTeamScore");
        leaderBoard.orderTeams();
        // this.leaderBoardTeams = leaderBoard.leaderBoards;
        return leaderBoard.leaderBoards;
    }
    
    /**
     * Asynchronic function to fetch the data from the server.
     */
    async fetchData() {
        // axios header
        const fetcher = axios.create({
            baseURL: 'http://127.0.0.1:3001/api',
            headers: { 
                'Authorization': 'Bearer YuHBdSlDXY000xa8IlCm7Qgq4_s'
              }
          });
          
        try {
            const response = await fetcher.get('/v1/getAllMatches');
            const { matches, success } = response.data;    
            this.setMatches(matches);
            this.success = success;
        } catch (error) {
            this.success = false;
        }
    }    
}

export default LeagueService;