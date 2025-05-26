// math function

function getCountGamePlayer(name, obj, selectedSeason) {
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

function getCountPointGamePlayer(name, obj, selectedSeason) {
  let gamePointCount = 0;
  obj.forEach((item) => {
    item.players.forEach((player) => {
      if (player.player == name) {
        gamePointCount += player.point;
      }
    });
  });
  return gamePointCount;
}

function getWinRatingPlayers(player, obj, selectedSeason) {
  let gameRating = 0;
  let gamePointCount = getCountPointGamePlayer(player, obj);
  let gameCount = getCountGamePlayer(player, obj);
  if (gamePointCount != 0 && gameCount > 2) {
    gameRating = ((gamePointCount / gameCount) * 100).toFixed(2);
    gameRating += "%";
  } else if (gameCount < 3) {
    gameRating = "-";
  } else {
    gameRating += "%";
  }

  return gameRating;
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
    let dataCell = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    dataCell[0].textContent = player;
    dataCell[1].textContent = getCountGamePlayer(player, obj);
    dataCell[2].textContent = getCountPointGamePlayer(
      player,
      obj,
    );
    dataCell[3].textContent = getWinRatingPlayers(player, obj);

    dataCell.forEach(function (cell) {
      dataRow.appendChild(cell);
    });
    DOM.playerRating.appendChild(dataRow);
  });
}

const tbodyPlayersRating = createTableRatingPlayers(gameTurbo);
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

// const tbodyFactionRatingRow = createTableRatingFactionRow(gameTurbo);

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
    dateTheadTh[1].textContent = "Місце";
    dateTheadTh[2].textContent = "Очки";

    // Add thed for table
    dateTheadTh.forEach(function (cell) {
      dateThead.appendChild(cell);
    });

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
      switch (player.position) {
        case 1:
          dataGameCell[1].className += "game_list_first_place";
          break;
        case 2:
          dataGameCell[1].className += "game_list_second_place";
          break;
        case 3:
          dataGameCell[1].className += "game_list_third_place";
          break;
        case 4:
          dataGameCell[1].className += "game_list_fourth_place";
          break;
        case 5:
          dataGameCell[1].className += "game_list_fifth_place";
          break;
        case 6:
          dataGameCell[1].className += "game_list_sixth_place";
          break;
        default:
          break;
      }
      dataGameCell[2].textContent = player.point;

      dataGameCell.forEach(function (cell) {
        dateGameRow.appendChild(cell);
      });
      dateTbody.appendChild(dateGameRow);
    });
    dataTable.appendChild(dateTbody);
    dateSpanGame.appendChild(dataTable);
    


    const dateGameDesc = document.createElement("div");
    dateGameDesc.className += "game_list_expansions_container";
    

    const dateGameExpansionTrack = document.createElement("a");    
    switch (item.track) {
      case "США":
        dateGameExpansionTrack.className += "game_list_track_usa";
        break;
      case "Велика Британія":
        dateGameExpansionTrack.className += "game_list_track_uk";
        break;
      default:
        break;
    }
    dateGameDesc.appendChild(dateGameExpansionTrack);
    

    item.expansions.forEach(function (expansion) {
      if (expansion.expansion == "Туман") {
        const dateGameExpansionWeather = document.createElement("a");
        dateGameExpansionWeather.className += "game_list_expansions_weather_fog";
        dateGameDesc.appendChild(dateGameExpansionWeather);
      };
      if (expansion.expansion == "Дощ") {
        const dateGameExpansionWeather = document.createElement("a");
        dateGameExpansionWeather.className += "game_list_expansions_weather_rain";
        dateGameDesc.appendChild(dateGameExpansionWeather);
      };
      if (expansion.expansion == "Гараж") {
        const dateGameExpansionGarage = document.createElement("a");
        dateGameExpansionGarage.className += "game_list_expansions_garage";
        dateGameDesc.appendChild(dateGameExpansionGarage);
      };   
    });

    dateSpanGame.appendChild(dateGameDesc);
    DOM.gameListAll.appendChild(dateSpanGame);
  });

}

const tableGameList = createTableListGame(gameTurbo);

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

  let tbodyPlayersRatingUpdate = createTableRatingPlayers(gameTurbo);
  let tbodyFactionRatingRowUpdate = createTableRatingFactionRow(gameTurbo);
  let tableGameListUpdate = createTableListGame(gameTurbo);

  sortTablePlayers(2);
  sortTablePlayers(3);
});
