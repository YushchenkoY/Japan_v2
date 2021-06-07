class Modal {
  constructor(modalName, modalBtnClickHandler) {
    this.modal = document.getElementsByClassName(modalName)[0];
    this.modalBtn = this.modal.getElementsByClassName('modal__btn')[0];
    this.modalBtn.addEventListener('click', modalBtnClickHandler);
  }

  open() {
    this.modal.style.display = "block";
  }

  close() {
    this.modal.style.display = "none";
  }
}

class Circle {
  constructor() {
    this.wheels = document.getElementsByClassName("wheel__button");
    this.wheelSector = document.getElementsByClassName("wheel__sectors--two")
    this.firstModal = new Modal('modal--first', this.onClickBtnFirstModal.bind(this));
    this.secondModal = new Modal('modal--second', this.onClickBtnSecondModal.bind(this));

    for (let i = 0; i < this.wheels.length; i++) {
      this.wheels[i].addEventListener("click", this.onClickWheel.bind(this));
    }
  }

  onClickWheel() {
    for (let i = 0; i < this.wheelSector.length; i++) {
      this.wheelSector[i].classList.remove("animation--1");
      this.wheelSector[i].classList.add("animation--2");
    }
    setTimeout(this.firstModal.open.bind(this.firstModal), 5000);
  }

  onClickBtnFirstModal() {
    this.firstModal.close();
    for (let i = 0; i < this.wheelSector.length; i++) {
      this.wheelSector[i].classList.remove("animation--2");
      this.wheelSector[i].classList.add("animation--3");
    }
    setTimeout(this.secondModal.open.bind(this.secondModal), 5500);
  }

  onClickBtnSecondModal() {
    this.secondModal.close();
  }
}

const circle = new Circle();