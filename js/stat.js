

var canvas = document.getElementById('canvas');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d')
};

function renderStatistics(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 530, 290); //тень от облака
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 520, 280); //белое облако сверху тени

  //Пишем текст на облаке
  //Функция переноса слов текста, если он не помещается на облаке
  function wrapText(ctx, text, marginLeft, marginTop, maxWidth, lineHeight) {
    var words = text.split(" ");
    var countWords = words.length;
    var line = "";
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
    }
    ctx.fillText(line, marginLeft, marginTop);
  };
  var maxWidth = 420; //ширина поля, где выводится текст
  var lineHeight = 22; //берем высоту строки 16px + межстрочный интервал 6px
  var marginLeft = 110;
  var marginTop = 20;
  var text = 'Ура вы победили!\nСписок результатов:';
  ctx.font = '16px PT Mono';
  ctx.fillStyle = "black";
  wrapText(ctx, text, marginLeft, marginTop, maxWidth, lineHeight); //выводим текст на облаке

  //Рисуем гистограмму
  //Находим максимальное время, соответствующее максимальной высоте столбца гистограммы 150px
  var maxTimes = times[0];
  for (var i = 0; i < times.length; i++) {
    if (maxTimes < times[i]) {
      maxTimes = times[i]
    }
  };
  //Рисуем столбцы гистограммы, высота которых соответствует времени из массива times, отступаем по 50px от краев
  for (var i = 0; i < times.length; i++) {
    if (names[i] = 'Вы') {
      var colorRec = 'rgba(255, 0, 0, 1)' //цвет столбца только для игрока - Вы
    } else {
      var randomRGBA = Math.floor(Math.random() * 50);
      var colorRec = 'rgba(9 + randomRGBA, 212 + randomRGBA, 227 +randomRGBA, 1)'; //различные оттенки голубого для остальных игроков
    };
    ctx.fillStyle = colorRec;
    var height = Math.round(150 * times[i] / maxTimes); //калибруем относительно maxTimes
    ctx.fillRect(150 + i * 90, 230 - Height, 190 + i * 90, 230);
    //добавляем подписи сверху и снизу:
    ctx.fillText('times[i]', 150 + i * 90, 220 - height);
    ctx.fillText('names[i]', 150 + i * 90, 250);
  }
};

