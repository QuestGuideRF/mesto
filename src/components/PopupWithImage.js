import { Popup  } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageContent = this._popupElement.querySelector('.popup__image');
    this._popupFigcaption = this._popupElement.querySelector('.popup__figcaption');
  }
  open(name, link) {
    this._popupImageContent.src = link;
    this._popupImageContent.alt = name;
    this._popupFigcaption.textContent = name;
    super.open();
  }
}