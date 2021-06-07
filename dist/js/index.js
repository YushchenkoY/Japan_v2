"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal(modalName, modalBtnClickHandler) {
    _classCallCheck(this, Modal);

    this.modal = document.getElementsByClassName(modalName)[0];
    this.modalBtn = this.modal.getElementsByClassName('modal__btn')[0];
    this.modalBtn.addEventListener('click', modalBtnClickHandler);
  }

  _createClass(Modal, [{
    key: "open",
    value: function open() {
      this.modal.style.display = "block";
    }
  }, {
    key: "close",
    value: function close() {
      this.modal.style.display = "none";
    }
  }]);

  return Modal;
}();

var Circle = /*#__PURE__*/function () {
  function Circle() {
    _classCallCheck(this, Circle);

    this.wheels = document.getElementsByClassName("wheel__button");
    this.wheelSector = document.getElementsByClassName("wheel__sectors--two");
    this.firstModal = new Modal('modal--first', this.onClickBtnFirstModal.bind(this));
    this.secondModal = new Modal('modal--second', this.onClickBtnSecondModal.bind(this));

    for (var i = 0; i < this.wheels.length; i++) {
      this.wheels[i].addEventListener("click", this.onClickWheel.bind(this));
    }
  }

  _createClass(Circle, [{
    key: "onClickWheel",
    value: function onClickWheel() {
      for (var i = 0; i < this.wheelSector.length; i++) {
        this.wheelSector[i].classList.remove("animation--1");
        this.wheelSector[i].classList.add("animation--2");
      }

      setTimeout(this.firstModal.open.bind(this.firstModal), 5000);
    }
  }, {
    key: "onClickBtnFirstModal",
    value: function onClickBtnFirstModal() {
      this.firstModal.close();

      for (var i = 0; i < this.wheelSector.length; i++) {
        this.wheelSector[i].classList.remove("animation--2");
        this.wheelSector[i].classList.add("animation--3");
      }

      setTimeout(this.secondModal.open.bind(this.secondModal), 5500);
    }
  }, {
    key: "onClickBtnSecondModal",
    value: function onClickBtnSecondModal() {
      this.secondModal.close();
    }
  }]);

  return Circle;
}();

var circle = new Circle();