'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.getElementsByClassName('setup-similar');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupWizard = setup.querySelector('.setup-wizard');
var similarListElement = setup.querySelector('.setup-similar-list');

// удаляем класс .hidden у объектов с классом .setup
setup.classList.remove('hidden');
// генерируем массив из 4 персонажей случайным образом
var PERSONAGE_NUMBER = 4;
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
  var generateRandom = function (arrLength) {
    return Math.floor(Math.random() * arrLength);
  };
  var personageName = names[generateRandom(8)] + families[generateRandom(8)];
  var coatColor = coatColors[generateRandom(6)];
  var eyesColor = eyesColors[generateRandom(5)];
  return {name: personageName, coatColor: coatColor, eyesColor: eyesColor};
};
// функция заполнения массива из 4-х персонажей:
var createItems = function (number) {
  var items = [];
  for (var i = 0; i < number; i++) {
    items.push(createPersonage());
  }
  return items;
}();
// создаем массив волшебников
var wizards = createItems(PERSONAGE_NUMBER);
var wizardTemplate = document.getElementById('#similar-wizard-template');
// функция создания по шаблону и заполнения DOM-элемента
var renderWizard = function (item) {
  var newElement = wizardTemplate.cloneNode(true);
  newElement.querySelector('.setup-similar-label').textContent = item.name;
  newElement.querySelector('.wizard-coat').style.fill = item.coatColor;
  newElement.querySelector('.wizard-eyes').style.fill = item.eyesColor;
};
// функция добавления созданных элементов в блок с использованием DocumentFragment
var addElementsDOM = function (items, block) {
  var blockList = document.querySelector(block);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < items.length; i++) {
    fragment.appendChild(renderWizard(items[i]));
  }
  blockList.appendChild(fragment);
};
// добавляем созданные DOM-элементы в блок .setup-similar-list
addElementsDOM(wizards, '.setup-similar-list');

// Показываем блок .setup-similar, удалив у него CSS-класс hidden
setupSimilar.classList.remove('hidden');

// ==========Далее задание "Одеть Надежду" модуля 4===============

var ESC_KEYCODE = 13;
var

setupOpen.addEventListener('click', function() {
  setup.classList.remove('.hidden')
});

setupClose.addEventListener('click', function() {
  setup.classList.add('.hidden')
});

setupOpen.addEventListener('keydown', function() {
  setup.classList.remove('.hidden')
});

setupClose.addEventListener('keydown', function() {
  setup.classList.add('.hidden')
});

setupOpenIcon.addEventListener('focus', function() {
  if (keyCode === 27) {
    setup.classList.remove('.hidden')
  }

});

// Проверка на нажатие ESC
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// Прячет окно настроек
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
