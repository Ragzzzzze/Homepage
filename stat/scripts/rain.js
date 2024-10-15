var makeItRain = function() {

  $('.rain').empty();

  var horizontalPos = 0;
  var drops = "";
  var backDrops = "";

  while (horizontalPos < 100) {

    var randoHund = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    var randoHorPos = (Math.floor(Math.random() * (2 - 2 + 1) + 2));

    horizontalPos += randoHorPos;
    drops += '<div class="drop" style="left: ' + horizontalPos + '%; bottom: ' + (randoHorPos + randoHorPos - 1 + 100) + '%; animation-delay: 0.' + randoHund + 's; animation-duration: 0.5' + randoHund + 's;"><div class="stem" style="animation-delay: 0.' + randoHund + 's; animation-duration: 0.5' + randoHund + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHund + 's; animation-duration: 0.5' + randoHund + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + horizontalPos + '%; bottom: ' + (randoHorPos + randoHorPos - 1 + 100) + '%; animation-delay: 0.' + randoHund + 's; animation-duration: 0.5' + randoHund + 's;"><div class="stem" style="animation-delay: 0.' + randoHund + 's; animation-duration: 0.5' + randoHund + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHund + 's; animation-duration: 0.5' + randoHund + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

makeItRain();