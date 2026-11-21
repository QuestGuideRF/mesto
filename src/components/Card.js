export default class Card {
  constructor(
    cardData,
    templateSelector,
    handleCardClick,
    handleCardDeleteClick,
    handleCardLike,
    userId
    ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDeleteClick = handleCardDeleteClick;
    this._handleCardLike = handleCardLike;
    this._userId = userId;
    this._likes = cardData.likes;
    this._like = false;
    this._ownerId = cardData.owner._id;
    this._id = cardData._id;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);
    return cardElement;
  }
  countLikes(newLike) {
    this._likes = newLike;
    this._countLikes.textContent = this._likes.length;
  }
  setLike() {
    this._buttonLike.classList.add('elements__like-button_active');
  }
  removeLike() {
    this._buttonLike.classList.remove('elements__like-button_active');
  }
  toggleLikeState() {
    this._like = !this._like;
  }
  get like() {
    return this._like;
  }
  handleCardDelete() {
    this._element.remove();
    this._element = null;
  }
  _setEventListeners() {
    this._cardImage = this._element.querySelector('.elements__card-image');
    this._buttonLike = this._element.querySelector('.elements__like-button');
    this._cardDeleteButton = this._element.querySelector('.elements__delete-button');
    this._countLikes = this._element.querySelector('.elements__like-number');
    this._countLikes.textContent = this._likes.length;
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._buttonLike.addEventListener('click', () => {
      this._handleCardLike(this);
    });
    this._cardDeleteButton.addEventListener('click', () => {
      this._handleCardDeleteClick(this);
    });
    if (this._userId !== this._ownerId) {
      this._cardDeleteButton.remove();
    }
    if (this._id.like) {
      this.setLike();
    } else {
      this.removeLike();
    }
  }
  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardText = this._element.querySelector('.elements__card-text');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
    return this._element;
  }
}