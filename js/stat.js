'use strict';
// Функция переноса и вывода текста, если он не помещается в заданном поле
(function wrapAndRenderText (context, text, marginLeft, marginTop, maxWidth, lineHeight) {
  var words = text.split(' ');
  for (var n = 0; n < words.length;; n++) {
    var testLine = '' + words[n] + ' ';
    var testWidth = context.measureText(testLine).width;
    if (testWidth > maxWidth) {
      context.fillText('', marginLeft, marginTop);
      line = words[n] + ' ';
      marginTop += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText('', marginLeft, marginTop);
  return wrapAndRenderText;
})();

// Функция получения случайного оттенка голубого цвета
(function getRandomBlueColor () {
  var randomRGBA = Math.floor(Math.random() * 50);
  var a = 9 + randomRGBA;
  var b = 212 + randomRGBA;
  var c = 227 + randomRGBA;
  var rgba = {a: a, b: b, c: c};
  return rgba.a + ', ' + rgba.b + ', ' + rgba.c + ', ' + 1; // строка
})();
// Функция построения столбцов гистограммы
(function renderHistogram (times, names) {
  var canvas = document.getElementById('canvas');
  // Функция поиска максимума в массиве
  var maxArrItem = function (items) {
    var maxItem = items[0];
    for (var i = 0; i < items.length; i++)
      if (maxItem < items[i]) {
        maxItem = items[i];
      }
    }
    return maxItem;
  };
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
  for (var i = 0, colorRec; i < times.length; i++) {
    if (names[i] === 'Вы') {
      colorRec = 'rgba(255, 0, 0, 1)'; // цвет столбца только для игрока - Вы
    } else {
      colorRec = getRandomBlueColor(); // различные оттенки голубого для остальных игроков
    }
    ctx.fillStyle = colorRec;
    // Находим максимальное время, соответствующее максимальной высоте столбца гистограммы 150px
    var maxTimes = maxArrItem(times);
    var height = Math.round(150 * times[i] / maxTimes); // калибруем относительно maxTimes
    ctx.fillRect(150 + i * 90, 230 - height, 190 + i * 90, 230);
    ctx.fillText('times[i]', 150 + i * 90, 220 - height); // выводим подписи к столбцам
    ctx.fillText('names[i]', 150 + i * 90, 250);
  }
  return renderHistogram;
})();
// Функция построения статистики игроков
(function renderStatistics (context, names, times) {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
  context.fillStyle = 'rgba(0, 0, 0, 0.7)';
  context.fillRect(110, 20, 530, 290); // тень от облака
  context.fillStyle = 'white';
  context.fillRect(100, 10, 520, 280); // белое облако сверху тени
  var MAX_WIDTH = 420; // ширина поля, где выводится текст
  var lineHeight = 22; // берем высоту строки 16px + межстрочный интервал 6px
  var MARGIN_LEFT = 110;
  var MARGIN_TOP = 20;
  var text = 'Ура вы победили!\nСписок результатов:';
  context.font = '16px PT Mono';
  context.fillStyle = 'black';
  // выводим текст на облаке
  wrapAndRenderText(ctx, text, MARGIN_LEFT, MARGIN_TOP, MAX_WIDTH, lineHeight);
  // рыисуем столбцы гистограммы, высота которых соответствует времени из массива times, отступаем по 50px от краев
  renderHistogram(times, names);
  return renderStatistics;
})();
