import LeagueService from "../src/services/LeagueService";

test('test fetch data', async () => {

    const leagueService = new LeagueService();
    const {success, matches} = await leagueService.fetchData();
    
    expect(success).toBe(true);
    expect(matches.length).toBeGreaterThan(0);
});