'use strict';
var setupItems = document.getElementsByClassName('setup');
setupItems.classList.remove('hidden');

var wizards = [];
// функция генерации случайного элемента массива
var generateRandomArrElement = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
};
// функция генерации персонажа случайным образом:
var createPersonage = function () {
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
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var personageName = names[generateRandomArrElement(8)] + families[generateRandomArrElement(8)];
  var coatColor = coatColors[generateRandomArrElement(6)];
  var eyesColor = eyesColors[generateRandomArrElement(5)];
  return {personageName: personageName, coatColor: coatColor, eyesColor: eyesColor};
};
// IIFE функция заполнения массива wizards из 4-х персонажей:
(function fillWizards() {
  for (var i = 1; i <= 4; i++) {
    wizards.push(createPersonage());
  }
})();
// шаблон для создания волшебника
var similarWizardTemplate = document.querySelector('#similar-wizard-template');
// функция появления нового волшебника по шаблону вне DOM
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
};
// генерируем волшебников и добавляем их в блок .setup-similar-list
var similarListElement = document.getElementsByClassName('setup-similar-list');
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wisards[i]));
}
similarListElement.appendChild(fragment);
// Показываем блок .setup-similar, удалив у него CSS-класс hidden +
var setupSimilarItems = document.getElementsByClassName('setup-similar');
setupSimilarItems.classList.remove('hidden');
