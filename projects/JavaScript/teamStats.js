const team = {

    get players () {
      return this._players
    },
  
    get games () {
      return this._games
    },
  
    _players: [
        {firstName: 'August', lastName: 'Avery', age: 11},
        {firstName: 'Vera', lastName: 'Vanguard', age: 13},
        {firstName: 'Dylan', lastName: 'Dalton', age: 11},
    ],
  
    _games: [
        {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
        {opponent: 'Dodgers', teamPoints: 37, opponentPoints: 36},
        {opponent: 'Astros', teamPoints: 12, opponentPoints: 18},
    ],
  
    addPlayer (firstName, lastName, age) {
      const newPlayer = new Object()
      newPlayer.firstName = firstName
      newPlayer.lastName = lastName
      newPlayer.age = age
  
      this._players.push(newPlayer)
  
    },
  
    addGame (opponentName, opponentPoints, teamPoints) {
      const newGame = new Object()
      newGame.opponent = opponentName
      newGame.opponentPoints = opponentPoints
      newGame.teamPoints = teamPoints
  
      this._games.push(newGame)
  
    },
    
  }
  
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  team.addGame('Yankees', 23, 17)
  team.addGame('Metts', 45, 28)
  team.addGame('Hurricanes', 19, 44)
  
  playerList = team.players
  gameList = team.games
  console.log(gameList)
  console.log(playerList)