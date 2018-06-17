//удаляем класс .hidden у объектов с классом .setup
var listItems = document.querySelectorAll('setup');
listItems.classList.remove('hidden');
//генерируем 4 персонажей случайным образом
var names = ['Иван',
'Хуан Себастьян',
'Мария',
'Кристоф',
'Виктор', 'Юлия',
'Люпита',
'Вашингтон'];
var families = ['да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'];
var coatColors = [
	rgb(101, 137, 164),
	rgb(241, 43, 107),
	rgb(146, 100, 161),
	rgb(56, 159, 117),
	rgb(215, 210, 55),
	rgb(0, 0, 0)];
var eyesColors = [black, red, blue, yellow, green];
var personages = [];
function createPersonage(number) {
  	function generateRandom(arrLength)	= Math.floor(Math.random()*arrLength);
  	this.firstName = names[generateRandom(8)];
  	this.family = families[generateRandom(8)];
  	this.name = this.firstName + this.family;
  	this.coatColor = coatColors[generateRandom(6)];
  	this.eyesColor = eyesColors[generateRandom(5)];
  	return {name, coatColor, eyesColor};
};
for (var i = 1; i <= 4; i++) {
	var personages[i] = createPersonage(i);
};
//
var elem = document.getElementById('similar-wizard-template');

.setup-similar-label name
.wizard-coat fill
.wizard-eyes fill
var element = document.createElement(tagName);
element.classList.add(className);
Item.appendChild(Arr[i])

