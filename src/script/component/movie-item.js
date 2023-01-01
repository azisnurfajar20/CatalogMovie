const Path = "https://image.tmdb.org/t/p/w500/";
class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <div class="col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="${Path}/${this._movie.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${this._movie.title}</h5>
              <p class="card-text">${this._movie.release_date}</p>
            </div>  
          </div>
        </div>            
      `;
  }
}

customElements.define("movie-item", MovieItem);
