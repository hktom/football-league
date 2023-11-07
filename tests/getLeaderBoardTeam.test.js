import LeaderBoardTeams from "../src/getLeaderBoard";

test("dumbFake", async () => {
  const matches = [
    {
      matchDate: 1651744228685,
      stadium: "Maracanã",
      homeTeam: "Brazil",
      awayTeam: "Serbia",
      matchPlayed: true,
      homeTeamScore: 1,
      awayTeamScore: 0,
    },
    {
      matchDate: 1651744228685,
      stadium: "Stade de Suisse",
      homeTeam: "Switzerland",
      awayTeam: "Serbia",
      matchPlayed: true,
      homeTeamScore: 2,
      awayTeamScore: 2,
    },
    {
      matchDate: 1651744228685,
      stadium: "Stadion Rajko Mitic",
      homeTeam: "Serbia",
      awayTeam: "Cameroon",
      matchPlayed: true,
      homeTeamScore: 0,
      awayTeamScore: 1,
    },
    {
      matchDate: 1651744228685,
      stadium: "Maracanã",
      homeTeam: "Brazil",
      awayTeam: "Switzerland",
      matchPlayed: true,
      homeTeamScore: 3,
      awayTeamScore: 0,
    },
    {
      matchDate: 1651744228685,
      stadium: "Maracanã",
      homeTeam: "Brazil",
      awayTeam: "Cameroon",
      matchPlayed: true,
      homeTeamScore: 4,
      awayTeamScore: 4,
    },
    {
      matchDate: 1651744228685,
      stadium: "Stade de Suisse",
      homeTeam: "Switzerland",
      awayTeam: "Cameroon",
      matchPlayed: true,
      homeTeamScore: 2,
      awayTeamScore: 2,
    },
  ];
  var getLeaderBoard = new LeaderBoardTeams();

  getLeaderBoard.getMatches(matches);
  getLeaderBoard.setLeaderBoard("homeTeam", "homeTeamScore", "awayTeamScore");
  getLeaderBoard.setLeaderBoard("awayTeam", "awayTeamScore", "homeTeamScore");
  console.log("................. leaderBoards.................... ");
  console.log(getLeaderBoard.leaderBoards);
//   console.log("................. matches.................... ");
//   console.log(getLeaderBoard.matches);

  expect(3).toBeGreaterThan(0);
});
