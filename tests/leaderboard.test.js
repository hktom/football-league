/**
 * 
 *  THIS IS A TESTING FILE. YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO TEST YOUR WORK.
 *  PLEASE DON´T CHANGE THE INTERFACE OF leagueService.js METHODS
 *
 */

require('jest-fetch-mock').enableMocks();
fetchMock.dontMock();

import LeagueService from "../src/services/LeagueService";

describe("laderboard", () => {
  let leagueService;

  beforeEach(() => {
    leagueService = new LeagueService();
  });

  test('check-leaderboard-teams', async () => {

    await leagueService.fetchData();

    const leaderboard = leagueService.getLeaderboard();

    const firstTeam = leaderboard[0];
    expect(firstTeam.teamName).toBe('Brazil');
    expect(firstTeam.matchPlayed).toBe(3);
    expect(firstTeam.goalsFor).toBe(8);
    expect(firstTeam.goalsAgainst).toBe(4);
    expect(firstTeam.points).toBe(7);

    const secondTeam = leaderboard[1];
    expect(secondTeam.teamName).toBe('Cameroon');
    expect(secondTeam.matchPlayed).toBe(3);
    expect(secondTeam.goalsFor).toBe(7);
    expect(secondTeam.goalsAgainst).toBe(6);
    expect(secondTeam.points).toBe(5);
  });
});