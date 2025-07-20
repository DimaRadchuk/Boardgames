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

function getCountWinGamePlayer(name, obj, selectedSeason) {
  let gameWinCount = 0;
  obj.forEach((item) => {
    item.players.forEach((player) => {
      if (player.player == name && player.point == 1) {
        gameWinCount++;
      }
    });
  });
  return gameWinCount;
}

function getWinRatingPlayers(player, obj, selectedSeason) {
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
    dataCell[2].textContent = getCountWinGamePlayer(
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

const tbodyPlayersRating = createTableRatingPlayers(gameHiddenLeaders);
// ----------------------------------------------------------------------------
// math function

function getCountGameFaction(name, obj) {
  let gameCount = 0;
  obj.forEach((item) => {
    item.players.forEach((player) => {
      if (player.faction == name) {
        gameCount++;
      }
    });
  });
  return gameCount;
  }

function getCountWinGameFaction(name, obj) {
  let gameWinCount = 0;
  obj.forEach((item) => {
    item.players.forEach((player) => {
      if (player.faction == name && player.point == 1) {
        gameWinCount++;
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

function createTableRatingFactionRow(obj) {
  const factionsRow = document.getElementsByClassName(
    "faction_rating_table_tr"
  );

  Array.from(factionsRow).forEach(function (faction, i) {
    let dataCellFaction = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    faction_name = document.getElementsByClassName("faction_rating_table_name")[
      i
    ].textContent;
    dataCellFaction[0].textContent = getCountGameFaction(faction_name, obj);
    dataCellFaction[1].textContent = getCountWinGameFaction(faction_name, obj);
    dataCellFaction[2].textContent = getWinRatingFaction(faction_name, obj);

    dataCellFaction.forEach(function (child) {
      child.className = "faction_rating_row";
      faction.appendChild(child);
    });
  });
}

const tbodyFactionRatingRow = createTableRatingFactionRow(gameHiddenLeaders);

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
    dateTheadTh[1].textContent = "Персонаж";
    dateTheadTh[2].textContent = "Результат";

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
      dataGameCell[1].textContent = player.character;
      if (player.character == "Мірад Вигнанний") {
        dateGameRow.className += "character_mirad_vinhnannyy";
      }
      else if (player.character == "Павір Войовничий") {
        dateGameRow.className += "character_pavir_voyovnychyy";
      }
      else if (player.character == "Сайра Справедлива") {
        dateGameRow.className += "character_sayra_spravedlyva";
      }
      else if (player.character == "Еннед Невинна") {
        dateGameRow.className += "character_enned_nevynna";
      }


      if(player.point == 1) {
        dataGameCell[2].className += "player_win";
      }
      else {
        dataGameCell[2].className += "player_lose"; 
      }
      
      dataGameCell.forEach(function (cell) {
        dateGameRow.appendChild(cell);
      });
      dateTbody.appendChild(dateGameRow);
    });
    dataTable.appendChild(dateTbody);
    dateSpanGame.appendChild(dataTable);
    const dateGameDesc = document.createElement("h3");
    dateGameDesc.textContent = "Перемога: ";
    if (item.description == "Горяни") {
        dateGameDesc.className += "faction_highlanders_simlpe";
      }
    dateSpanGame.appendChild(dateGameDesc);

    DOM.gameListAll.appendChild(dateSpanGame);
  });

}

const tableGameList = createTableListGame(gameHiddenLeaders);

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

  let tbodyPlayersRatingUpdate = createTableRatingPlayers(gameHiddenLeaders);
  let tbodyFactionRatingRowUpdate = createTableRatingFactionRow(gameHiddenLeaders);
  let tableGameListUpdate = createTableListGame(gameHiddenLeaders);

  sortTablePlayers(2);
  sortTablePlayers(3);
});
