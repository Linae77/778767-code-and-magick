//удаляем класс .hidden у объектов с классом .setup
var setupItems = document.getElementsByClassName('setup');
setupItems.classList.remove('hidden');
//генерируем массив из 4 персонажей случайным образом
var personages = [];
//функция генерации персонажа:
function createPersonage() {
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
  function generateRandom(arrLength) {
    return Math.floor(Math.random()*arrLength)
  };
  name = names[generateRandom(8)] + families[generateRandom(8)];
  coatColor = coatColors[generateRandom(6)];
  eyesColor = eyesColors[generateRandom(5)];
  return {name: name, coatColor: coatColor, eyesColor: eyesColor}
};
//IIFE функция заполнения массива из 4-х персонажей:
(function fillPersonagesArr() {
  for (var i = 1; i <= 4; i++) {
    personages.push(createPersonage())
  }
})();
//функция создания волшебника по шаблону вне DOM
function createNewWizard() {
  var wizard = document.getElementById('similar-wizard-template');
  var newWizard = wizard.cloneNode(true); //клонируем волшебника по шаблону
};
//IIFE функция заполнения свойств волшебников на основе массива персонажей
(function fillWizardsArr() {
  var newWizards = [];
  for (var i = 0; i < 4; i++) {
    newWizards.push(createNewWizard());
    // имя персонажа name запишите как текст в блок .setup-similar-label;
    var nameItem = newWizards[i].getElementsByClassName('setup-similar-label');
    nameItem.textContent(personages.name[i]);
    // Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
    var coatItem = newWizards[i].getElementsByClassName('wizard-coat');
    coatItem.setAttribute(fill, personages.coatColor[i]);
    // Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.
    var eyesItem = newWizards[i].getElementsByClassName('wizard-eyes');
    eyesItem.setAttribute(fill, personages.eyesColor[i]);
  }
})();
//Добавляем сгенерированных волшебников в блок .setup-similar-list
var similarList = document.getElementsByClassName('setup-similar-list');
var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
fragment.appendChild(newWisards[i]);
};
similarList.appendChild(fragment);
//Показываем блок .setup-similar, удалив у него CSS-класс hidden
var setupSimilarItems = document.getElementsByClassName('setup-similar');
setupSimilarItems.classList.remove('hidden');
