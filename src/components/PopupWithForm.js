import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }
  setEventListeners() {
    super.setEventListeners();
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const changeButtonText = evt.submitter.textContent;
        evt.submitter.textContent = "Сохранение..."
        this._handleSubmitForm(this._getInputValues())
        .then(() => {
          this.close();
        })
        .finally(() => {
          evt.submitter.textContent = changeButtonText;
        })
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}