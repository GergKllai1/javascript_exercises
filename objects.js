const team = {
    _players:[
  {firstName:'Pablo',lastName:'Sanchez', age: 11 },
  {firstName: 'Johhny', lastName: 'Cage', age: 27}, 
  {firstName: 'Luke', lastName: 'Cage', age: 31}],
    _games: [
      {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Nachos', teamPoints: 39, opponentPoints: 55},
      {opponent: 'Tachos', teamPoints: 11, opponentPoints: 7}
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer: function(firstName,lastName,age){
    let player ={firstName: firstName, lastName:lastName, age:age};
    this._players.push(player)
    },
    addGame: function(opponentName,teamPoints,opponentPoints){
      let games = {opponentName: opponentName, teamPoints:teamPoints, opponentPoints:opponentPoints};
      this._games.push(games);
    }
  };
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  team.addGame('Dips',25,99);
  team.addGame('Chips',32,13);
  team.addGame('Tips',5,999);
  console.log(team);