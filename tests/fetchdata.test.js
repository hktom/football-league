import LeagueService from "../src/services/LeagueService";

test('fetchData', async () => {

    const leagueService = new LeagueService();
    await leagueService.fetchData();
    
    expect(leagueService.success).toBe(true);
    expect(leagueService.matches.length).toBeGreaterThan(0);
});