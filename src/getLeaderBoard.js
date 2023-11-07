export function Match(
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

export function LeaderBoard(
  matchPlayed,
  goalsFor,
  goalsAgainst,
  goalDifference,
  points,
  teamName
) {
  this.teamName = teamName;
  this.matchPlayed = matchPlayed;
  this.goalsFor = goalsFor;
  this.goalsAgainst = goalsAgainst;
  this.goalDifference = goalDifference;
  this.points = points;
}

export function LeaderBoardTeams() {
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

LeaderBoardTeams.prototype.setLeaderBoard = function (positionName) {


  this.matches.forEach((matche, index) => {
    let indexLeaderBoard = this.leaderBoards.findIndex(
      (lead) => lead.teamName === matche[positionName]
    );

    if (indexLeaderBoard === -1) {
      this.leaderBoards.push(
        new LeaderBoard(
          matche[positionName],
          matche.matchPlayed ? 1 : 0,
          matche.homeTeamScore,
          matche.awayTeamScore,
          Math.abs(matche.homeTeamScore - matche.awayTeamScore),
          this.getPoints(matche.homeTeamScore, matche.awayTeamScore)
        )
      );
    } else {
      let leaderBoard = this.leaderBoards[indexLeaderBoard];
      leaderBoard.matchPlayed += matche.matchPlayed ? 1 : 0;
      leaderBoard.goalsFor += matche.homeTeamScore;
      leaderBoard.goalsAgainst += matche.awayTeamScore;
      leaderBoard.goalDifference += Math.abs(
        leaderBoard.goalsFor - leaderBoard.goalsAgainst
      );
      leaderBoard.points +=
        this.getPoints(matche.homeTeamScore, matche.awayTeamScore) +
        leaderBoard.points;

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
