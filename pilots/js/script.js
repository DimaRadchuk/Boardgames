// math function

function getCountGamePlayer(name, obj) {
  let gameCount = 0;
  obj.forEach((item) => {
    item.players.forEach((player) => {
      if (player.player == name) {
        gameCount++;
      }
    });
  });
  return gameCount;
}

function getCountWinGamePlayer(name, obj) {
  let gameWinCount = 0;
  obj.forEach((item) => {
    item.players.forEach((player) => {
      if (player.player == name && item.result == "Перемога") {
        gameWinCount++;
      }
    });
  });
  return gameWinCount;
}

function getWinRatingPlayers(player, obj) {
  let gameRating = 0;
  let gameWinCount = getCountWinGamePlayer(player, obj);
  let gameCount = getCountGamePlayer(player, obj);
  if (gameWinCount != 0 && gameCount > 2) {
    gameRating = ((gameWinCount / gameCount) * 100).toFixed(2);
    gameRating += "%";
  } else if (gameCount < 3) {
    gameRating = "-";
  } else {
    gameRating += "%";
  }

  return gameRating;
}

function getPointRatingPlayer(name, obj) {
  let gamePoint = 0;

  obj.forEach((item) => {
    item.players.forEach((player) => {
      if (player.player == name && item.result == "Перемога" && item.complexity == "Зелений") {
        gamePoint = gamePoint + 1;
      } else if (player.player == name && item.result == "Перемога" && item.complexity == "Жовтий") {
        gamePoint = gamePoint + 2;
      }
      if (player.player == name && item.result == "Поразка" && item.complexity == "Зелений") {
        gamePoint = gamePoint - 1;
      } else if (player.player == name && item.result == "Поразка" && item.complexity == "Жовтий") {
        gamePoint = gamePoint - 2;
      }

    });
  });

  return gamePoint;
}

function createTableRatingPlayer(player, obj) {
  let airports = [];

  obj.forEach((item) => {
    if (airports.indexOf(item.airport) === -1) {
      airports.push(item.airport);
    }
  });

  // Create table data rows
  airports.forEach(function (airport) {
    const dataRow = document.createElement("tr");
    dataRow.className = "player_rating_row";
    let dataCell = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    dataCell[0].textContent = airport;
    dataCell[1].textContent = getCountGamePlayer(player, obj);
    dataCell[2].textContent = getCountWinGamePlayer(player,obj,);
    dataCell[3].textContent = getWinRatingPlayers(player, obj);
    dataCell[4].textContent = getPointRatingPlayer(player, obj);

    dataCell.forEach(function (cell) {
      dataRow.appendChild(cell);
    });
    DOM.playerRating.appendChild(dataRow);
  });
}

// players table--------------------------------------------------------
function createTableRatingPlayers(obj) {
  let players = [];

  obj.forEach((item) => {
    item.players.forEach((player) => {
      if (players.indexOf(player.player) === -1) {
        players.push(player.player);
      }
    });
  });

  // Create table data rows
  players.forEach(function (player) {
    const dataRow = document.createElement("tr");
    dataRow.className = "player_rating_row";
    dataRow.onclick = function() {createTableRatingPlayer(player, obj); };
    let dataCell = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    dataCell[0].textContent = player;
    dataCell[1].textContent = getCountGamePlayer(player, obj);
    dataCell[2].textContent = getCountWinGamePlayer(player,obj,);
    dataCell[3].textContent = getWinRatingPlayers(player, obj);
    dataCell[4].textContent = getPointRatingPlayer(player, obj);

    dataCell.forEach(function (cell) {
      dataRow.appendChild(cell);
    });
    DOM.playerRating.appendChild(dataRow);
  });
}

const tbodyPlayersRating = createTableRatingPlayers(gameDatePilots);
// ----------------------------------------------------------------------------
// math function

function getCountGameFaction(name, obj) {
  let gameCount = 0;
  obj.forEach((item) => {
    item.season.forEach((season) => {
      if (season.title == selectedSeason) {
        season.ring.forEach((games) => {
          games.players.forEach((faction) => {
            if (faction.faction == name) {
              gameCount++;
            }
          });
        });
      }
    });
  });
  return gameCount;
}

function getCountWinGameFaction(name, obj) {
  let gameWinCount = 0;
  obj.forEach((item) => {
    item.season.forEach((season) => {
      if (season.title == selectedSeason) {
        season.ring.forEach((games) => {
          games.players.forEach((faction) => {
            if (faction.faction == name && faction.points == 1) {
              gameWinCount++;
            }
          });
        });
      }
    });
  });
  return gameWinCount;
}

function getWinRatingFaction(faction, obj) {
  let gameRating = 0;
  let gameWinCount = getCountWinGameFaction(faction, obj);
  let gameCount = getCountGameFaction(faction, obj);
  if (gameWinCount != 0) {
    gameRating = ((gameWinCount / gameCount) * 100).toFixed(2);
  }
  gameRating += "%";
  return gameRating;
}

