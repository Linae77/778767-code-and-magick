'use strict';
// удаляем класс .hidden у объектов с классом .setup
var setupItems = document.getElementsByClassName('setup');
setupItems.classList.remove('hidden');
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
// IIFE функция заполнения массива из 4-х персонажей:
var createItems = function (number) {
  var items = [];
  for (var i = 0; i < number; i++) {
    items.push(createPersonage());
  }
  return items;
};
// создаем массив волшебников
var wizards = createItems(PERSONAGE_NUMBER);
var wizardTemplate = document.getElementById('#similar-wizard-template');
// функция создания по шаблону и заполнения DOM-элемента
var renderWizard = function (item) {
  var newElement = wizardTemplate.cloneNode(true);
  newElement.querySelector('.setup-similar-label').textContent = item.name;
  newElement.querySelector('.wizard-coat').style.fill = item.coatColor;
  newElement.querySelector('.wizard-eyes').style.fill = item.eyesColor;
  return newElement;
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
var setupSimilarItems = document.getElementsByClassName('setup-similar');
setupSimilarItems.classList.remove('hidden');

//
// Переменные
var openButton = document.querySelector(".open-button");
var closeButton = document.querySelector(".close-button");

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];
var WIZARDS_COUNT = 4;
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

// Функции
var onCloseClick = function() {
  closeSetupPopup();
};

var openSetupPopup = function() {
  // ОТКРЫТИЕ
  // Удалить класс
  // Показать похожих волшебником
  // Навесить обработчик на глаза, фаербол, мантию
  // Навесить обработчик на документ для ESC
  closeButton.addEventListener("click", onCloseClick);
};

var closeSetupPopup = function() {
  // ЗАКРЫТИЕ
  // Добавить класс
  // Скрыть похожих волшебником
  // Удалить обработчик на глаза, фаербол, мантию
  // Удалить обработчик на документ для ESC
  closeButton.removeEventListener("click", onCloseClick);
}

// Логика
openButton.addEventListener("click", function() {
  openSetupPopup();
});

var setupCloseEscKeyDownHandler = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    setupClose();
  }
};
var wizardCoatClickHandler = function () {
@@  -117, 42 + 117, 45 @@ var wizardNameFocusHandler = function () {
    var wizardNameBlurHandler = function () {
      document.addEventListener('keydown', setupCloseEscKeyDownHandler);
    };
    var setupCloseClickHandler = function () {
      setupClose();
    };
    var setupCloseEnterKeyDownHandler = function (evt) {
      if (evt.keyCode === ENTER_KEY_CODE) {
        setupClose();
      }
    };
    var setupOpenEnterKeyDownHandler = function (evt) {
      if (evt.keyCode === ENTER_KEY_CODE) {
        setupOpen();
      }
    };
  };
}
var setupClose = function () {
  userSetup.classList.add('hidden');
  document.removeEventListener('keydown', setupCloseEscKeyDownHandler);
  userSetupWizardCoat.removeEventListener('click', wizardCoatClickHandler);
  userSetupWizardEyes.removeEventListener('click', wizardEyesClickHandler);
  userSetupWizardFireball.removeEventListener('click', wizardFireballClickHandler);
  userSetupWizardName.removeEventListener('focus', wizardNameFocusHandler);
  userSetupWizardName.removeEventListener('blur', wizardNameBlurHandler);
  userSetupClose.removeEventListener('click', setupCloseClickHandler);
  userSetupClose.removeEventListener('keydown', setupCloseEnterKeyDownHandler);
};

var setupOpen = function () {
  userSetup.classList.remove('hidden');
  document.addEventListener('keydown', setupCloseEscKeyDownHandler);
  userSetupWizardCoat.addEventListener('click', wizardCoatClickHandler);
  userSetupWizardEyes.addEventListener('click', wizardEyesClickHandler);
  userSetupWizardFireball.addEventListener('click', wizardFireballClickHandler);
  userSetupWizardName.addEventListener('focus', wizardNameFocusHandler);
  userSetupWizardName.addEventListener('blur', wizardNameBlurHandler);
  userSetupClose.addEventListener('click', setupCloseClickHandler);
  userSetupClose.addEventListener('keydown', setupCloseEnterKeyDownHandler);
};

var wizardData = generateWizardsData(WIZARDS_COUNT);
var wizardMarkup = generateMarkup(wizardData);
userSetupSimilarList.appendChild(wizardMarkup);
userSetupSimilar.classList.remove('hidden');
userSetupOpen.addEventListener('click', setupOpen);
userSetupOpen.addEventListener('keydown', setupOpenEnterKeyDownHandler);

