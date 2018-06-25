'use strict';
var canvas = document.getElementById('canvas');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
}
// Функция переноса и вывода текста, если он не помещается в заданном поле
function wrapAndRenderText(context, text, marginLeft, marginTop, maxWidth, lineHeight) {
  var words = text.split(' ');
  var countWords = words.length;
  var line = '';
  for (var n = 0; n < countWords; n++) {
    var testLine = line + words[n] + ' ';
    var testWidth = context.measureText(testLine).width;
    if (testWidth > maxWidth) {
      context.fillText(line, marginLeft, marginTop);
      line = words[n] + ' ';
      marginTop += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, marginLeft, marginTop);
}
// Функция поиска максимума в массиве
var maxArrItem = function (items) {
  var maxItem = items[0];
  for (var i = 0; i < items.length; i++) {
    if (maxItem < items[i]) {
      maxItem = items[i];
    }
  }
  return maxItem;
};
// Функция получения случайного оттенка голубого цвета
function getRandomBlueColor() {
  var randomRGBA = Math.floor(Math.random() * 50);
  var a = 9 + randomRGBA;
  var b = 212 + randomRGBA;
  var c = 227 + randomRGBA;
  var rgba = {a: a, b: b, c: c};
  return string(rgba.a) + ', ' + string(rgba.b) + ', ' + string(rgba.c) + ', ' + 1; // строка
}
// Функция построения столбцов гистограммы
function renderHistogram(times, names) {
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
  }
}
// Функция вывода текста сверху и снизу столбцов гистограммы
function renderHistogramText(times, height, x) {
  ctx.fillText('times[x]', 150 + x * 90, 220 - height);
  ctx.fillText('names[x]', 150 + x * 90, 250);
}
// Функция построения статистики игроков
function renderStatistics(context, names, times) {
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
  // добавляем подписи сверху и снизу:
  renderHistogramText();
};
renderStatistics(null, null, null);
