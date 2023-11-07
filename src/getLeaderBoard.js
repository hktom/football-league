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
          matche.matchPlayed ? matche[home] : 0,
          matche.matchPlayed ? matche[away] : 0,
          matche.matchPlayed ? Math.abs(matche[home] - matche[away]) : 0,
          matche.matchPlayed ? this.getPoints(matche[home], matche[away]) : 0
        )
      );
    } else {
      let leaderBoard = this.leaderBoards[indexLeaderBoard];
      leaderBoard.matchPlayed += matche.matchPlayed ? 1 : 0;
      leaderBoard.goalsFor += matche.matchPlayed ? matche[home] : 0;
      leaderBoard.goalsAgainst += matche.matchPlayed ? matche[away] : 0;
      leaderBoard.goalDifference = Math.abs(
        leaderBoard.goalsFor - leaderBoard.goalsAgainst
      );
      leaderBoard.points += matche.matchPlayed
        ? this.getPoints(matche[home], matche[away])
        : 0;

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

LeaderBoardTeams.prototype.orderByPoints = function () {
  this.leaderBoards.sort((a, b) => {
    if (a.points > b.points) return -1;
    if (a.points < b.points) return 1;
    return 0;
  });
};

LeaderBoardTeams.prototype.orderByHeadPoints = function () {

    let leadsWithSamePoints = [];
    this.leaderBoards.forEach((lead, index, leads)=>{
        
        let foundSameValue = leads.filter((leadFilter)=> leadFilter.points === lead.points);
        if(foundSameValue.length > 1){
            leadsWithSamePoints.push(lead);
        }

    });

    leadsWithSamePoints.sort((a, b)=>{

        let matches = this.matches.filter((match)=> match.homeTeam === a.teamName || match.awayTeam === a.teamName || match.homeTeam === b.teamName || match.awayTeam === b.teamName);

        let totalWinForA = matches.filter((match)=> {
            if(match.homeTeam === a.teamName) return  match.homeTeamScore > match.awayTeamScore;
            else return match.awayTeamScore > match.homeTeamScore;
        }).length;

        let totalWinForB = matches.filter((match)=> {
            if(match.homeTeam === b.teamName) return  match.homeTeamScore > match.awayTeamScore;
            else return match.awayTeamScore > match.homeTeamScore;
        }).length;

        if(totalWinForA > totalWinForB) return -1;
        
        if(totalWinForA < totalWinForB) return 1;

        return 0;
    });

    this.leaderBoards = this.leaderBoards.slice(leadsWithSamePoints.length);
    this.leaderBoards = leadsWithSamePoints.concat(this.leaderBoards);

};