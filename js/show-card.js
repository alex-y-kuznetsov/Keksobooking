'use strict';

window.showCard = (function () {

  var ENTER_KEY_CODE = 13;

  // Проверка на тип события
  var eventType = function (event) {
    return (event.keyCode && event.keyCode === ENTER_KEY_CODE) || event.type === 'click';
  };

  // Показ карточки объявления
  var pinMap = document.querySelector('.tokyo__pin-map');
  var dialog = document.querySelector('.dialog');

  var openDialog = function (event) {
    window.initializePins.pinDeactivate();
    event.target.closest('.pin').classList.add('pin--active');
    window.initializePins.toggleAria(event.target.closest('.pin'));
    window.initializePins.toggleAria(dialog);
    dialog.style.display = 'block';
  };

  var openDialogEventListener = function (event) {
    if (event.target.closest('.pin') && eventType(event)) {
      openDialog(event);
    }
  };

  pinMap.addEventListener('click', openDialogEventListener);
  pinMap.addEventListener('keydown', openDialogEventListener);

  // Скрытие карточки объявления
  var dialogClose = document.querySelector('.dialog__close');

  var closeDialogEventListener = function (evt) {
    if (eventType(evt)) {
      dialog.style.display = 'none';
      window.initializePins.toggleAria(dialog);
      window.initializePins.pinDeactivate();
    }
  };

  dialogClose.addEventListener('click', closeDialogEventListener);
  dialogClose.addEventListener('keydown', closeDialogEventListener);
})();
