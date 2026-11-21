export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkStatusResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка в ${res.status}`);
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/карты`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatusResponse(res);
    });
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatusResponse(res);
    });
  }
  setUserInfoProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }).then((res) => {
      return this._checkStatusResponse(res);
    });
  }
  createNewCard(data) {
    return fetch(`${this._baseUrl}/карты`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    }).then((res) => {
      return this._checkStatusResponse(res);
    });
  }
  addlikeCard(_id) {
    return fetch(`${this._baseUrl}/карточки/${_id}/лайки`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatusResponse(res);
    });
  }
  deleteCard(_id) {
    return fetch(`${this._baseUrl}/карты/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkStatusResponse(res);
    });
  }
  editUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return this._checkStatusResponse(res);
    });
  }
  deleteCardLike(_id) {
    return fetch(`${this._baseUrl}/карточки/${_id}/лайки`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this._checkStatusResponse(res);
    });
  }
}