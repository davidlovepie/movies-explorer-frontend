class MoviesApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getMovies() {
    return fetch(`${this.baseUrl}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this.checkResponse);
  }

  getUser(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    authorization: `Bearer ${localStorage.getItem("JWT")}`,
    "Content-Type": "application/json",
  },
});