// faction table--------------------------------------------------------

// function createTableRatingFactionRow(obj) {
//   let selectedSeason = document.getElementById("season").value;
//   const factionsRow = document.getElementsByClassName(
//     "faction_rating_table_tr"
//   );

//   Array.from(factionsRow).forEach(function (faction, i) {
//     let dataCellFaction = [
//       document.createElement("td"),
//       document.createElement("td"),
//       document.createElement("td"),
//     ];

//     faction_name = document.getElementsByClassName("faction_rating_table_name")[
//       i
//     ].textContent;
//     dataCellFaction[0].textContent = getCountGameFaction(
//       faction_name,
//       obj,
//       selectedSeason
//     );
//     dataCellFaction[1].textContent = getCountWinGameFaction(
//       faction_name,
//       obj,
//       selectedSeason
//     );
//     dataCellFaction[2].textContent = getWinRatingFaction(
//       faction_name,
//       obj,
//       selectedSeason
//     );

//     dataCellFaction.forEach(function (child) {
//       child.className = "faction_rating_row";
//       faction.appendChild(child);
//     });
//   });
// }

// const tbodyFactionRatingRow = createTableRatingFactionRow(gameDatePilots);

// game list --------------------------------------------------------

function createTableListGame(obj) {
  const myImage = new Image(100, 200);
  obj.reverse().forEach(function (item) {
    const dateSpanGame = document.createElement("span");
    dateSpanGame.className = "game_list_block";
    const dateGameDate = document.createElement("h2");
    dateGameDate.innerHTML = item.date;
    dateSpanGame.appendChild(dateGameDate);
    DOM.gameListAll.appendChild(dateSpanGame);

    // Create table data rows
    const dataTable = document.createElement("table");
    const dateThead = document.createElement("thead");

    // Create thead
    let dateTheadTh = [
      document.createElement("th"),
      document.createElement("th"),
      document.createElement("th"),
    ];
    dateTheadTh[0].textContent = "Гравці";
    dateTheadTh[1].textContent = "Роль";
    dateTheadTh[2].textContent = "Результат";

    // Add thed for table
    dateTheadTh.forEach(function (cell) {
      dateThead.appendChild(cell);
    });

    if (item.complexity == "Зелений") {
      dataTable.className += "complexity_green";
    }
    else if (item.complexity == "Жовтий") {
      dataTable.className += "complexity_yellow";
    }
    else if (item.complexity == "Червоний") {
      dataTable.className += "complexity_red";
    }
    else if (item.complexity == "Чорний") {
      dataTable.className += "complexity_black";
    }

    dataTable.appendChild(dateThead);

    const dateTbody = document.createElement("tbody");
   
    item.players.forEach(function (player) {
      const dateGameRow = document.createElement("tr");
      let dataGameCell = [
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
      ];
      dataGameCell[0].textContent = player.player;
      if(player.pilot == "1-й пілот") {
        // myImage.src = "image/succeeded.png"
        dataGameCell[1].className += "first_pilot";
      }
      else {
        // myImage.src = "image/fall.png"
        dataGameCell[1].className += "second_pilot";
      }
      
      if(item.result == "Перемога") {
        // myImage.src = "image/succeeded.png"
        dataGameCell[2].className += "game_win";
      }
      else {
        // myImage.src = "image/fall.png"
        dataGameCell[2].className += "game_lose";
      }

      dataGameCell.forEach(function (cell) {
        dateGameRow.appendChild(cell);
      });
      dateTbody.appendChild(dateGameRow);
    });
    dataTable.appendChild(dateTbody);
    dateSpanGame.appendChild(dataTable);
    const dateGameDesc = document.createElement("h3");
    dateGameDesc.textContent = item.airport;
    dateSpanGame.appendChild(dateGameDesc);
    if (item.complexity == "Зелений") {
    }


    DOM.gameListAll.appendChild(dateSpanGame);
  });

}

const tableGameList = createTableListGame(gameDatePilots);

// onload = "sortTablePlayers(1); sortTablePlayers(3); sortTableFaction(3)";

/* update page */
$("select[id=season]").on("change", function () {
  const player = document.getElementsByClassName("player_rating_row");
  Array.from(player).forEach(function (item) {
    item.remove();
  });

  const faction = document.getElementsByClassName("faction_rating_row");
  Array.from(faction).forEach(function (item) {
    item.remove();
  });

  const block = document.getElementsByClassName("game_list_block");
  Array.from(block).forEach(function (item) {
    item.remove();
  });

  let tbodyPlayersRatingUpdate = createTableRatingPlayers(gameDatePilots);
  let tbodyFactionRatingRowUpdate = createTableRatingFactionRow(gameDatePilots);
  let tableGameListUpdate = createTableListGame(gameDatePilots);

  sortTablePlayers(2);
  sortTablePlayers(3);
});
