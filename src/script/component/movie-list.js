import "./movie-item.js";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
           .placeholder {
            font-weight: lighter;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        </style>
      `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._movies.forEach((movie) => {
      const MovieItemElement = document.createElement("movie-item");
      MovieItemElement.movie = movie;
      this.shadowDOM.appendChild(MovieItemElement);
    });
  }
}

customElements.define("movie-list", MovieList);
