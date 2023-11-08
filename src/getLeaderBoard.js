import dayjs from "dayjs";

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
  this.leadsWithSamePoints = [];
  this.leadsWithSamePointsMatches = [];
}

LeaderBoardTeams.prototype.getMatches = function (matches) {
  matches.forEach((matche, index) => {
    this.matches.push(
      new Match(
        [dayjs(matche.matchDate).format("D.M.YYYY"), dayjs(matche.matchDate).format("HH:mm")],
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


    let minLeads = new LeaderBoardTeams();
    minLeads.getMatches(this.leadsWithSamePointsMatches);
    minLeads.setLeaderBoard("homeTeam", "homeTeamScore", "awayTeamScore");
    minLeads.setLeaderBoard("awayTeam", "awayTeamScore", "homeTeamScore");
    minLeads.orderByPoints();

    this.leadsWithSamePoints = minLeads.leaderBoards;

    this.leaderBoards = this.leaderBoards.slice(this.leadsWithSamePoints.length);
    this.leaderBoards = this.leadsWithSamePoints.concat(this.leaderBoards);

};

LeaderBoardTeams.prototype.orderByGoalDifference = function () {
    
    this.leadsWithSamePoints.sort((a, b)=>{
        if(a.goalDifference > b.goalDifference) return -1;
        if(a.goalDifference < b.goalDifference) return 1;
        return 0;
    });

    this.leaderBoards = this.leaderBoards.slice(this.leadsWithSamePoints.length);
    this.leaderBoards = this.leadsWithSamePoints.concat(this.leaderBoards);
};

LeaderBoardTeams.prototype.orderByGoalFor = function () {
    
    this.leadsWithSamePoints.sort((a, b)=>{
        if(a.goalsFor > b.goalsFor) return -1;
        if(a.goalsFor < b.goalsFor) return 1;
        return 0;
    });

    this.leaderBoards = this.leaderBoards.slice(this.leadsWithSamePoints.length);
    this.leaderBoards = this.leadsWithSamePoints.concat(this.leaderBoards);
};

LeaderBoardTeams.prototype.orderByAlphaBetic = function () {

    this.leadsWithSamePoints.sort((a, b)=>{
        if(a.teamName < b.teamName) return -1;
        if(a.teamName > b.teamName) return 1;
        return 0;
    });

    this.leaderBoards = this.leaderBoards.slice(this.leadsWithSamePoints.length);
    this.leaderBoards = this.leadsWithSamePoints.concat(this.leaderBoards);
};

LeaderBoardTeams.prototype.orderTeams = function () {
  
  // order by points
  this.orderByPoints();

  // let leadsWithSamePoints = [];

  this.leaderBoards.forEach((lead, index, leads)=>{
        
    let foundSameValue = leads.filter((leadFilter)=> leadFilter.points === lead.points);
    if(foundSameValue.length > 1){
        this.leadsWithSamePoints.push(lead);
    }
  });

  if(this.leadsWithSamePoints.length === 0){
       // if there is no team with same points
      return
  }

  this.leadsWithSamePointsMatches = this.matches.filter((match)=>{
    let indexA = this.leadsWithSamePoints.findIndex((lead)=> lead.teamName === match.homeTeam);
    let indexB = this.leadsWithSamePoints.findIndex((lead)=> lead.teamName === match.awayTeam);

    return indexA !== -1 && indexB !== -1;
});

    // check if there is more than 2 teams with same points
    if(this.leadsWithSamePoints.length > 2) {
      return this.orderByHeadPoints();
    }

    // check if in their head matches there is a winner
    if(this.leadsWithSamePointsMatches[0].homeTeamScore !== this.leadsWithSamePointsMatches[0].awayTeamScore){
        return this.orderByHeadPoints();
    }

    // check if the got difference in goals difference
    if(this.leadsWithSamePoints[0].goalDifference !== this.leadsWithSamePoints[1].goalDifference){
        return this.orderByGoalDifference();
    }

    // check if the got difference in goals for
    if(this.leadsWithSamePoints[0].goalsFor !== this.leadsWithSamePoints[1].goalsFor){
        return this.orderByGoalFor();
    }

    // check if the got difference in alpha betic
    return this.orderByAlphaBetic();
};