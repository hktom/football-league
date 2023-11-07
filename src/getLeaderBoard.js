function Match(
  matchDate,
  stadium,
  homeTeam,
  awayTeam,
  matchPlayed,
  homeTeamScore,
  awayTeamScore
) {
  this.matchDate = matchDate;
  this.stadium = stadium;
  this.homeTeam = homeTeam;
  this.awayTeam = awayTeam;
  this.matchPlayed = matchPlayed;
  this.homeTeamScore = homeTeamScore;
  this.awayTeamScore = awayTeamScore;
}

function LeaderBoard(
  teamName,
  matchPlayed,
  goalsFor,
  goalsAgainst,
  goalDifference,
  points
) {
  this.teamName = teamName;
  this.matchPlayed = matchPlayed;
  this.goalsFor = goalsFor;
  this.goalsAgainst = goalsAgainst;
  this.goalDifference = goalDifference;
  this.points = points;
}

export default function LeaderBoardTeams() {
  this.leaderBoards = [];
  this.matches = [];
}

LeaderBoardTeams.prototype.getMatches = function (matches) {
  matches.forEach((matche, index) => {
    this.matches.push(
      new Match(
        matche.matchDate,
        matche.stadium,
        matche.homeTeam,
        matche.awayTeam,
        matche.matchPlayed,
        matche.homeTeamScore,
        matche.awayTeamScore
      )
    );
  });
};

LeaderBoardTeams.prototype.setLeaderBoard = function (team, home, away) {
  this.matches.forEach((matche, index) => {
    let indexLeaderBoard = this.leaderBoards.findIndex(
      (lead) => lead.teamName === matche[team]
    );

    if (indexLeaderBoard === -1) {
      this.leaderBoards.push(
        new LeaderBoard(
          matche[team],
          matche.matchPlayed ? 1 : 0,
          matche[home],
          matche[away],
          Math.abs(matche[home] - matche[away]),
          this.getPoints(matche[home], matche[away])
        )
      );
    } else {
      let leaderBoard = this.leaderBoards[indexLeaderBoard];
      leaderBoard.matchPlayed += matche.matchPlayed ? 1 : 0;
      leaderBoard.goalsFor += matche[home];
      leaderBoard.goalsAgainst += matche[away];
      leaderBoard.goalDifference = Math.abs(
        leaderBoard.goalsFor - leaderBoard.goalsAgainst
      );
      leaderBoard.points += this.getPoints(
        matche[home],
        matche[away]
      );

      this.leaderBoards[indexLeaderBoard] = leaderBoard;
    }
  });
};

LeaderBoardTeams.prototype.getPoints = function (homeScore, awayScore) {
  if (homeScore === awayScore) {
    return 1;
  } else if (homeScore > awayScore) {
    return 3;
  } else {
    return 0;
  }
};
