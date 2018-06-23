var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//Функция переноса и вывода текста, если он не помещается в заданном поле
function wrapAndRenderText(ctx, text, marginLeft, marginTop, maxWidth, lineHeight) {
  var words = text.split(" ");
  var countWords = words.length;
  var line = "";
  ctx.canvas; // HTMLCanvasElement
  for (var n = 0; n < countWords; n++) {
    var testLine = line + words[n] + " ";
    var testWidth = ctx.measureText(testLine).width;
    if (testWidth > maxWidth) {
      ctx.fillText(line, marginLeft, marginTop);
      line = words[n] + " ";
      marginTop += lineHeight;
    }
    else {
      line = testLine;
    }
  };
  ctx.fillText(line, marginLeft, marginTop);
};
//Функция поиска максимума в массиве
function maxArrItem(Arr) {
var maxItem = Arr[0];
for (var i = 0; i < Arr.length; i++) {
  if (maxItem < Arr[i]) {
    maxItem = Arr[i]
  }
  return maxItem;
};
//Функция получения случайного оттенка голубого цвета
function getRandomBlueColor() {
  var randomRGBA = Math.floor(Math.random() * 10);
  return "rgba((9 + randomRGBA), (212 + randomRGBA), (227 +randomRGBA), 1)";
};
//Функция построения столбцов гистограммы
function renderHistogram(times, names) {
  var colorRec;
  var maxTimes = maxArrItem(times); // находим макс.время, соответствующее макс.высоте столбца гистограммы 150px
  var height = Math.round(150 * times[i] / maxTimes); //калибруем относительно maxTimes
  for (var i = 0; i < times.length; i++) {
    if (names[i] = "Вы") {
      colorRec = "rgba(255, 0, 0, 1)" //цвет столбца только для игрока - Вы
    } else {
      colorRec = getRandomBlueColor(); //различные оттенки голубого для остальных игроков
    }
    ctx.canvas; // HTMLCanvasElement
    ctx.fillStyle = colorRec;
    ctx.fillRect(150 + i * 90, 230 - height, 190 + i * 90, 230)
  }
};
//Функция вывода текста сверху и снизу столбцов гистограммы
function renderHistogramText(times, height) {
  ctx.canvas; // HTMLCanvasElement
  ctx.fillText("times[i]", 150 + i * 90, 220 - height);
  ctx.fillText("names[i]", 150 + i * 90, 250)
};
//Функция построения статистики игроков
function renderStatistics(ctx, names, times) {
  ctx.canvas; // HTMLCanvasElement
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 530, 290); //тень от облака
  ctx.fillStyle = "white";
  ctx.fillRect(100, 10, 520, 280); //белое облако сверху тени
  var MAX_WIDTH = 420; //ширина поля, где выводится текст
  var lineHeight = 22; //берем высоту строки 16px + межстрочный интервал 6px
  var MARGIN_LEFT = 110;
  var MARGIN_TOP = 20;
  var text = "Ура вы победили!\nСписок результатов:";
  ctx.font = '16px PT Mono';
  ctx.fillStyle = "black";
  //Выводим текст на облаке
  wrapAndRenderText(ctx, text, marginLeft, marginTop, maxWidth, lineHeight);
  //Рисуем столбцы гистограммы, высота которых соответствует времени из массива times, отступаем по 50px от краев
  renderHistogram(times, names);
  //добавляем подписи сверху и снизу:
  renderHistogramText()
};
