class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
        "Content-Type": "application/json",
      },
    }).then(this.checkResponse);
  }

  login({ password, email }) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then(this.checkResponse);
  }

  registration({ password, email, name }) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
        name,
      }),
    }).then(this.checkResponse);
  }

  updateProfile({ name, email }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }).then(this.checkResponse);
  }

  deleteLike(_id) {
    return fetch(`${this.baseUrl}/movies/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
        "Content-Type": "application/json",
      },
    }).then(this.checkResponse);
  }

  addLike({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  }) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: image.url,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail: image.formats.thumbnail.url,
        movieId: id,
      }),
    }).then(this.checkResponse);
  }

  getProfileInfo(jwt) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then(this.checkResponse);
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.davidmovie.nomoredomainsicu.ru",
  headers: {
    authorization: `Bearer ${localStorage.getItem("JWT")}`,
    "Content-Type": "application/json",
  },
});
